const express = require('express');
const router  = express.Router();

module.exports = ({ getMenuItems }) => {
  // GET menu items
  router.get("/", (req, res) => {
    getMenuItems()
      .then(menu => {
        console.log(menu[0].name)
        let templateVars = {
          menuItems: menu
        };
        res.render("menu", templateVars)
      })
      .catch(err => {
      res
      .status(500)
      .json({ error: err.message });
    });
  });
  return router;
};
