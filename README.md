# 🎤 NyanyiKu — Aplikasi Karaoke (v0.8.0)

> **📱 Muat turun APK siap pasang:** [NyanyiKu-v0.8.0-release.apk](https://github.com/yusarmy/NyanyiKu/releases/download/v0.8.0/NyanyiKu-v0.8.0-release.apk) (Android 6.0+) · [Semua keluaran](https://github.com/yusarmy/NyanyiKu/releases)

Aplikasi karaoke ala **StarMaker** untuk Android, dibina dengan HTML/CSS/JavaScript
dan dibungkus sebagai APK asli menggunakan **Capacitor**. Boleh berfungsi luar talian,
dan menyokong bilik sembang/koir berbilang pengguna apabila pelayan dijalankan.

## ✨ Ciri

### Nyanyian
- Lirik bergerak selari masa (format `.LRC`)
- Main / jeda / gulung semula / bar kemajuan boleh disentuh
- Rakam suara + **8 kesan suara**: 🎙️ Gema, 🚿 Bilik, 🏛️ Konsert, ⛪ Gereja, 🎤 Suara Asli,
  🌤️ Hangat (warm saturation), 💿 Piring Hitam (lo-fi vinyl), 🎉 Parti (slap delay)
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

### 👤 Profil & pemperibadian (baharu v0.7)
- **Profil pengguna** tempatan: nama, gambar profil (muat naik dari galeri, dimampatkan
  dalam peranti), logo/emoji pilihan, bio, status harian dan negeri — boleh diedit bila-bila
- **Bilik Solo** kini boleh **tukar teman**: 5 teman maya (Aisha, Faiz, Maria, Zack, Si
  Comel) yang memberi galakan semasa menyanyi dan mengulas skor mengikut keputusan
- **6 tema bilik** (Malam Ungu, Senja, Lautan, Emas Mewah, Sakura, Neon) pada gelembung
  sembang & pentas koir

### 🪐 Wajah baharu v0.8 — 5 tab ala StarMaker
- **Tab bawah 5 ruang**: 🎉 Bilik, 🪐 Detik, butang 🎤 bulat di tengah (Bilik Solo pantas),
  💬 Mesej (dengan lencana kiraan) dan 😀 Saya
- **Tab Bilik (Parti)**: segmen Parti/Siaran Langsung, bar kalangan cerita hos aktif
  (lencana SEMBANG/KARAOKE), kad kategori Keluarga/Nyanyi/Sembang, sub-tab
  Disyorkan/Karaoke/Sembang/Bilik Saya/Sejarah, dan grid kad bilik 2 lajur dengan
  lencana Siaran Langsung, kunci PIN, kiraan hati & penonton
- **Tab Detik**: suapan video menegak penuh skrin (Ikuti/Disyorkan) dengan rel kanan
  ikut/suka/komen/hadiah/kongsi, helaian komen, butang redam, lagu + butang Nyanyi;
  Detik menggunakan rakaman anda sendiri manakala Detik lain dilabel **CONTOH · SIMULASI**
- **Tab Mesej**: sub-tab Sembang/Notis, senarai kenalan (bilik) dengan lencana belum
  dibaca, cadangan rakan dengan butang Ikuti, kad pintas (Komen Dan @, Pusat Aktiviti,
  Rakan Baru, Jejak Pelawat, Hadiah, Tugasan) dan pemberitahuan tempatan berkumpulan
- **Tab Saya**: muka depan profil penuh (cover, avatar berbingkai, ID, gelaran tahap,
  tag), 4 statistik, pintasan AI MV, kad keluarga, grid ikon (Semua Percuma, Draf, Lagu
  Saya, Tugasan Harian), syiling, daftar masuk, misi, rakaman & papan mata
- **Tetapan berkumpul**: Edit Profil, Privasi Data (dengan senarai nyahsekat),
  pemberitahuan & automain, pelayan, diagnosis rangkaian, saiz cache, kod jemputan,
  Tentang dan set semula data peranti
- **Bilik Saya gaya keluarga**: helaian ID bilik + perisai tahap, bar EXP bilik & EXP
  hari ini (semua percuma — tiada belian emas), Sorakan/Laporan/Senarai Hadiah/Kursus,
  tab peranan Pemilik/Pentadbir/Hos/Penyanyi Utama dan butang "Masuk bilik saya"
- **Helaian kenalan sembang**: bio, Ikuti, Cipta Kumpulan, toggle miut/pinkan,
  kosongkan sejarah, serta **SEKAT** dan **LAPOR** (laporan disimpan setempat sahaja)
- Kekal berprinsip: **tiada VIP, tiada caj semula, tiada kotak nasib/judi, tiada iklan**;
  syiling sekadar galakan tanpa nilai wang dan semua data kekal dalam peranti

### 🚪 Bilik
- **Bilik Solo** 🎤 — pilih teman, kemudian pilih lagu untuk nyanyi & rakam sendirian
- **Bilik Sembang** 💬 — 3 ruang pratetap: Sembang Santai, Cari Kawan Duet, Permintaan Lagu
- **Bilik Koir** 🎶 — pentas 8 kerusi, lihat siapa sedang menyanyi, naik/turun pentas
- **Cipta bilik sendiri** (baharu v0.7): nama, ikon, pilihan tema, jenis sembang/koir;
  bilik tersimpan dalam peranti dan boleh dipadam
- **Kunci/buka bilik dengan PIN 4 digit** (baharu v0.7): pencipta mengunci bilik dan
  berkongsi PIN; butang kunci dalam bilik membuka semula kunci bila-bila
- Audio berbilang pengguna menggunakan **WebRTC** (suara terus antara peranti, P2P)
- **Mod demo luar talian**: tanpa pelayan, bilik diisi penyanyi & mesej simulasi
  supaya aplikasi tetap boleh dicuba dan dirasai
- Nama/profil anda tersimpan; butang kembali Android berfungsi pada setiap skrin

### 🌟 Komuniti & ganjaran (baharu v0.7 — olahan ciri StarMaker, semuanya tempatan)
- **Kad Vokal radar 5 dimensi** selepas setiap rakaman: Ketepatan Pic, Kestabilan,
  Kuasa Suara, Julat Nada, Rentak & Hayatan (dilukis atas kanvas, tiada pelayan)
- **Galeri Rakaman Saya**: rakaman tersimpan automatik ke IndexedDB dengan skor, boleh
  dimain/dipadam terus dalam app (sebelum ini hanya muat turun fail)
- **Suapan NyanyiKu**: setiap rakaman anda muncul sebagai pos cover lengkap dengan
  butang suka & ruang komen (komen/suka anda tersimpan tempatan; pos lain simulasi dan
  dilabel jujur sebagai mod demo)
- **Misi harian, daftar masuk berangkai, syiling 🪙, XP & 7 tahap gelaran**
  (Peminat Baru → Lagenda NyanyiKu) — **percuma sepenuhnya, tiada pembelian dalam app,
  tiada kotak nasib, tiada iklan**
- **Papan mata mingguan** bersaing dengan penyanyi simulasi; markah anda daripada
  rakaman sebenar minggu semasa
- **Lagu kegemaran ♥** ditanda pada mana-mana kad lagu, dikumpul di atas tab Lagu

## 📦 Pasang APK

Muat turun APK siap dari **[halaman GitHub Releases](https://github.com/yusarmy/NyanyiKu/releases)** (fail `NyanyiKu-v0.8.0-release.apk`).
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
- [x] Profil penuh, teman Bilik Solo, tema bilik, kunci PIN (v0.7)
- [x] Kad Vokal radar, galeri rakaman, suapan/misi/syiling/papan mata tempatan (v0.7)
- [ ] Sorotan lirik perkataan demi perkataan
- [ ] Kesan suara tambahan (robot, AutoTune) & campur rakaman ke MP4
- [ ] Rakaman video muka, mod duet terancang dengan garisan panduan
- [ ] Akaun pelayan, kawan, suapan komuniti penyanyi sebenar (versi tempatan sudah ada)
- [ ] Katalog lagu dalam talian (perlukan lesen hak cipta)

## ⚖️ Nota hak cipta

Hanya muzik domain awam dan gubahan asli/terjana disertakan. Lagu komersial
memerlukan fail instrumental yang sah dan lesen pemegang hak cipta.

- Pakej: `app.nyanyiku.karaoke` · versi 0.8.0 (versionCode 9) · minSdk 23, targetSdk 35
