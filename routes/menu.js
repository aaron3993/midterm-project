const express = require('express');
const router  = express.Router();

module.exports = ({ getMenuItems }) => {
  // GET menu items
  // GET * FROM MENU_ITEMS TABLE
  router.get("/", (req, res) => {
    getMenuItems()
      .then(menu => {
        let templateVars = {
          menuItems: menu,
        };
        res.render("menu", templateVars)
      })
      .catch(err => {
      res
      .status(500)
      .json({ error: err.message });
    });
  });
  // POST - Add menu items
  // INSERT MENU ITEMS IN LOCAL STORAGE BY ID AND QTY INTO ORDERED_ITEMS TABLE ON FORM SUBMIT
  // router.post("/", (req, res) => {
  //   const {menu_item_id, qty} = req.body
  //   console.log(menu_item_id, qty)
  //   addMenuItems(menu_item_id, qty)
  //     .then(orders => {
  //       res.redirect("orders")
  //     })
  //     .catch(err => console.log(err))
  // })
  return router;
};
