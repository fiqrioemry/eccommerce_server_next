"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const OrderDetails = [
      {
        orderId: 1,
        productId: 1,
        price: 1800000, // Price for Mesin Cuci Sharp Electric
        quantity: 2, // Example quantity, adjust as needed
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 2,
        productId: 2,
        price: 1200000, // Price for TV Panasonic 14Inch
        quantity: 1, // Example quantity, adjust as needed
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 3,
        productId: 3,
        price: 3500000, // Price for Kulkas Samsung 200L
        quantity: 1, // Example quantity, adjust as needed
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 4,
        productId: 4,
        price: 1200000, // Price for Headset Sony Wireless
        quantity: 3, // Example quantity, adjust as needed
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 5,
        productId: 5,
        price: 1500000, // Price for Speaker JBL Flip 5
        quantity: 2, // Example quantity, adjust as needed
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 6,
        productId: 6,
        price: 700000, // Price for Kaos Polo Ralph Lauren
        quantity: 1, // Example quantity, adjust as needed
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 7,
        productId: 7,
        price: 900000, // Price for Jeans Levi's 501
        quantity: 2, // Example quantity, adjust as needed
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 8,
        productId: 8,
        price: 1500000, // Price for Jaket Nike Sports
        quantity: 1, // Example quantity, adjust as needed
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 9,
        productId: 9,
        price: 1200000, // Price for Sepatu Adidas Running
        quantity: 3, // Example quantity, adjust as needed
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 10,
        productId: 10,
        price: 2000000, // Price for Kacamata Ray-Ban Aviator
        quantity: 1, // Example quantity, adjust as needed
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 11,
        productId: 11,
        price: 1000000, // Price for Dress Maxi Zara
        quantity: 1, // Example quantity, adjust as needed
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 12,
        productId: 12,
        price: 400000, // Price for Blouse H&M
        quantity: 2, // Example quantity, adjust as needed
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 13,
        productId: 13,
        price: 350000, // Price for Skirt Forever 21
        quantity: 3, // Example quantity, adjust as needed
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 14,
        productId: 14,
        price: 500000, // Price for Sweater Uniqlo
        quantity: 1, // Example quantity, adjust as needed
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 15,
        productId: 15,
        price: 1400000, // Price for High Heels Charles & Keith
        quantity: 1, // Example quantity, adjust as needed
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 16,
        productId: 16,
        price: 250000, // Price for Vitamin C Blackmores
        quantity: 2, // Example quantity, adjust as needed
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 17,
        productId: 17,
        price: 500000, // Price for Suplemen Protein Herbalife
        quantity: 1, // Example quantity, adjust as needed
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 18,
        productId: 18,
        price: 150000, // Price for Minyak Zaitun Habbatussauda
        quantity: 3, // Example quantity, adjust as needed
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 19,
        productId: 19,
        price: 30000, // Price for Alpukat Organik
        quantity: 5, // Example quantity, adjust as needed
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 20,
        productId: 20,
        price: 100000, // Price for Kapsul Ekstrak Kunyit
        quantity: 2, // Example quantity, adjust as needed
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 21,
        productId: 21,
        price: 450000, // Price for Serum Skincare L'oreal
        quantity: 1, // Example quantity, adjust as needed
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 22,
        productId: 22,
        price: 120000, // Price for Lipstik Maybelline
        quantity: 3, // Example quantity, adjust as needed
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 23,
        productId: 23,
        price: 100000, // Price for Shampo Pantene
        quantity: 2, // Example quantity, adjust as needed
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 24,
        productId: 24,
        price: 250000, // Price for Masker Wajah The Body Shop
        quantity: 1, // Example quantity, adjust as needed
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 25,
        productId: 25,
        price: 850000, // Price for Parfum Calvin Klein
        quantity: 1, // Example quantity, adjust as needed
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 26,
        productId: 26,
        price: 10000000, // Price for Smartphone Samsung Galaxy S23
        quantity: 1, // Example quantity, adjust as needed
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 27,
        productId: 27,
        price: 16000000, // Price for iPad Pro 12.9 inch
        quantity: 1, // Example quantity, adjust as needed
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 28,
        productId: 28,
        price: 3500000, // Price for Samsung Galaxy Tab A8
        quantity: 2, // Example quantity, adjust as needed
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 29,
        productId: 29,
        price: 3000000, // Price for Smartphone Xiaomi Redmi Note 12
        quantity: 3, // Example quantity, adjust as needed
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 30,
        productId: 30,
        price: 30000000, // Price for Samsung Galaxy Z Fold 5
        quantity: 1, // Example quantity, adjust as needed
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 31,
        productId: 31,
        price: 7000000, // Price for Laptop ASUS VivoBook 15
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 32,
        productId: 32,
        price: 18000000, // Price for MacBook Air M2
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 33,
        productId: 33,
        price: 22000000, // Price for Laptop Lenovo ThinkPad X1 Carbon
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 34,
        productId: 34,
        price: 8000000, // Price for HP Pavilion x360
        quantity: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 35,
        productId: 35,
        price: 6500000, // Price for Laptop Dell Inspiron 15
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 36,
        productId: 36,
        price: 150000, // Price for Buku Novel Harry Potter
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 37,
        productId: 37,
        price: 120000, // Price for Buku Motivasi The Power of Habit
        quantity: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 38,
        productId: 38,
        price: 180000, // Price for Buku Bisnis Sukses Milenial
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 39,
        productId: 39,
        price: 100000, // Price for Buku Kesehatan Mindfulness
        quantity: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 40,
        productId: 40,
        price: 250000, // Price for Buku Teknik Pemrograman Python
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 41,
        productId: 41,
        price: 25000, // Price for Susu UHT Full Cream
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 42,
        productId: 42,
        price: 75000, // Price for Kopi Arabika Sumatera
        quantity: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 43,
        productId: 43,
        price: 5000, // Price for Mie Instan Goreng
        quantity: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 44,
        productId: 44,
        price: 10000, // Price for Teh Botol Sosro
        quantity: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 45,
        productId: 45,
        price: 30000, // Price for Coklat Coklat
        quantity: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 46,
        productId: 46,
        price: 5000, // Price for Pensil Faber-Castell
        quantity: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 47,
        productId: 47,
        price: 250000, // Price for Buku Catatan Moleskine
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 48,
        productId: 48,
        price: 100000, // Price for Stapler 3M
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 49,
        productId: 49,
        price: 30000, // Price for Pulpen Pilot G-2
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 50,
        productId: 50,
        price: 50000, // Price for Kertas HVS A4
        quantity: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Insert OrderDetails into the database
    await queryInterface.bulkInsert("OrderDetails", OrderDetails, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("OrderDetails", null, {});
  },
};
