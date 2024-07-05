const sequelize = require("../config/connection");
const seedUsers = require("./seedUsers");
const seedPosts = require("./seedPosts");
const seedComments = require("./seedComments");

const seedAll = async () => {
  try {
    console.log("Syncing database...");
    await sequelize.sync({ force: true }); // Syncs the models and creates the schema
    console.log("Seeding users...");
    await seedUsers();
    console.log("Seeding posts...");
    await seedPosts();
    console.log("Seeding comments...");
    await seedComments();
    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Failed to seed database:", error);
  } finally {
    process.exit(0);
  }
};

seedAll();
