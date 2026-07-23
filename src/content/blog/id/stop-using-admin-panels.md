---
title: "Stop Pakai Admin Panel buat Deploy: Sebuah Rant"
author: Alvin Leonardo
date: 2026-07-23
lang: id
slug: stop-using-admin-panels
thumbnail: /media/projects/taniyuk/taniyuk.png
description: Kenapa gue capek sama workflow aaPanel dan kenapa Git-based deployment dengan Docker adalah satu-satunya cara waras buat ship kode.
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

Gue perlu ngeluarin ini dari dada.

Kalo kamu masih deploy aplikasi dengan cara login ke admin panel, klik-klik menu, manual pull repo, jalankan `npm install` dan `npm run build` dengan tangan, terus restart service — kita perlu ngobrol.

## Masalah aaPanel

Kamu tau workflow-nya. Kamu push kode ke Git, terus:

1. Buka admin panel di browser
2. Navigate ke file manager (atau SSH)
3. `git pull`
4. `npm install` (atau `composer install`, atau apapun)
5. `npm run build`
6. Restart service (pm2 restart, systemctl restart, dll.)
7. Berdoa nggak ada yang rusak

Setiap. Kali. Deploy.

Dan tolong banget kalo kamu lupa step 4 dan push dependency baru. Atau kalo build gagal setengah jalan dan production kamu jadi setengah rusak. Atau kalo kamu nggak sengaja pull branch yang salah.

Ini bukan deployment. Ini ritual. Kamu ngelakuin ritual setiap kali mau ship kode.

## "Tapi Kan Buat Gue Work"

Oke. Dan nyetir tanpa sabuk pengaman juga work — sampe nggak work.

Manual deployment itu:

- **Rawan error** — Satu step kelewat dan kamu debug production jam 2 pagi
- **Nggak reproducible** — Kolomu deploy beda cara sama kamu
- **Nggak ada audit trail** — Siapa deploy apa? Kapan? Pake perubahan apa? ¯\\\_(ツ)\_/¯
- **Lama** — Prosesnya makan 5-10 menit perhatian aktif
- **Ngeri** — Kamu ragu mau deploy karena ribet

Saat kamu punya lebih dari satu orang yang deploy, atau lebih dari satu server, cara ini langsung hancur.

## Cara Git + Docker

Ini seharusnya deployment kamu:

```bash
git push origin main
```

Itu aja. Itu deployment-nya.

Sisanya — install dependency, build, restart service — terjadi otomatis di CI/CD pipeline. Kamu push, dan beberapa menit kemudian perubahan kamu udah live.

### Cara Kerjanya

1. **Kamu push ke Git** (GitHub, GitLab, apapun)
2. **CI pipeline jalan** (GitHub Actions, GitLab CI, dll.)
3. **Dia build Docker image** dengan kode, dependency, dan build artifacts udah di-bake in
4. **Dia deploy image** ke server (via SSH, Docker registry, atau deployment service)
5. **Container lama diganti** sama yang baru

Nggak ada step manual. Nggak ada "aduh lupa run build". Nggak ada SSH ke production buat benerin barang.

### Kenapa Docker?

Karena dia solve masalah "di gue work" permanen.

Dockerfile kamu adalah resep deployment. Dia versioned. Dia reproducible. Dia sama di laptop kamu, di CI, dan di production.

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

File ini kasih tau semua yang perlu kamu tau soal gimana app di-build dan di-jalanin. Nggak ada tribal knowledge. Nggak ada "oh kamu juga perlu install dependency sistem ini."

## Pipeline Deployment yang Gue Pakai

Ini setup gue sebenernya buat project:

1. **Push ke main** di GitHub
2. **GitHub Actions** build Docker image
3. **Image di-push** ke container registry (Docker Hub, GHCR, dll.)
4. **Server pull image baru** dan restart container

Semuanya makan 2-3 menit. Gue nggak nyentuh server. Gue nggak buka panel apapun. Gue nggak jalankan command apapun di production.

Kalo ada yang rusak, gue bisa revert ke image sebelumnya dalam hitungan detik. Nggak panik. Nggak "cepat, SSH dan benerin."

## Kesimpulan

Stop deploy kayak tahun 2015. Stop pakai admin panel sebagai tool deployment. Stop zip project kamu dan bilang itu backup.

Belajar Git. Belajar Docker. Setup CI/CD pipeline. Masa depan kamu akan berterima kasih.

---

*Rant ini dibawakan oleh terlalu banyak deployment "pull dan build manual aja".*
