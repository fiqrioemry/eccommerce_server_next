"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const products = [
      // Category 1: Electronics
      {
        storeId: 1,
        categoryId: 1,
        name: "Mesin Cuci Sharp Electric",
        description:
          "Mesin cuci dengan teknologi terbaru dari Sharp yang memberikan kualitas cuci terbaik dengan hemat energi.",
        price: 1800000,
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 1,
        categoryId: 1,
        name: "TV Panasonic 14Inch",
        description:
          "Televisi Panasonic dengan layar 14 inci, kualitas gambar jernih dan hemat energi.",
        price: 1200000,
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 1,
        categoryId: 1,
        name: "Kulkas Samsung 200L",
        description:
          "Kulkas Samsung dengan kapasitas 200 liter, hemat energi dan desain elegan.",
        price: 3500000,
        stock: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 1,
        categoryId: 1,
        name: "Headset Sony Wireless",
        description:
          "Headset Sony dengan kualitas suara jernih dan koneksi wireless yang stabil.",
        price: 1200000,
        stock: 60,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 1,
        categoryId: 1,
        name: "Speaker JBL Flip 5",
        description:
          "Speaker portable JBL dengan suara bass yang mantap dan tahan air.",
        price: 1500000,
        stock: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Category 2: Men's Fashion
      {
        storeId: 2,
        categoryId: 2,
        name: "Kaos Polo Ralph Lauren",
        description:
          "Kaos polo dengan desain simpel dari Ralph Lauren, cocok untuk acara casual.",
        price: 700000,
        stock: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 2,
        categoryId: 2,
        name: "Jeans Levi's 501",
        description:
          "Jeans Levi's 501 dengan potongan klasik, nyaman dipakai sehari-hari.",
        price: 900000,
        stock: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 2,
        categoryId: 2,
        name: "Jaket Nike Sports",
        description:
          "Jaket Nike Sports dengan bahan yang nyaman dan desain modern untuk aktivitas olahraga.",
        price: 1500000,
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 2,
        categoryId: 2,
        name: "Sepatu Adidas Running",
        description:
          "Sepatu running Adidas, ringan dan nyaman untuk berlari sepanjang hari.",
        price: 1200000,
        stock: 60,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 2,
        categoryId: 2,
        name: "Kacamata Ray-Ban Aviator",
        description:
          "Kacamata Ray-Ban Aviator yang stylish dan nyaman dipakai, cocok untuk berbagai suasana.",
        price: 2000000,
        stock: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Category 3: Women's Fashion
      {
        storeId: 3,
        categoryId: 3,
        name: "Dress Maxi Zara",
        description:
          "Dress maxi dari Zara dengan desain elegan dan bahan nyaman untuk berbagai acara.",
        price: 1000000,
        stock: 70,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 3,
        categoryId: 3,
        name: "Blouse H&M",
        description:
          "Blouse wanita dari H&M dengan desain simpel namun tetap stylish untuk bekerja.",
        price: 400000,
        stock: 90,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 3,
        categoryId: 3,
        name: "Skirt Forever 21",
        description:
          "Skirt Forever 21 dengan bahan yang ringan dan cocok dipadukan dengan berbagai outfit.",
        price: 350000,
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 3,
        categoryId: 3,
        name: "Sweater Uniqlo",
        description:
          "Sweater Uniqlo yang nyaman dipakai sepanjang tahun, cocok untuk cuaca dingin.",
        price: 500000,
        stock: 60,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 3,
        categoryId: 3,
        name: "High Heels Charles & Keith",
        description:
          "High heels Charles & Keith dengan desain elegan dan cocok untuk berbagai acara formal.",
        price: 1400000,
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Category 4: Health

      {
        storeId: 4,
        categoryId: 4,
        name: "Vitamin C Blackmores",
        description:
          "Vitamin C dari Blackmores untuk meningkatkan daya tahan tubuh dan kesehatan kulit.",
        price: 250000,
        stock: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 4,
        categoryId: 4,
        name: "Suplemen Protein Herbalife",
        description:
          "Suplemen protein Herbalife yang cocok untuk mendukung kebugaran tubuh dan pembentukan otot.",
        price: 500000,
        stock: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 4,
        categoryId: 4,
        name: "Minyak Zaitun Habbatussauda",
        description:
          "Minyak Zaitun dengan campuran Habbatussauda untuk kesehatan tubuh.",
        price: 150000,
        stock: 120,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 4,
        categoryId: 4,
        name: "Alpukat Organik",
        description:
          "Alpukat organik dengan rasa yang creamy dan manfaat yang luar biasa untuk kesehatan.",
        price: 30000,
        stock: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 4,
        categoryId: 4,
        name: "Kapsul Ekstrak Kunyit",
        description:
          "Kapsul ekstrak kunyit yang memiliki manfaat anti inflamasi dan membantu meningkatkan sistem pencernaan.",
        price: 100000,
        stock: 150,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Category 5: Beauty
      {
        storeId: 5,
        categoryId: 5,
        name: "Serum Skincare L'oreal",
        description:
          "Serum skincare L'oreal dengan bahan aktif yang membantu mencerahkan kulit dan mengurangi kerutan.",
        price: 450000,
        stock: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 5,
        categoryId: 5,
        name: "Lipstik Maybelline",
        description:
          "Lipstik dari Maybelline dengan berbagai pilihan warna yang tahan lama dan nyaman di bibir.",
        price: 120000,
        stock: 150,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 5,
        categoryId: 5,
        name: "Shampo Pantene",
        description:
          "Shampo Pantene dengan formula yang membantu menjaga kesehatan rambut dan kulit kepala.",
        price: 100000,
        stock: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 5,
        categoryId: 5,
        name: "Masker Wajah The Body Shop",
        description:
          "Masker wajah dari The Body Shop dengan bahan alami untuk memberikan kelembapan pada kulit.",
        price: 250000,
        stock: 90,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 5,
        categoryId: 5,
        name: "Parfum Calvin Klein",
        description:
          "Parfum Calvin Klein dengan aroma segar dan tahan lama, cocok untuk aktivitas sehari-hari.",
        price: 850000,
        stock: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Category 6: Handphones and Tablets
      {
        storeId: 6,
        categoryId: 6,
        name: "Smartphone Samsung Galaxy S23",
        description:
          "Smartphone Samsung Galaxy S23 dengan layar besar, performa tinggi dan kamera canggih untuk pengalaman terbaik.",
        price: 10000000,
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 6,
        categoryId: 6,
        name: "iPad Pro 12.9 inch",
        description:
          "iPad Pro 12.9 inci dengan layar Liquid Retina, ideal untuk bekerja, berkreasi, dan hiburan.",
        price: 16000000,
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 6,
        categoryId: 6,
        name: "Samsung Galaxy Tab A8",
        description:
          "Tablet Samsung Galaxy Tab A8 dengan layar besar dan baterai tahan lama untuk hiburan seharian.",
        price: 3500000,
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 6,
        categoryId: 6,
        name: "Smartphone Xiaomi Redmi Note 12",
        description:
          "Smartphone Xiaomi Redmi Note 12 dengan harga terjangkau dan performa mumpuni untuk segala aktivitas.",
        price: 3000000,
        stock: 70,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 6,
        categoryId: 6,
        name: "Samsung Galaxy Z Fold 5",
        description:
          "Smartphone lipat Samsung Galaxy Z Fold 5 dengan layar besar dan desain futuristik, nyaman untuk multitasking.",
        price: 30000000,
        stock: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Category 7: Computer and Laptop
      {
        storeId: 7,
        categoryId: 7,
        name: "Laptop ASUS VivoBook 15",
        description:
          "Laptop ASUS VivoBook 15 dengan performa tinggi untuk bekerja dan hiburan seharian.",
        price: 7000000,
        stock: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 7,
        categoryId: 7,
        name: "MacBook Air M2",
        description:
          "MacBook Air M2 dengan desain tipis dan performa canggih, cocok untuk kebutuhan profesional dan hiburan.",
        price: 18000000,
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 7,
        categoryId: 7,
        name: "Laptop Lenovo ThinkPad X1 Carbon",
        description:
          "Laptop Lenovo ThinkPad X1 Carbon dengan desain premium dan performa hebat, cocok untuk bekerja dengan serius.",
        price: 22000000,
        stock: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 7,
        categoryId: 7,
        name: "HP Pavilion x360",
        description:
          "HP Pavilion x360 dengan layar sentuh dan desain convertible, cocok untuk bekerja dan belajar.",
        price: 8000000,
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 7,
        categoryId: 7,
        name: "Laptop Dell Inspiron 15",
        description:
          "Laptop Dell Inspiron 15 dengan harga terjangkau dan fitur lengkap untuk belajar dan bekerja.",
        price: 6500000,
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Category 8: Books
      {
        storeId: 8,
        categoryId: 8,
        name: "Buku Novel Harry Potter",
        description:
          "Novel Harry Potter seri pertama dengan cerita magis yang menarik bagi semua kalangan.",
        price: 150000,
        stock: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 8,
        categoryId: 8,
        name: "Buku Motivasi The Power of Habit",
        description:
          "Buku tentang kebiasaan dan kekuatan pikiran untuk mengubah hidup Anda.",
        price: 120000,
        stock: 150,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 8,
        categoryId: 8,
        name: "Buku Bisnis Sukses Milenial",
        description:
          "Buku yang menginspirasi generasi milenial untuk meraih kesuksesan melalui bisnis dan usaha.",
        price: 180000,
        stock: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 8,
        categoryId: 8,
        name: "Buku Kesehatan Mindfulness",
        description:
          "Buku Mindfulness untuk membantu menenangkan pikiran dan meningkatkan kualitas hidup.",
        price: 100000,
        stock: 180,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 8,
        categoryId: 8,
        name: "Buku Teknik Pemrograman Python",
        description:
          "Buku panduan lengkap untuk belajar pemrograman menggunakan bahasa Python.",
        price: 250000,
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Category 9: Food and Drink
      {
        storeId: 9,
        categoryId: 9,
        name: "Susu UHT Full Cream",
        description:
          "Susu UHT full cream yang lezat, cocok untuk segala usia dan kaya akan nutrisi.",
        price: 25000,
        stock: 500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 9,
        categoryId: 9,
        name: "Kopi Arabika Sumatera",
        description:
          "Kopi Arabika Sumatera dengan rasa yang khas dan keasaman yang rendah, sempurna untuk penyuka kopi sejati.",
        price: 75000,
        stock: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 9,
        categoryId: 9,
        name: "Mie Instan Goreng",
        description:
          "Mie instan goreng dengan rasa pedas yang menggugah selera dan cocok untuk makan cepat.",
        price: 5000,
        stock: 800,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 9,
        categoryId: 9,
        name: "Teh Botol Sosro",
        description:
          "Teh Botol Sosro dengan rasa manis dan teh yang segar, nikmat untuk menemani waktu santai.",
        price: 10000,
        stock: 600,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 9,
        categoryId: 9,
        name: "Coklat Coklat",
        description:
          "Coklat Coklat dengan rasa manis yang kaya dan tekstur lembut, cocok untuk pencinta coklat.",
        price: 30000,
        stock: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Category 10: Office and Stationary
      {
        storeId: 10,
        categoryId: 10,
        name: "Pensil Faber-Castell",
        description:
          "Pensil Faber-Castell dengan kualitas terbaik, cocok untuk menulis dan menggambar.",
        price: 5000,
        stock: 500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 10,
        categoryId: 10,
        name: "Buku Catatan Moleskine",
        description:
          "Buku catatan Moleskine dengan desain elegan, cocok untuk menulis ide dan catatan penting.",
        price: 250000,
        stock: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 10,
        categoryId: 10,
        name: "Stapler 3M",
        description:
          "Stapler 3M dengan desain ergonomis dan daya tahan tinggi untuk keperluan kantor.",
        price: 100000,
        stock: 150,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 10,
        categoryId: 10,
        name: "Pulpen Pilot G-2",
        description:
          "Pulpen Pilot G-2 dengan tinta yang halus dan nyaman digunakan untuk menulis panjang.",
        price: 30000,
        stock: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storeId: 10,
        categoryId: 10,
        name: "Kertas HVS A4",
        description:
          "Kertas HVS A4 dengan kualitas tinggi untuk kebutuhan printing dan dokumen kantor.",
        price: 50000,
        stock: 600,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Insert products into the database
    await queryInterface.bulkInsert("Products", products, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
