"use strict";
const createSlug = require("../utils/CreateSlug");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const Stores = [
      {
        userId: 1,
        storeName: "TechVerse Electronics",
        slug: createSlug("TechVerse Electronics"),
        description:
          "Innovative electronics that redefine your tech experience.",
        createdAt: new Date(),
        updatedAt: new Date(),
        city: "Jakarta",
        image:
          "https://images.tokopedia.net/img/cache/215-square/GAnVPX/2022/7/28/47114b87-5dab-4dcb-ac58-b1f5f8323bb2.png",
      },
      {
        userId: 2,
        storeName: "UrbanVibe Men’s Fashion",
        slug: createSlug("UrbanVibe Men’s Fashion"),
        description: "Bold styles and timeless designs for the modern man.",
        createdAt: new Date(),
        updatedAt: new Date(),
        city: "Surabaya",
        image:
          "https://images.tokopedia.net/img/cache/215-square/shops-1/2020/8/3/8910267/8910267_d1d1280e-7fbc-4dfe-b085-b313793431d8.jpg",
      },
      {
        userId: 3,
        storeName: "LuxeAura Women’s Fashion",
        slug: createSlug("LuxeAura Women’s Fashion"),
        description:
          "Chic and elegant clothing for every woman who loves to shine.",
        createdAt: new Date(),
        updatedAt: new Date(),
        city: "Bandung",
        image:
          "https://images.tokopedia.net/img/cache/215-square/GAnVPX/2023/6/10/cabd424d-815a-4fb7-b30b-7ca34ec92d4f.png",
      },
      {
        userId: 4,
        storeName: "PureEssence Health",
        slug: createSlug("PureEssence Health"),
        description: "Wellness products that nurture your body and soul.",
        createdAt: new Date(),
        updatedAt: new Date(),
        city: "Bandung",
        image:
          "https://images.tokopedia.net/img/cache/215-square/GAnVPX/2023/10/16/778fb0b6-540b-4347-8660-dde06576f08a.png",
      },
      {
        userId: 5,
        storeName: "GlowUp Beauty",
        slug: createSlug("GlowUp Beauty"),
        description: "Beauty products that bring out your natural glow.",
        createdAt: new Date(),
        updatedAt: new Date(),
        city: "Medan",
        image:
          "https://images.tokopedia.net/img/cache/215-square/GAnVPX/2022/7/28/47114b87-5dab-4dcb-ac58-b1f5f8323bb2.png",
      },
      {
        userId: 6,
        storeName: "GizmoHub Phones & Tablets",
        slug: createSlug("GizmoHub Phones & Tablets"),
        description:
          "Latest smartphones and tablets to elevate your digital life.",
        createdAt: new Date(),
        updatedAt: new Date(),
        city: "Yogyakarta",
        image:
          "https://images.tokopedia.net/img/cache/215-square/shops-1/2020/8/3/8910267/8910267_d1d1280e-7fbc-4dfe-b085-b313793431d8.jpg",
      },
      {
        userId: 7,
        storeName: "PowerUp Laptops",
        slug: createSlug("PowerUp Laptops"),
        description:
          "High-performance laptops and computers built for speed and power.",
        createdAt: new Date(),
        updatedAt: new Date(),
        city: "Jakarta",
        image:
          "https://images.tokopedia.net/img/cache/215-square/GAnVPX/2023/6/10/cabd424d-815a-4fb7-b30b-7ca34ec92d4f.png",
      },
      {
        userId: 8,
        storeName: "BookNest",
        slug: createSlug("BookNest"),
        description:
          "Dive into an endless world of literature with our curated selection of books.",
        createdAt: new Date(),
        updatedAt: new Date(),
        city: "Surabaya",
        image:
          "https://images.tokopedia.net/img/cache/215-square/GAnVPX/2023/10/16/778fb0b6-540b-4347-8660-dde06576f08a.png",
      },
      {
        userId: 9,
        storeName: "SavorDelights Food & Drink",
        slug: createSlug("SavorDelights Food & Drink"),
        description:
          "Fresh, delicious food and beverages delivered straight to you.",
        createdAt: new Date(),
        updatedAt: new Date(),
        city: "Bandung",
        image:
          "https://images.tokopedia.net/img/cache/215-square/GAnVPX/2022/7/28/47114b87-5dab-4dcb-ac58-b1f5f8323bb2.png",
      },
      {
        userId: 10,
        storeName: "OfficePrime",
        slug: createSlug("OfficePrime"),
        description:
          "Quality office supplies that help you stay productive and organized.",
        createdAt: new Date(),
        updatedAt: new Date(),
        city: "JMedan",
        image:
          "https://images.tokopedia.net/img/cache/215-square/shops-1/2020/8/3/8910267/8910267_d1d1280e-7fbc-4dfe-b085-b313793431d8.jpg",
      },
    ];

    await queryInterface.bulkInsert("Stores", Stores, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Stores", null, {});
  },
};
