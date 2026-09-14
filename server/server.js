/* =========================================================
   NyanyiKu — Pelayan Bilik
   Menyediakan aplikasi web (statik) DAN WebSocket seiras:
   - bilik sembang (chat relay)
   - bilik koir (presence + signaling WebRTC)

   Cara jalankan:
     npm install ws
     node server/server.js
   kemudian buka http://localhost:8090
   Untuk telefon lain, guna alamat IP komputer ini, cth:
     ws://192.168.1.10:8090/ws  (tetapan ⚙️ Pelayan dalam app)
   ========================================================= */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { WebSocketServer } = require('ws');

const PORT = process.env.PORT || 8090;
const WWW = path.join(__dirname, '..', 'www');
const ROOT = path.join(__dirname, '..');
const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg', '.m4a': 'audio/mp4', '.wav': 'audio/wav',
  '.apk': 'application/vnd.android.package-archive'
};

function sendFile(res, file, downloadName) {
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); return res.end('Tidak dijumpai'); }
    const headers = { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' };
    if (downloadName) headers['Content-Disposition'] = `attachment; filename="${downloadName}"`;
    res.writeHead(200, headers);
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  // Halaman utama = laman web rasmi; aplikasi di /app
  if (urlPath === '/' || urlPath === '/landing.html') return sendFile(res, path.join(WWW, 'landing.html'));
  if (urlPath === '/app' || urlPath === '/app/' || urlPath === '/app/index.html') return sendFile(res, path.join(WWW, 'index.html'));
  // Muat turun APK terus dari folder apk/
  if (urlPath === '/download/nyanyiku.apk') {
    const candidates = ['NyanyiKu-v0.8.0-release.apk', 'NyanyiKu-v0.7.0-release.apk'];
    for (const c of candidates) {
      const f = path.join(ROOT, 'apk', c);
      if (fs.existsSync(f)) return sendFile(res, f, 'NyanyiKu.apk');
    }
    res.writeHead(404); return res.end('APK tidak dijumpai');
  }
  const file = path.normalize(path.join(WWW, urlPath));
  if (!file.startsWith(WWW)) { res.writeHead(403); return res.end('Dilarang'); }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); return res.end('Tidak dijumpai'); }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
    res.end(data);
  });
});

const wss = new WebSocketServer({ server, path: '/ws' });
/** rooms: Map<roomId, Map<id, {ws,name,kind}>> */
const rooms = new Map();
let idSeq = 1;

function broadcast(roomId, msg) {
  const room = rooms.get(roomId);
  if (!room) return;
  const payload = JSON.stringify(msg);
  for (const m of room.values()) {
    if (m.ws.readyState === 1) m.ws.send(payload);
  }
}
function presence(roomId) {
  const room = rooms.get(roomId);
  if (!room) return;
  broadcast(roomId, {
    t: 'presence',
    members: [...room.values()].map(m => ({ id: m.id, name: m.name, kind: m.kind }))
  });
}

wss.on('connection', ws => {
  const id = 'u' + (idSeq++);
  let roomId = null, member = null;

  ws.on('message', raw => {
    let m; try { m = JSON.parse(raw); } catch (e) { return; }

    if (m.t === 'join') {
      if (roomId) leaveRoom();
      roomId = String(m.room || 'umum');
      if (!rooms.has(roomId)) rooms.set(roomId, new Map());
      member = { id, ws, name: String(m.name || 'Tanpa Nama').slice(0, 20), kind: m.kind || 'chat' };
      rooms.get(roomId).set(id, member);
      ws.send(JSON.stringify({ t: 'welcome', id }));
      broadcast(roomId, { t: 'sys', text: `${member.name} masuk bilik` });
      presence(roomId);
      console.log(`[bilik:${roomId}] ${member.name} (${id}) sertai — ${rooms.get(roomId).size} ahli`);
      return;
    }
    if (!roomId || !member) return;

    if (m.t === 'chat') {
      const text = String(m.text || '').slice(0, 500);
      if (!text.trim()) return;
      broadcast(roomId, { t: 'chat', id, name: member.name, text, ts: Date.now() });
      return;
    }
    if (m.t === 'signal' && m.to) {
      // signaling WebRTC: tawaran/jawapan/ICE dihantar terus kepada ahli sasaran
      const target = rooms.get(roomId)?.get(String(m.to));
      if (target && target.ws.readyState === 1) {
        target.ws.send(JSON.stringify({ t: 'signal', from: id, data: m.data || {} }));
      }
      return;
    }
    if (m.t === 'stage') {
      broadcast(roomId, { t: 'stage', id, on: !!m.on });
    }
  });

  function leaveRoom() {
    if (!roomId) return;
    const room = rooms.get(roomId);
    if (room) {
      const name = member ? member.name : id;
      room.delete(id);
      broadcast(roomId, { t: 'sys', text: `${name} keluar bilik` });
      presence(roomId);
      if (room.size === 0) rooms.delete(roomId);
    }
    roomId = null; member = null;
  }
  ws.on('close', leaveRoom);
  ws.on('error', () => {});
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`🎤 Pelayan NyanyiKu di http://localhost:${PORT}  (WebSocket /ws)`);
});
