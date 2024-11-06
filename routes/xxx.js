"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const reviews = [];
    const productIds = Array.from({ length: 50 }, (_, i) => i + 1); // Product IDs from 1 to 50

    const comments = {
      1: "Mesin cuci yang sangat membantu, kualitas cuci terbaik!",
      2: "TV Panasonic ini luar biasa, gambar jernih dan warna yang tajam.",
      3: "Kulkas Samsung ini sangat elegan dan hemat energi.",
      4: "Headset Sony ini memberikan suara yang sangat jernih.",
      5: "Speaker JBL Flip 5 ini bassnya sangat mantap dan tahan air.",
      6: "Kaos Polo Ralph Lauren sangat nyaman dan tampak stylish.",
      7: "Jeans Levi's 501 ini sangat pas dan nyaman dipakai.",
      8: "Jaket Nike Sports ini ringan dan sangat cocok untuk olahraga.",
      9: "Sepatu Adidas Running sangat nyaman untuk digunakan seharian.",
      10: "Kacamata Ray-Ban Aviator sangat stylish dan nyaman dipakai.",
      11: "Dress Maxi Zara ini elegan dan sangat nyaman dipakai.",
      12: "Blouse H&M ini simpel namun tetap stylish dan nyaman.",
      13: "Skirt Forever 21 ini ringan dan cocok dipadukan dengan banyak outfit.",
      14: "Sweater Uniqlo ini cocok untuk cuaca dingin dan nyaman.",
      15: "High Heels Charles & Keith ini sangat elegan untuk acara formal.",
      16: "Vitamin C Blackmores membantu menjaga daya tahan tubuh.",
      17: "Suplemen Protein Herbalife sangat membantu dalam kebugaran tubuh.",
      18: "Minyak Zaitun Habbatussauda sangat baik untuk kesehatan tubuh.",
      19: "Alpukat Organik ini enak dan kaya akan manfaat.",
      20: "Kapsul Ekstrak Kunyit sangat bagus untuk sistem pencernaan.",
      21: "Serum Skincare L'oreal sangat membantu mencerahkan kulit.",
      22: "Lipstik Maybelline tahan lama dan warnanya sangat cantik.",
      23: "Shampo Pantene membuat rambut lebih sehat dan berkilau.",
      24: "Masker Wajah The Body Shop membuat kulit terasa lembap.",
      25: "Parfum Calvin Klein memiliki aroma segar dan tahan lama.",
      26: "Smartphone Samsung Galaxy S23 sangat cepat dan fitur kameranya canggih.",
      27: "iPad Pro 12.9 inch sangat cocok untuk bekerja dan hiburan.",
      28: "Samsung Galaxy Tab A8 sangat nyaman untuk hiburan sepanjang hari.",
      29: "Smartphone Xiaomi Redmi Note 12 sangat terjangkau dan performanya mumpuni.",
      30: "Samsung Galaxy Z Fold 5 sangat futuristik dan nyaman untuk multitasking.",
      31: "Laptop ASUS VivoBook 15 sangat nyaman untuk bekerja seharian.",
      32: "MacBook Air M2 sangat tipis dan performanya luar biasa.",
      33: "Laptop Lenovo ThinkPad X1 Carbon sangat premium dan hebat performanya.",
      34: "HP Pavilion x360 sangat cocok untuk bekerja dan belajar.",
      35: "Laptop Dell Inspiron 15 sangat terjangkau dan cukup handal.",
      36: "Buku Novel Harry Potter sangat menarik dan penuh petualangan.",
      37: "Buku Motivasi The Power of Habit sangat menginspirasi.",
      38: "Buku Bisnis Sukses Milenial sangat bermanfaat bagi generasi muda.",
      39: "Buku Kesehatan Mindfulness membantu menenangkan pikiran.",
      40: "Buku Teknik Pemrograman Python sangat cocok untuk belajar coding.",
      41: "Mie Instan ABC ini rasanya lezat dan kemasannya praktis, sangat cocok untuk makan cepat dan praktis.",
      42: "Kopi Toraja ini memiliki cita rasa khas, memberikan sensasi kopi terbaik yang berasal dari Indonesia.",
      43: "Cokelat Silverqueen ini manis dan nikmat, dengan rasa yang memanjakan lidah di setiap gigitan.",
      44: "Teh Botol Sosro ini sangat segar dan manis, minuman favorit yang cocok untuk dinikmati kapan saja.",
      45: "Kacang Garuda ini gurih dan renyah, camilan yang sangat pas untuk menemani aktivitas sehari-hari.",
      46: "Pensil Faber-Castell ini memiliki kualitas terbaik, sangat cocok untuk menulis dan menggambar dengan presisi.",
      47: "Buku Catatan Moleskine ini elegan dan fungsional, sempurna untuk menulis ide-ide dan catatan penting.",
      48: "Stapler 3M ini sangat ergonomis dan tahan lama, sangat pas untuk keperluan kantor dengan daya tahan tinggi.",
      49: "Pulpen Pilot G-2 ini memiliki tinta yang sangat halus, nyaman digunakan untuk menulis dalam waktu lama.",
      50: "Kertas HVS A4 ini berkualitas tinggi, ideal untuk kebutuhan printing dan dokumen kantor.",
    };

    // Generate review data
    for (let productId of productIds) {
      const customerIndex = Math.floor((productId - 1) / 10); // Customer group based on productId
      const customerId = 11 + customerIndex; // UserId 11 for products 1-10, 12 for products 11-20, and so on

      const randomRating = Math.floor(Math.random() * 5) + 1; // Random rating between 1 and 5
      const comment =
        comments[productId] || "Produk ini sangat bagus dan bermanfaat!";

      reviews.push({
        userId: customerId,
        productId,
        rating: randomRating,
        comment,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    // Insert reviews into the database
    await queryInterface.bulkInsert("Reviews", reviews);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Reviews", null, {});
  },
};
