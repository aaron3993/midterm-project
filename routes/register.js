const express = require("express");
const router = express.Router();

module.exports = () => {
  // GET menu items
  // GET * FROM MENU_ITEMS TABLE
  router.get("/", (req, res) => {
    res.render("register");
  });
  return router;
};
