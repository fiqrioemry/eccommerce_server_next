"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Insert users and get the inserted user IDs
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          // 1
          name: "Electronics",
          image:
            "https://images.tokopedia.net/img/cache/260x200/attachment/2020/3/16/77305583/77305583_05a9e001-e041-49cc-b7ce-c5cebd79d308.png.webp",
          slug: "electronics",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 2.
          name: "Mens Fashion",
          image:
            "https://images.tokopedia.net/img/cache/260x200/attachment/2020/3/18/82120085/82120085_f5970250-11da-4319-8b1a-231d70efa636.png.webp",
          slug: "mens-fashion",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 3
          name: "Womens Fashion",
          image:
            "https://images.tokopedia.net/img/cache/260x200/attachment/2020/3/17/77305583/77305583_92009f78-2b49-411d-846e-c6be42bf2437.png.webp",
          slug: "womens-fashion",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 4
          name: "Health",
          image:
            "https://images.tokopedia.net/img/cache/260x200/attachment/2020/3/18/77305583/77305583_e3e29cf0-fdee-404d-9c80-2dae8c0d0be8.png.webp",
          slug: "health",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 5.
          name: "Beauty",
          image:
            "https://images.tokopedia.net/img/cache/260x200/attachment/2019/3/15/2567/2567_9887e5b0-b91f-4b9e-a475-50d933a6b084.png.webp?ect=4g",
          slug: "beauty",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 6
          name: "Handphone and Tablet",
          image:
            "https://images.tokopedia.net/img/cache/250-square/VqbcmM/2024/10/31/3ee84954-2a6f-4571-8606-289fd012da58.jpg?ect=4g",
          slug: "handphone-and-tablet",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 7
          name: "Computer and Laptop",
          image:
            "https://images.tokopedia.net/img/cache/260x200/attachment/2020/3/18/77305583/77305583_3528719e-58d7-45c0-ab01-d6de5a35a0fd.png.webp",
          slug: "computer-and-laptop",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //8
          name: "Books",
          image:
            "https://images.tokopedia.net/img/cache/260x200/attachment/2020/3/20/77305583/77305583_5fdb920f-8df1-4b72-9ff0-df16230a44a6.png.webp",
          slug: "books",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 9
          name: "Food and Drink",
          image:
            "https://images.tokopedia.net/img/cache/260x200/attachment/2020/3/19/82120085/82120085_94074c50-bb58-45c4-84ec-180d4a45cd48.png.webp",
          slug: "food-and-drink",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 10
          name: "Office and Stationary",
          image:
            "https://images.tokopedia.net/img/cache/260x200/attachment/2020/3/19/82120085/82120085_66909f39-07fa-4a6c-9a8a-6a17c156a3f0.png.webp",
          slug: "office-and-stationary",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {} // This option returns the inserted rows with IDs
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
