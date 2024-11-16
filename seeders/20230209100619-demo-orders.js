"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Orders",
      [
        {
          userId: 1,
          storeId: 1,
          customerName: "Agung Laksono",
          customerAddress: "Jl. Pahlawan No. 18",
          totalPrice: 1800000 * 2, // Price for orderId 1
          shipmentCost: 1800000 * 2 * 0.025, // 2.5% of totalPrice
          totalPay: 1800000 * 2 + 1800000 * 2 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          storeId: 1,
          customerName: "Agung Laksono",
          customerAddress: "Jl. Pahlawan No. 18",
          totalPrice: 1200000 * 1, // Price for orderId 2
          shipmentCost: 1200000 * 1 * 0.025, // 2.5% of totalPrice
          totalPay: 1200000 * 1 + 1200000 * 1 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          storeId: 1,
          customerName: "Agung Laksono",
          customerAddress: "Jl. Pahlawan No. 18",
          totalPrice: 3500000 * 1, // Price for orderId 3
          shipmentCost: 3500000 * 1 * 0.025, // 2.5% of totalPrice
          totalPay: 3500000 * 1 + 3500000 * 1 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          storeId: 1,
          customerName: "Agung Laksono",
          customerAddress: "Jl. Pahlawan No. 18",
          totalPrice: 1200000 * 3, // Price for orderId 4
          shipmentCost: 1200000 * 3 * 0.025, // 2.5% of totalPrice
          totalPay: 1200000 * 3 + 1200000 * 3 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          storeId: 1,
          customerName: "Agung Laksono",
          customerAddress: "Jl. Pahlawan No. 18",
          totalPrice: 1500000 * 2, // Price for orderId 5
          shipmentCost: 1500000 * 2 * 0.025, // 2.5% of totalPrice
          totalPay: 1500000 * 2 + 1500000 * 2 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          storeId: 2,
          customerName: "Agung Laksono",
          customerAddress: "Jl. Pahlawan No. 18",
          totalPrice: 700000 * 1, // Price for orderId 6
          shipmentCost: 700000 * 1 * 0.025, // 2.5% of totalPrice
          totalPay: 700000 * 1 + 700000 * 1 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          storeId: 2,
          customerName: "Agung Laksono",
          customerAddress: "Jl. Pahlawan No. 18",
          totalPrice: 900000 * 2, // Price for orderId 7
          shipmentCost: 900000 * 2 * 0.025, // 2.5% of totalPrice
          totalPay: 900000 * 2 + 900000 * 2 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          storeId: 2,
          customerName: "Agung Laksono",
          customerAddress: "Jl. Pahlawan No. 18",
          totalPrice: 1500000 * 1, // Price for orderId 8
          shipmentCost: 1500000 * 1 * 0.025, // 2.5% of totalPrice
          totalPay: 1500000 * 1 + 1500000 * 1 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          storeId: 2,
          customerName: "Agung Laksono",
          customerAddress: "Jl. Pahlawan No. 18",
          totalPrice: 1200000 * 3, // Price for orderId 9
          shipmentCost: 1200000 * 3 * 0.025, // 2.5% of totalPrice
          totalPay: 1200000 * 3 + 1200000 * 3 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          storeId: 2,
          customerName: "Agung Laksono",
          customerAddress: "Jl. Pahlawan No. 18",
          totalPrice: 2000000 * 1, // Price for orderId 10
          shipmentCost: 2000000 * 1 * 0.025, // 2.5% of totalPrice
          totalPay: 2000000 * 1 + 2000000 * 1 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          storeId: 3,
          customerName: "Barbie Chika",
          customerAddress: "Jl. Merdeka No. 10",
          totalPrice: 1000000 * 1, // Price for orderId 11
          shipmentCost: 1000000 * 1 * 0.025, // 2.5% of totalPrice
          totalPay: 1000000 * 1 + 1000000 * 1 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          storeId: 3,
          customerName: "Barbie Chika",
          customerAddress: "Jl. Merdeka No. 10",
          totalPrice: 400000 * 2, // Price for orderId 12
          shipmentCost: 400000 * 2 * 0.025, // 2.5% of totalPrice
          totalPay: 400000 * 2 + 400000 * 2 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          storeId: 3,
          customerName: "Barbie Chika",
          customerAddress: "Jl. Merdeka No. 10",
          totalPrice: 350000 * 3, // Price for orderId 13
          shipmentCost: 350000 * 3 * 0.025, // 2.5% of totalPrice
          totalPay: 350000 * 3 + 350000 * 3 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          storeId: 3,
          customerName: "Barbie Chika",
          customerAddress: "Jl. Merdeka No. 10",
          totalPrice: 500000 * 1, // Price for orderId 14
          shipmentCost: 500000 * 1 * 0.025, // 2.5% of totalPrice
          totalPay: 500000 * 1 + 500000 * 1 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          storeId: 3,
          customerName: "Barbie Chika",
          customerAddress: "Jl. Merdeka No. 10",
          totalPrice: 1400000 * 1, // Price for orderId 15
          shipmentCost: 1400000 * 1 * 0.025, // 2.5% of totalPrice
          totalPay: 1400000 * 1 + 1400000 * 1 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          storeId: 4,
          customerName: "Barbie Chika",
          customerAddress: "Jl. Merdeka No. 10",
          totalPrice: 250000 * 2, // Price for orderId 16
          shipmentCost: 250000 * 2 * 0.025, // 2.5% of totalPrice
          totalPay: 250000 * 2 + 250000 * 2 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          storeId: 4,
          customerName: "Barbie Chika",
          customerAddress: "Jl. Merdeka No. 10",
          totalPrice: 500000 * 1, // Price for orderId 17
          shipmentCost: 500000 * 1 * 0.025, // 2.5% of totalPrice
          totalPay: 500000 * 1 + 500000 * 1 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          storeId: 4,
          customerName: "Barbie Chika",
          customerAddress: "Jl. Merdeka No. 10",
          totalPrice: 150000 * 3, // Price for orderId 18
          shipmentCost: 150000 * 3 * 0.025, // 2.5% of totalPrice
          totalPay: 150000 * 3 + 150000 * 3 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          storeId: 4,
          customerName: "Barbie Chika",
          customerAddress: "Jl. Merdeka No. 10",
          totalPrice: 30000 * 5, // Price for orderId 19
          shipmentCost: 30000 * 5 * 0.025, // 2.5% of totalPrice
          totalPay: 30000 * 5 + 30000 * 5 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          storeId: 4,
          customerName: "Barbie Chika",
          customerAddress: "Jl. Merdeka No. 10",
          totalPrice: 100000 * 2, // Price for orderId 20
          shipmentCost: 100000 * 2 * 0.025, // 2.5% of totalPrice
          totalPay: 100000 * 2 + 100000 * 2 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          storeId: 5,
          customerName: "Choki Sihotang",
          customerAddress: "Jl. Sudirman No. 23",
          totalPrice: 450000 * 1, // Price for orderId 21
          shipmentCost: 450000 * 1 * 0.025, // 2.5% of totalPrice
          totalPay: 450000 * 1 + 450000 * 1 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          storeId: 5,
          customerName: "Choki Sihotang",
          customerAddress: "Jl. Sudirman No. 23",
          totalPrice: 120000 * 3, // Price for orderId 22
          shipmentCost: 120000 * 3 * 0.025, // 2.5% of totalPrice
          totalPay: 120000 * 3 + 120000 * 3 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          storeId: 5,
          customerName: "Choki Sihotang",
          customerAddress: "Jl. Sudirman No. 23",
          totalPrice: 100000 * 2, // Price for orderId 23
          shipmentCost: 100000 * 2 * 0.025, // 2.5% of totalPrice
          totalPay: 100000 * 2 + 100000 * 2 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          storeId: 5,
          customerName: "Choki Sihotang",
          customerAddress: "Jl. Sudirman No. 23",
          totalPrice: 250000 * 1, // Price for orderId 24
          shipmentCost: 250000 * 1 * 0.025, // 2.5% of totalPrice
          totalPay: 250000 * 1 + 250000 * 1 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          storeId: 5,
          customerName: "Choki Sihotang",
          customerAddress: "Jl. Sudirman No. 23",
          totalPrice: 850000 * 1, // Price for orderId 25
          shipmentCost: 850000 * 1 * 0.025, // 2.5% of totalPrice
          totalPay: 850000 * 1 + 850000 * 1 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          storeId: 6,
          customerName: "Choki Sihotang",
          customerAddress: "Jl. Sudirman No. 23",
          totalPrice: 10000000 * 1, // Price for orderId 26
          shipmentCost: 10000000 * 1 * 0.025, // 2.5% of totalPrice
          totalPay: 10000000 * 1 + 10000000 * 1 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          storeId: 6,
          customerName: "Choki Sihotang",
          customerAddress: "Jl. Sudirman No. 23",
          totalPrice: 16000000 * 1, // Price for orderId 27
          shipmentCost: 16000000 * 1 * 0.025, // 2.5% of totalPrice
          totalPay: 16000000 * 1 + 16000000 * 1 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          storeId: 6,
          customerName: "Choki Sihotang",
          customerAddress: "Jl. Sudirman No. 23",
          totalPrice: 3500000 * 2, // Price for orderId 28
          shipmentCost: 3500000 * 2 * 0.025, // 2.5% of totalPrice
          totalPay: 3500000 * 2 + 3500000 * 2 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          storeId: 6,
          customerName: "Choki Sihotang",
          customerAddress: "Jl. Sudirman No. 23",
          totalPrice: 3000000 * 3, // Price for orderId 29
          shipmentCost: 3000000 * 3 * 0.025, // 2.5% of totalPrice
          totalPay: 3000000 * 3 + 3000000 * 3 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          storeId: 6,
          customerName: "Choki Sihotang",
          customerAddress: "Jl. Sudirman No. 23",
          totalPrice: 30000000 * 1, // Price for orderId 30
          shipmentCost: 30000000 * 1 * 0.025, // 2.5% of totalPrice
          totalPay: 30000000 * 1 + 30000000 * 1 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          storeId: 7,
          customerName: "Desy Permatasari",
          customerAddress: "Jl. Gatot Subroto No. 12",
          totalPrice: 7000000 * 1, // Price for orderId 31
          shipmentCost: 7000000 * 1 * 0.025, // 2.5% of totalPrice
          totalPay: 7000000 * 1 + 7000000 * 1 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          storeId: 7,
          customerName: "Desy Permatasari",
          customerAddress: "Jl. Gatot Subroto No. 12",
          totalPrice: 18000000 * 2, // Price for orderId 32
          shipmentCost: 18000000 * 2 * 0.025, // 2.5% of totalPrice
          totalPay: 18000000 * 2 + 18000000 * 2 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          storeId: 7,
          customerName: "Desy Permatasari",
          customerAddress: "Jl. Gatot Subroto No. 12",
          totalPrice: 22000000 * 1, // Price for orderId 33
          shipmentCost: 22000000 * 1 * 0.025, // 2.5% of totalPrice
          totalPay: 22000000 * 1 + 22000000 * 1 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          storeId: 7,
          customerName: "Desy Permatasari",
          customerAddress: "Jl. Gatot Subroto No. 12",
          totalPrice: 8000000 * 3, // Price for orderId 34
          shipmentCost: 8000000 * 3 * 0.025, // 2.5% of totalPrice
          totalPay: 8000000 * 3 + 8000000 * 3 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          storeId: 7,
          customerName: "Desy Permatasari",
          customerAddress: "Jl. Gatot Subroto No. 12",
          totalPrice: 6500000 * 5, // Price for orderId 35
          shipmentCost: 6500000 * 5 * 0.025, // 2.5% of totalPrice
          totalPay: 6500000 * 5 + 6500000 * 5 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          storeId: 8,
          customerName: "Desy Permatasari",
          customerAddress: "Jl. Gatot Subroto No. 12",
          totalPrice: 150000 * 2, // Price for orderId 36
          shipmentCost: 150000 * 2 * 0.025, // 2.5% of totalPrice
          totalPay: 150000 * 2 + 150000 * 2 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          storeId: 8,
          customerName: "Desy Permatasari",
          customerAddress: "Jl. Gatot Subroto No. 12",
          totalPrice: 120000 * 3, // Price for orderId 37
          shipmentCost: 120000 * 3 * 0.025, // 2.5% of totalPrice
          totalPay: 120000 * 3 + 120000 * 3 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          storeId: 8,
          customerName: "Desy Permatasari",
          customerAddress: "Jl. Gatot Subroto No. 12",
          totalPrice: 180000 * 1, // Price for orderId 38
          shipmentCost: 180000 * 1 * 0.025, // 2.5% of totalPrice
          totalPay: 180000 * 1 + 180000 * 1 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          storeId: 8,
          customerName: "Desy Permatasari",
          customerAddress: "Jl. Gatot Subroto No. 12",
          totalPrice: 100000 * 4, // Price for orderId 39
          shipmentCost: 100000 * 4 * 0.025, // 2.5% of totalPrice
          totalPay: 100000 * 4 + 100000 * 4 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          storeId: 8,
          customerName: "Desy Permatasari",
          customerAddress: "Jl. Gatot Subroto No. 12",
          totalPrice: 250000 * 2, // Price for orderId 40
          shipmentCost: 250000 * 2 * 0.025, // 2.5% of totalPrice
          totalPay: 250000 * 2 + 250000 * 2 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          storeId: 9,
          customerName: "Eko Pratama",
          customerAddress: "Jl. Ahmad Yani No. 5",
          totalPrice: 25000 * 10, // Price for orderId 41
          shipmentCost: 25000 * 10 * 0.025, // 2.5% of totalPrice
          totalPay: 25000 * 10 + 25000 * 10 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          storeId: 9,
          customerName: "Eko Pratama",
          customerAddress: "Jl. Ahmad Yani No. 5",
          totalPrice: 75000 * 3, // Price for orderId 42
          shipmentCost: 75000 * 3 * 0.025, // 2.5% of totalPrice
          totalPay: 75000 * 3 + 75000 * 3 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          storeId: 9,
          customerName: "Eko Pratama",
          customerAddress: "Jl. Ahmad Yani No. 5",
          totalPrice: 5000 * 20, // Price for orderId 43
          shipmentCost: 5000 * 20 * 0.025, // 2.5% of totalPrice
          totalPay: 5000 * 20 + 5000 * 20 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          storeId: 9,
          customerName: "Eko Pratama",
          customerAddress: "Jl. Ahmad Yani No. 5",
          totalPrice: 10000 * 15, // Price for orderId 44
          shipmentCost: 10000 * 15 * 0.025, // 2.5% of totalPrice
          totalPay: 10000 * 15 + 10000 * 15 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          storeId: 9,
          customerName: "Eko Pratama",
          customerAddress: "Jl. Ahmad Yani No. 5",
          totalPrice: 30000 * 7, // Price for orderId 45
          shipmentCost: 30000 * 7 * 0.025, // 2.5% of totalPrice
          totalPay: 30000 * 7 + 30000 * 7 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          storeId: 10,
          customerName: "Eko Pratama",
          customerAddress: "Jl. Ahmad Yani No. 5",
          totalPrice: 5000 * 30, // Price for orderId 46
          shipmentCost: 5000 * 30 * 0.025, // 2.5% of totalPrice
          totalPay: 5000 * 30 + 5000 * 30 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          storeId: 10,
          customerName: "Eko Pratama",
          customerAddress: "Jl. Ahmad Yani No. 5",
          totalPrice: 250000 * 2, // Price for orderId 47
          shipmentCost: 250000 * 2 * 0.025, // 2.5% of totalPrice
          totalPay: 250000 * 2 + 250000 * 2 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          storeId: 10,
          customerName: "Eko Pratama",
          customerAddress: "Jl. Ahmad Yani No. 5",
          totalPrice: 100000 * 5, // Price for orderId 48
          shipmentCost: 100000 * 5 * 0.025, // 2.5% of totalPrice
          totalPay: 100000 * 5 + 100000 * 5 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          storeId: 10,
          customerName: "Eko Pratama",
          customerAddress: "Jl. Ahmad Yani No. 5",
          totalPrice: 30000 * 10, // Price for orderId 49
          shipmentCost: 30000 * 10 * 0.025, // 2.5% of totalPrice
          totalPay: 30000 * 10 + 30000 * 10 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          storeId: 10,
          customerName: "Eko Pratama",
          customerAddress: "Jl. Ahmad Yani No. 5",
          totalPrice: 50000 * 12, // Price for orderId 50
          shipmentCost: 50000 * 12 * 0.025, // 2.5% of totalPrice
          totalPay: 50000 * 12 + 50000 * 12 * 0.025,
          orderStatus: "success",
          shipmentStatus: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ); // Insert the data into the Orders table
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Orders", null, {}); // Delete all stores data
  },
};
