---
title: "Stop Pakai Admin Panel buat Deploy: Sebuah Rant"
author: Alvin Leonardo
date: 2026-07-23
lang: id
slug: stop-using-admin-panels
thumbnail: /media/projects/taniyuk/taniyuk.png
description: Gue capek sama workflow aaPanel. Git-based deployment dengan Docker adalah satu-satunya cara waras buat ship kode.
categories:
  - devops
  - rant
tags:
  - docker
  - devops
  - git
  - deployment
  - rant
---

Oke gue ngomong sekarang.

Admin panel kayak aaPanel emang bikin hidup keliatan "mudah." Ada GUI, file manager, satu klik ini itu. Tapi kalo kamu masih deploy aplikasi web modern lewat panel kayak masih tahun 2014, kita perlu ngobrol.

## Ritualnya

Setiap kali gue push kode, "deployment" nya kurang lebih gini:

Buka panel. Cari terminal atau file manager. `git pull`. Oh tunggu, dependency baru. `pnpm install`. Oh tunggu, Corepack lagi aneh lagi. Corepack katanya udah diinstall, katanya udah enabled, tapi pnpm nggak mau load. Jadi sekarang gue harus `sudo npx pnpm install` yang kedengeran kayak command yang harusnya nggak ada tapi somehow work. Terus `pnpm run build`. Terus restart pm2 atau apalah. Terus cek beneran work atau nggak. Terus berdoa.

Setiap. Kali. Deploy.

Dan kalo gue lupa install deps? Production rusak. Kalo build gagal setengah jalan? Production setengah rusak. Kalo pull branch yang salah? Kamu tau lah.

Ini bukan deployment. Ini ritual. Gue literally ngelakuin 7 step yang sama setiap kali kayak lagi ngadain upacara kuno buat nenangin dewa server.

## Corepack deserves its own section

Gue nggak bisa cukup ngejelasin betapa annoying-nya ini. Kamu udah punya Corepack. Udah punya Node. Udah punya pnpm. Harusnya semuanya bisa kerja bareng. Tapi kadang Corepack cuma mutusin "nah, nggak hari ini." Kamu jalankan `pnpm` dan dia acting kayak pnpm nggak ada.

Nggak ada error. Nggak ada penjelasan. Cuma... nggak ada.

Kamu Google. Stack Overflow bilang `corepack enable`. Kamu jalankan. Katanya udah enabled. Oke. Terus kenapa pnpm nggak work? Nggak ada yang tau.

"Solusi" yang beneran work? `sudo npx pnpm install`. Command yang kalo dibaca kayak ditulis orang lagi stroke. Tapi work. Dan di titik itu kamu berhenti nanya dan lanjut hidup.

Ini yang dilakukan manual deployment ke kamu. Dia bikin kamu jadi orang yang jalanin command terkutuk jam 2 pagi dan cuma bisa nerima aja.

## "Tapi kan buat gue work"

Oke. Mobil gue juga jalan fine tanpa asuransi — sampe nggak fine.

Masalahnya manual deployment itu fine kalo cuma kamu, satu deploy, satu server. Begitu angka mana pun naik di atas 1, semuanya hancur.

Gue udah liat sendiri. Orang beda deploy beda cara. Lupa step. Salah command. `git pull` di branch yang salah dan sekarang production jalanin fitur eksperimen seseorang. Dan nggak ada yang tau siapa deploy apa karena nggak ada log, nggak ada history, nggak ada audit trail. Cuma vibes.

## Yang gue lakuin sekarang

Gue push ke main. Itu aja. Itu deploy-nya.

GitHub Actions pick up, build Docker image, push ke registry, dan server gue pull image baru dan restart container. Makan 2-3 menit. Gue nggak nyentuh server. Gue nggak buka panel. Gue nggak SSH kayak sysadmin tahun 2008.

Dan kalo ada yang rusak? Gue revert ke image sebelumnya. Detik aja. Nggak panik. Nggak "cepat, login dan benerin."

```bash
git push origin main
```

Itu command deploy gue. Satu baris. Sisanya otomatis.

## Docker

Gue tau Docker ada learning curve-nya. Tapi dengerin.

Dockerfile kamu basically resep yang bilang "ini cara build dan jalanin app ini." Dia versioned. Dia sama dimana-mana — laptop, CI, production. Nggak ada lagi "di gue work." Nggak ada lagi "oh kamu juga perlu install dependency sistem ini yang gue lupa sebut."

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Itu aja. Itu resep deployment-nya. Siapa aja bisa baca. Siapa aja bisa jalanin. Nggak tergantung apa yang diinstall di server, versi Node berapa, atau apakah Corepack lagi mau kerja sama hari ini.

## Orang-orang yang backup pake zip

Gue perlu bahas ini karena gue udah liat dengan mata kepala sendiri.

"Gue backup project dengan nge-zip folder-nya."

Brother in Christ, itu bukan backup. Itu minta tolong.

Kamu tau desktop kamu kayak gimana. `project.zip`. `project-v2.zip`. `project-final.zip`. `project-final-2.zip`. `project-final-REAL.zip`. `project-final-REAL-YANG-INI.zip`. Yang mana yang terbaru? Nggak ada yang tau. Termasuk kamu.

Dan pas kamu perlu cari kapan sesuatu berubah? Kapan bug masuk? Siapa ubah satu baris itu? Kamu buka zip satu-satu kayak arkeolog lagi ekskavasi reruntuhan kuno.

Git lakuin semua ini. Otomatis. Gratis. Dengan history, diff, branch, dan collaboration built in. Kamu commit, kamu push, selesai. Seluruh history project kamu ada di situ.

Zip cuma commit git yang lebih jelek yang harus kamu buat manual, kasih nama manual, dan simpan manual. Ini tahun 2026. Tolong.

## "Git terlalu ribet"

Kamu butuh tiga command:

```bash
git add .
git commit -m "ngubah sesuatu"
git push
```

Itu 90% penggunaan Git harian. Kalo kamu bisa navigate admin panel, kamu bisa belajar tiga command.

## Intinya

Stop deploy lewat admin panel. Stop nge-zip project. Stop jalanin `sudo npx pnpm install` jam 2 pagi.

Belajar Git. Belajar Docker. Setup CI/CD. Masa depan kamu bakal berterima kasih.

Dan kalo ada orang di kantor yang masih ngeyel nge-zip folder project itu backup yang valid... kirim dia post ini. Dia nggak bakal baca, tapi setelahnya kamu udah coba.

---

*Rant ini dibawakan oleh terlalu banyak deployment "pull dan build manual aja".*
