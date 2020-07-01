const express = require("express");
const router = express.Router();

module.exports = ({ getMenuItems }) => {
  // GET menu items
  // GET * FROM MENU_ITEMS TABLE
  router.get("/", (req, res) => {
    getMenuItems()
      .then((menu) => {
        let templateVars = {
          menuItems: menu,
          user: req.session.user_id,
        };
        res.render("menu", templateVars);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
