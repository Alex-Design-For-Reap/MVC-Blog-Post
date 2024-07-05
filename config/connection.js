// config/connection.js

const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

if (process.env.NODE_ENV === 'production') {
  //sequelize = new Sequelize(process.env.DB_URL);
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, // Ensure this matches your .env file
    {
      host: process.env.DB_HOST,
      dialect: "postgres",
      dialectOptions: {
        "ssl": {
          "require": true,
          "rejectUnauthorized": false
        }
      }
    }
  );
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, // Ensure this matches your .env file
    {
      host: "localhost",
      dialect: "postgres",
    }
  );
}

module.exports = sequelize;


// const Sequelize = require('sequelize');
// require('dotenv').config();

// const sequelize = new Sequelize(process.env.DATABASE_URL || process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,{
//   host: process.env.DB_HOST,
//   dialect: 'postgres',
//   port: process.env.DB_PORT,
//   // dialectOptions: {
//   //   ssl: {
//   //     require: true,
//   //     // rejectUnauthorized: false,
//   //   }
//   // }
// });

// module.exports = sequelize;