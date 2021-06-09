const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const session = require("express-session");
const helpers=require("./utils/helpers")
const routes = require("./controllers");
const sequelize = require("./config/connection");
const fileUpload = require("express-fileupload");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({helpers});

const sessionOptions = {
  secret: "super secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// app.use(bodyParser.json())
app.use(express.json());
app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(session(sessionOptions))
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}.`));
});
