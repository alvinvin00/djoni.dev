---
title: Refaktorisasi Taniyuk, Motivasi dan Halangan
author: Alvin Leonardo
date: 2023-12-1
slug: refaktorisasi-taniyuk
thumbnail: /images/taniyuk-refactor.png
description: Cerita yang saya hadapi ketika melakukan refaktorisasi Taniyuk.
categories:
  - web
  - blog
  - nextjs
  - gatsby
tags:
  - web
  - blog
  - nextjs
  - gatsby
---

"Dalam postingan blog ini, saya akan membahas motivasi refactoring Taniyuk, rintangan yang saya hadapi, dan solusi yang
saya temukan.

## Motivasi

Pada suatu waktu di tahun 2023, saya melihat basis kode Taniyuk dan melihat _codebase_ yang saya warisi dari
_maintainer_ sebelumnya dan bertanya-tanya apakah saya bisa melakukan refactoring. Struktur proyek idak ada petunjuk
tentang di mana harus meletakkan hal-hal. Juga kode dalam Javascript, yang terkenal karena 'tidak aman' dan kesalahan
tipe bisa dan akan terjadi seiring waktu. Mungkin suatu hari, saya sudah tidak ada lagi disana untuk memelihara dan
orang selanjutnya akan kebingungan dalam melanjutkannya. Itulah sebabnya saya memutuskan untuk memperbaiki semua
kekacauan yang datang dengan itu sehingga saya sekarang, saya di masa depan, dan _maintainer_ di masa depan akan
berterima kasih.

## Rintangan

Masalah yang saya hadapi di sini adalah, **TIDAK ADA** tes otomatis, tidak ada unit test, tidak ada _integration test_,
tidak ada end-to-end, tidak ada. Jadi saya harus sangat hati-hati untuk tidak merusak fitur kritis yang akan berdampak
pada pengguna, setelah semua pengguna tidak peduli apa yang Anda lakukan dengan basis kode, mereka hanya melihat apakah
aplikasi berfungsi dengan baik atau tidak.

### Tetapi jika tidak ada tes otomatis, mengapa Anda tidak membuat tes otomatis terlebih dahulu?

Anda tidak salah, tetapi masalahnya adalah, jika saya harus menulisnya dengan Javascript terlebih dahulu, kemudian
memigrasikan basis kode ke Typescript, saya mungkin berakhir menulis tes **DUA KALI**. Karena ada fitur baru yang akan
dikirim, jadi saya melakukan refactoring bersama dengan fitur baru itu, karena akan diuji juga, dua burung dengan satu
batu.

**DISCLAIMER:** Ini bukan saran dan mungkin terdengar seperti _survivor bias_, tulis tes otomatis terlebih dahulu jika
Anda bisa.

## Solusi

Berikut adalah solusi yang saya temukan:

### Struktur Proyek

Saya mencari semua dan menemukan [Bulletproof React](https://github.com/alan2207/bulletproof-react) karena menurut saya
mudah diikuti. Saya memutuskan untuk mengadaptasi ini ke proyek kami.

### Typescript

Untuk meringankan pekerjaan saya, saya mencari paket yang bisa membantu saya dengan proses _refactoring_, dan saya
menemukan [ts-migrate dari AirBnB (ya, AirBnB itu)](https://github.com/airbnb/ts-migrate) untuk mengotomatisasi
prosesnya, setidaknya bisa mengerjakan setidaknya sekitar 70% dari pekerjaan. Ini melakukan 4 langkah untuk mencapai
ini:

* Membuat file `tsconfig.json`
* Mengubah semua file Javascript menjadi Typescript
* Menjalankan _codemod_ untuk memperbaiki kesalahan
* Menjalankan `ts-ignore` sehingga bisa dikompilasi sementara saya memperbaiki kesalahan

## Kesimpulan

Saya tidak mengatakan bahwa ini adalah cara terbaik untuk melakukan refactoring basis kode Anda, tetapi ini adalah cara
yang saya lakukan untuk melakukan refactoring Taniyuk dan membuat pengembangan masa depan lebih mudah dan lebih tahan
terhadap kesalahan. Saya harus menulis tes otomatis baik sebelum atau setelah melakukan refactor. Saya harap Anda
menemukan ini berguna.
