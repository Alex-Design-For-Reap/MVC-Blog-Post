// const sequelize = require("../config/connection");
const { Post } = require("../models");

const postData = require("./postsData.json");

const seedPosts = async () => {
  try {
    await Post.bulkCreate(postData, {
      individualHooks: true,
      returning: true,
    });
    console.log("Posts seeded");
  } catch (error) {
    console.error("Failed to seed Posts:", error);
  }
};

module.exports = seedPosts;
