// express import
const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");
const routes = require("./controllers");

//express handlerbars imports
const sequelize = require("./config/connection");

// Importing express-session and connect-session-sequelize
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);


// const { User, Comment, Post } = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

// Session configuration
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Use session 
app.use(session(sess));

// Handlebars.js engine setup
const hbs = exphbs.create({
  //registering partials in our hbs instance
  partialsDir: path.join(__dirname, "views/partials"),
  helpers: helpers,
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
