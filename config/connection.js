// config/connection.js

const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

if (process.env.NODE_ENV === 'production') {
  console.log("using production database");
  console.log("Database URL: ", process.env.DATABASE_URL);
  sequelize = new Sequelize(
    process.env.DATABASE_URL,
    {
      host: process.env.DB_HOST,
      dialect: "postgres",
      port: process.env.DB_PORT,
      dialectOptions: {
        "ssl": {
          "require": true,
          "rejectUnauthorized": false
        }
      }
    }
  );
} else {
  console.log("using development database");
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST || "localhost",
      dialect: "postgres",
      port: process.env.DB_PORT || 5432,
    }
  );
}

module.exports = sequelize;