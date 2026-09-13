# 🎤 NyanyiKu — Aplikasi Karaoke (v0.6)

Aplikasi karaoke ala **StarMaker** untuk Android, dibina dengan HTML/CSS/JavaScript
dan dibungkus sebagai APK asli menggunakan **Capacitor**. Boleh berfungsi luar talian,
dan menyokong bilik sembang/koir berbilang pengguna apabila pelayan dijalankan.

## ✨ Ciri

### Nyanyian
- Lirik bergerak selari masa (format `.LRC`)
- Main / jeda / gulung semula / bar kemajuan boleh disentuh
- Rakam suara + **5 kesan suara**: 🎙️ Gema, 🚿 Bilik, 🏛️ Konsert, ⛪ Gereja, 🎤 Suara Asli
- Dengar diri, meter suara, kawalan volum, skrin hasil & muat turun rakaman
- **Maklum balas pic masa nyata** (baharu v0.4): jarum ♭/●/♯ membimbing anda ke nota
  sasaran, diikuti **skor 0–100, bintang ⭐ dan gred S/A/B/C** selepas rakaman
  (pengesan pic autokorelasi AMDF berjalan sepenuhnya dalam peranti)
- Muat naik lagu sendiri (MP3/M4A/WAV), tersimpan kekal dalam peranti
- **Pencari lirik dalam talian** (baharu v0.5): selepas memilih fail muzik, app mencari
  lirik selari masa menerusi **LRCLIB** (`lrclib.net` — percuma, tanpa kunci API, CORS
  terbuka); hasil disusun utamakan lirik bercap masa, lirik biasa diagih sekata, dan
  fail `.LRC` sendiri / mod tanpa lirik kekal sebagai sandaran luar talian
- **Cari lagu dalam talian** (baharu v0.6): skrin khas dengan kotak carian mana-mana
  artis/lagu serta cip genre **Carta Teratas, Pop, Balada/Akustik, Rock** (iTunes Search
  API & RSS, percuma tanpa kunci); dengar pratonton 30 saat dengan kulit album, kemudian
  satu sentuhan *Nyanyi* — klip AAC (~1MB) dan lirik LRCLIB disimpan ke IndexedDB.
  Jujur dipaparkan kepada pengguna: klip pratonton mengandungi vokal asal, bukan
  instrumental karaoke penuh

### 🌐 Laman web rasmi (ala starmakerstudios.com)
- `www/landing.html` — hero dengan telefon terapung, karusel **testimoni 5 bintang**
  automatik, gambar skrin sebenar, seksyen maklum balas pic & skor, kad peraduan
  **Naik Nama** (akan datang), butang gaya gedung aplikasi, langkah & muat turun APK
- Pelayan membekalkan: `/` = laman web, `/app` = aplikasi, `/download/nyanyiku.apk` = APK
- Gambar skrin dijana automatik di `www/assets/showcase/`

### 🤖 AI Cipta Lagu (baharu v0.2)
- Taip lirik sendiri (sehingga 8 baris), pilih mood: **Ceria, Romantis, Semangat, Sedih**
- AI menjana **melodi, kord, bes dan rentak** mengikut mood — setiap janaan unik
  (melodi ikut suku kata, dilaraskan kepada nada kord pada hujung frasa)
- Lagu AI disimpan dalam tab Lagu (lencana ungu "AI ✨") dan boleh dinyanyi/dirakam

### 🚪 Bilik (baharu v0.2)
- **Bilik Solo** 🎤 — pintas terus ke senarai lagu untuk nyanyi & rakam sendirian
- **Bilik Sembang** 💬 — 3 ruang: Sembang Santai, Cari Kawan Duet, Permintaan Lagu
- **Bilik Koir** 🎶 — pentas 8 kerusi, lihat siapa sedang menyanyi, naik/turun pentas
- Audio berbilang pengguna menggunakan **WebRTC** (suara terus antara peranti, P2P)
- **Mod demo luar talian**: tanpa pelayan, bilik diisi penyanyi & mesej simulasi
  supaya aplikasi tetap boleh dicuba dan dirasai
- Nama samaran anda tersimpan; butang kembali Android berfungsi pada setiap skrin

## 📦 Pasang APK

Gunakan `apk/NyanyiKu-v0.6.0-release.apk` (~7 MB, bertandatangan).
Salin ke telefon Android 6.0+ → buka fail → benarkan pemasangan dari sumber ini → Pasang.
Semasa pertama kali merakam atau naik pentas, benarkan akses **mikrofon**.
🎧 Pakai fon kepala semasa menyanyi/koir untuk elak dengung.

## 🌐 Hidupkan bilik berbilang pengguna sebenar

Secara lalai aplikasi cuba menyambung ke pelayan pada `/ws`; jika gagal ia jatuh ke
mod demo. Untuk sembang & koir dengan rakan sebenar pada rangkaian yang sama:

```bash
cd karaoke-app
npm install
npm run server        # pelayan di http://localhost:8090 (app + WebSocket)
```

1. Buka `http://<IP-komputer-anda>:8090` pada telefon yang tersambung WiFi yang sama.
2. Dalam aplikasi: tab **Bilik → ⚙️ Pelayan**, masukkan `ws://<IP-komputer>:8090/ws`.
3. Atau pasang APK yang dibina dengan menunjuk ke pelayan ini.

Pelayan (`server/server.js`, guna pakej `ws`) hanya menyampaikan mesej dan signaling
WebRTC; suara dihantar terus antara peranti (STUN awam Google disertakan). Untuk
kegunaan internet sebenar anda perlukan alamat domain/HTTPS/WSS dan pelayan TURN.

## 🛠️ Bina semula

```bash
npm install
# Edit aplikasi di www/index.html; pelayan di server/server.js
npx cap sync android
cd android
./gradlew assembleDebug      # → app/build/outputs/apk/debug/
./gradlew assembleRelease    # → app/build/outputs/apk/release/
```

Cuba dalam pelayar: `npm run serve` (statik, mod demo) atau `npm run server` (bilik hidup).

Tandatangan release: `android/nyanyiku.keystore` (kata laluan dalam
`android/keystore.properties`). Untuk Play Store, jana kunci baharu anda sendiri.

## 📁 Struktur

```
karaoke-app/
├── www/index.html      # Semua UI + logik: lagu, AI, sembang, koir (satu fail)
├── server/server.js    # Pelayan statik + WebSocket (sembang & signaling WebRTC)
├── android/            # Projek Android (Capacitor)
├── apk/                # APK siap pasang
└── capacitor.config.json
```

## 🗺️ Roadmap

- [x] Rakaman + gema, lirik LRC, muat naik lagu
- [x] AI cipta lagu (melodi/kord/rentak ikut mood)
- [x] Bilik solo, sembang, koir (demo + pelayan WebSocket/WebRTC)
- [x] **Skor nyanyian** dengan maklum balas pic masa nyata (v0.4)
- [ ] Sorotan lirik perkataan demi perkataan
- [ ] Lebih kesan suara (pop, konsert, robot) & campur rakaman ke MP4
- [ ] Rakaman video muka, mod duet terancang dengan garisan panduan
- [ ] Akaun pengguna, kawan, suapan komuniti, suka/komen
- [ ] Katalog lagu dalam talian (perlukan lesen hak cipta)

## ⚖️ Nota hak cipta

Hanya muzik domain awam dan gubahan asli/terjana disertakan. Lagu komersial
memerlukan fail instrumental yang sah dan lesen pemegang hak cipta.

- Pakej: `app.nyanyiku.karaoke` · versi 0.6.0 (versionCode 6) · minSdk 23, targetSdk 35
