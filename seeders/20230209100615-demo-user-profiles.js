"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("UserProfiles", [
      {
        userId: 1,
        name: "User01",
        birthDay: "1994-05-10", // Inovasi: Penentuan tanggal lahir
        gender: "male",
        city: "Jakarta",
        address: "Jl. Merdeka No. 10",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        name: "User02",
        birthDay: "1993-08-22", // Inovasi: Penentuan tanggal lahir
        gender: "female",
        city: "Surabaya",
        address: "Jl. Sudirman No. 23",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        name: "User03",
        birthDay: "1991-12-15", // Inovasi: Penentuan tanggal lahir
        gender: "male",
        city: "Bandung",
        address: "Jl. Gatot Subroto No. 12",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        name: "User04",
        birthDay: "1995-04-01", // Inovasi: Penentuan tanggal lahir
        gender: "female",
        city: "Bandung",
        address: "Jl. Sudirman No. 23",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        name: "User05",
        birthDay: "1989-11-25", // Inovasi: Penentuan tanggal lahir
        gender: "male",
        city: "Medan",
        address: "Jl. Ahmad Yani No. 5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 6,
        name: "User06",
        birthDay: "1996-07-13", // Inovasi: Penentuan tanggal lahir
        gender: "female",
        city: "Yogyakarta",
        address: "Jl. Pahlawan No. 18",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 7,
        name: "User07",
        birthDay: "1992-09-30", // Inovasi: Penentuan tanggal lahir
        gender: "male",
        city: "Jakarta",
        address: "Jl. Merdeka No. 10",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 8,
        name: "User08",
        birthDay: "1990-03-17", // Inovasi: Penentuan tanggal lahir
        gender: "female",
        city: "Surabaya",
        address: "Jl. Sudirman No. 23",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 9,
        name: "User09",
        birthDay: "1994-12-06", // Inovasi: Penentuan tanggal lahir
        gender: "male",
        city: "Bandung",
        address: "Jl. Gatot Subroto No. 12",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 10,
        name: "User10",
        birthDay: "1991-01-29", // Inovasi: Penentuan tanggal lahir
        gender: "female",
        city: "Medan",
        address: "Jl. Ahmad Yani No. 5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 11,
        name: "Agung Laksono",
        birthDay: "1993-05-19", // Inovasi: Penentuan tanggal lahir
        gender: "male",
        city: "Yogyakarta",
        address: "Jl. Pahlawan No. 18",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 12,
        name: "Barbie Chika",
        birthDay: "1992-11-03", // Inovasi: Penentuan tanggal lahir
        gender: "female",
        city: "Jakarta",
        address: "Jl. Merdeka No. 10",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 13,
        name: "Choki Sihotang",
        birthDay: "1990-06-27", // Inovasi: Penentuan tanggal lahir
        gender: "male",
        city: "Surabaya",
        address: "Jl. Sudirman No. 23",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 14,
        name: "Desy permatasari",
        birthDay: "1988-04-10", // Inovasi: Penentuan tanggal lahir
        gender: "female",
        city: "Bandung",
        address: "Jl. Gatot Subroto No. 12",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 15,
        name: "Eko pratama",
        birthDay: "1995-08-22", // Inovasi: Penentuan tanggal lahir
        gender: "male",
        city: "Medan",
        address: "Jl. Ahmad Yani No. 5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 16,
        name: "admin",
        birthDay: "1993-10-11", // Inovasi: Penentuan tanggal lahir
        gender: "male",
        city: "Yogyakarta",
        address: "Jl. Pahlawan No. 18",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("UserProfiles", null, {});
  },
};
