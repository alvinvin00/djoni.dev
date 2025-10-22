export default [
  {
    author: 'Alvin Leonardo',
    categories: ['web', 'blog', 'typescript', 'gatsby'],
    date: '2023-12-1',
    description: 'A backstory during the time I refactored Taniyuk.',
    slug: 'taniyuk-refactor',
    tags: ['web', 'blog', 'typescript', 'gatsby'],
    thumbnail: '/images/taniyuk-refactor.png',
    title: 'Refactoring Taniyuk, Motivation and Obstacles',
    lang: 'en',
    content:
      "In this blog post, I'll be delving on the motivation of refactoring Taniyuk, the obstacles I faced, and the solutions I\r\ncame up with.\r\n\r\n## Motivation\r\n\r\nSometime in 2023, I looked at Taniyuk codebase and looking at the legacy code that I inherited from previous maintainer\r\nand wondering if I can refactor it. The project structure was a mess and there's no guidance as to where to put things.\r\nAlso code was in Javascript, which is notorious for being 'unsafe' and type mistakes can and will happen overtime. Maybe\r\nsomeday, I'll no longer be there to maintain and the new one will be freaking confused maintaining it. That's why I\r\ndecided to fix all the mess it came with so the present, future me, and future maintainer will thank you.\r\n\r\n## Obstacles\r\n\r\nThe problem that I faced here was, there's **NO** automated test, no unit test, no integration, no end-to-end, nothing.\r\nSo I have to be very careful to not break critical feature that will impact the user, after all the user won't care what\r\ndid you do with the codebase, they only see if the app works properly or not.\r\n\r\n### But if there's no automated test, why you don't create the automated test first?\r\n\r\nYou are not wrong, but the problem is, If I were to write it with Javascript first, then migrate the codebase to\r\nTypescript, I may ended up writing the test **TWICE**. Since there's a new feature that will be shipped, so I refactor\r\nit along with that new feature, because it will be tested anyway, two birds with one stone.\r\n\r\n**DISCLAIMER:** This is not an advice and may sound like survivor bias, write automated test first if you can.\r\n\r\n## Solutions\r\n\r\nHere's the solutions that I came up with:\r\n\r\n### Project Structure\r\n\r\nI searched all and found [Bulletproof React](https://github.com/alan2207/bulletproof-react) as it was simple to follow\r\nin my opinion. I decided to loosely adapt this to our project.\r\n\r\n### Typescript\r\n\r\nTo easen up my pain, I searched the package that can help me with the refactoring process, and I\r\nfound [ts-migrate from AirBnB (yes, that AirBnB)](https://github.com/airbnb/ts-migrate) to automate the process, at\r\nleast it can cover around 70% of manual work. It does 4 steps to achieve this:\r\n\r\n* Create `tsconfig.json` file\r\n* Convert all the Javascript files to Typescript\r\n* Runs a codemod to fix the errors\r\n* Runs `ts-ignore` so it can be compiled while I fix the errors\r\n\r\n## Conclusion\r\n\r\nI'm not saying that this is the best way to refactor your codebase, but this is the way that I did to refactor Taniyuk\r\nand made future development easier and more error-resistant. I should write the automated test either before or after\r\ndoing refactor. I hope you find this useful.",
    _meta: {
      filePath: 'en\\taniyuk-refactor.md',
      fileName: 'taniyuk-refactor.md',
      directory: 'en',
      extension: 'md',
      path: 'en\\taniyuk-refactor',
    },
  },
  {
    author: 'Alvin Leonardo',
    categories: ['web', 'blog', 'nextjs', 'gatsby'],
    date: '2023-12-1',
    description:
      'Cerita yang saya hadapi ketika melakukan refaktorisasi Taniyuk.',
    slug: 'refaktorisasi-taniyuk',
    tags: ['web', 'blog', 'nextjs', 'gatsby'],
    thumbnail: '/images/taniyuk-refactor.png',
    title: 'Refaktorisasi Taniyuk, Motivasi dan Halangan',
    lang: 'id',
    content:
      "\"Dalam postingan blog ini, saya akan membahas motivasi refactoring Taniyuk, rintangan yang saya hadapi, dan solusi yang\r\nsaya temukan.\r\n\r\n## Motivasi\r\n\r\nPada suatu waktu di tahun 2023, saya melihat basis kode Taniyuk dan melihat _codebase_ yang saya warisi dari\r\n_maintainer_ sebelumnya dan bertanya-tanya apakah saya bisa melakukan refactoring. Struktur proyek idak ada petunjuk\r\ntentang di mana harus meletakkan hal-hal. Juga kode dalam Javascript, yang terkenal karena 'tidak aman' dan kesalahan\r\ntipe bisa dan akan terjadi seiring waktu. Mungkin suatu hari, saya sudah tidak ada lagi disana untuk memelihara dan\r\norang selanjutnya akan kebingungan dalam melanjutkannya. Itulah sebabnya saya memutuskan untuk memperbaiki semua\r\nkekacauan yang datang dengan itu sehingga saya sekarang, saya di masa depan, dan _maintainer_ di masa depan akan\r\nberterima kasih.\r\n\r\n## Rintangan\r\n\r\nMasalah yang saya hadapi di sini adalah, **TIDAK ADA** tes otomatis, tidak ada unit test, tidak ada _integration test_,\r\ntidak ada end-to-end, tidak ada. Jadi saya harus sangat hati-hati untuk tidak merusak fitur kritis yang akan berdampak\r\npada pengguna, setelah semua pengguna tidak peduli apa yang Anda lakukan dengan basis kode, mereka hanya melihat apakah\r\naplikasi berfungsi dengan baik atau tidak.\r\n\r\n### Tetapi jika tidak ada tes otomatis, mengapa Anda tidak membuat tes otomatis terlebih dahulu?\r\n\r\nAnda tidak salah, tetapi masalahnya adalah, jika saya harus menulisnya dengan Javascript terlebih dahulu, kemudian\r\nmemigrasikan basis kode ke Typescript, saya mungkin berakhir menulis tes **DUA KALI**. Karena ada fitur baru yang akan\r\ndikirim, jadi saya melakukan refactoring bersama dengan fitur baru itu, karena akan diuji juga, dua burung dengan satu\r\nbatu.\r\n\r\n**DISCLAIMER:** Ini bukan saran dan mungkin terdengar seperti _survivor bias_, tulis tes otomatis terlebih dahulu jika\r\nAnda bisa.\r\n\r\n## Solusi\r\n\r\nBerikut adalah solusi yang saya temukan:\r\n\r\n### Struktur Proyek\r\n\r\nSaya mencari semua dan menemukan [Bulletproof React](https://github.com/alan2207/bulletproof-react) karena menurut saya\r\nmudah diikuti. Saya memutuskan untuk mengadaptasi ini ke proyek kami.\r\n\r\n### Typescript\r\n\r\nUntuk meringankan pekerjaan saya, saya mencari paket yang bisa membantu saya dengan proses _refactoring_, dan saya\r\nmenemukan [ts-migrate dari AirBnB (ya, AirBnB itu)](https://github.com/airbnb/ts-migrate) untuk mengotomatisasi\r\nprosesnya, setidaknya bisa mengerjakan setidaknya sekitar 70% dari pekerjaan. Ini melakukan 4 langkah untuk mencapai\r\nini:\r\n\r\n* Membuat file `tsconfig.json`\r\n* Mengubah semua file Javascript menjadi Typescript\r\n* Menjalankan _codemod_ untuk memperbaiki kesalahan\r\n* Menjalankan `ts-ignore` sehingga bisa dikompilasi sementara saya memperbaiki kesalahan\r\n\r\n## Kesimpulan\r\n\r\nSaya tidak mengatakan bahwa ini adalah cara terbaik untuk melakukan refactoring basis kode Anda, tetapi ini adalah cara\r\nyang saya lakukan untuk melakukan refactoring Taniyuk dan membuat pengembangan masa depan lebih mudah dan lebih tahan\r\nterhadap kesalahan. Saya harus menulis tes otomatis baik sebelum atau setelah melakukan refactor. Saya harap Anda\r\nmenemukan ini berguna.",
    _meta: {
      filePath: 'id\\refaktorisasi-taniyuk.md',
      fileName: 'refaktorisasi-taniyuk.md',
      directory: 'id',
      extension: 'md',
      path: 'id\\refaktorisasi-taniyuk',
    },
  },
];
