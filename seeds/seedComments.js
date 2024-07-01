// const sequelize = require("../config/connection");
const { Comment } = require("../models");

const commentData = require("./commentsData.json");

const seedComments = async () => {
  try {
    await Comment.bulkCreate(commentData, {
      individualHooks: true,
      returning: true,
    });
    console.log("Comments seeded");
  } catch (error) {
    console.error("Failed to seed Comments:", error);
  }
};

module.exports = seedComments;
