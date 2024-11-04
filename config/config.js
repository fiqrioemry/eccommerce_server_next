// require("dotenv").config();

// const { DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_HOST } = process.env;

// module.exports = {
//   development: {
//     username: DB_USERNAME, // Mengambil dari variabel lingkungan
//     password: DB_PASSWORD, // Mengambil dari variabel lingkungan
//     database: DB_DATABASE, // Mengambil dari variabel lingkungan
//     host: DB_HOST, // Mengambil dari variabel lingkungan
//     dialect: "mysql",
//   },
// };

require("dotenv").config({
  path: "../.env",
});

const { DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_HOST } = process.env;

module.exports = {
  development: {
    username: "root",
    password: "Oemry241995@",
    database: "ecommerce_server",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
