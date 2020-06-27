// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const session    = require("express-session");
const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Require functions from dbHelpers
const dbHelpers = require('./helpers/dbHelpers')(db)

// Require helper functions from helperFuncs
const { generateUID, generateOID } = require('./helpers/helperFuncs');


// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));
app.use(session({secret: 'callback-cats'}));
let sess;

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own


// const completedOrderRoutes = require("./routes/completed_order");
const menuRoutes = require("./routes/menu");
const ordersRoutes = require("./routes/orders");
const usersRoutes = require("./routes/users");
// const widgetsRoutes = require("./routes/widgets");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own


// app.use("/order/:id/completed", orderCompletedRoutes(dbHelpers));
app.use("/orders/:id", ordersRoutes(dbHelpers));
app.use("/menu", menuRoutes(dbHelpers));
app.use("/api/users", usersRoutes(dbHelpers));
// app.use("/api/widgets", widgetsRoutes(dbHelpers));

// Note: mount other resources here, using the same pattern above


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/login", (req, res) => {
  console.log('req body', req.body);

  const sess = req.session;

  let user_id = generateUID();
  let order_id = generateOID();
  let user_order = {};

  sess.user_id = user_id;
  sess.order_id = order_id;
  sess.user_order = user_order;

  // TODO: first check db to find user by email
  // If user exists, use existing userID
  // Else, generate new UID
  // Always start with new OID and empty user_order

  res.redirect('menu');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
