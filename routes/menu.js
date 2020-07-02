const express = require("express");
const router = express.Router();

module.exports = ({ getMenuItems }) => {
  // GET menu items
  // GET * FROM MENU_ITEMS TABLE
  router.get("/", (req, res) => {
    if (!req.session.user_id) {
      return res.redirect("/");
    }
    if (req.session.role === 'owner') {
      return res.redirect("/admin")
    }
    getMenuItems()
      .then((menu) => {
        let templateVars = {
          mains: menu.filter(menuItem => menuItem.category === 'main'),
          sides: menu.filter(menuItem => menuItem.category === 'side'),
          soups: menu.filter(menuItem => menuItem.category === 'soup'),
          drinks: menu.filter(menuItem => menuItem.category === 'drink'),
          user: req.session
        };
        res.render("menu", templateVars)
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
