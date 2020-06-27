const express = require('express');
const router  = express.Router();

module.exports = ({ getMenuItems }) => {
  // GET menu items
  // GET * FROM MENU_ITEMS TABLE
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
  // POST - Add menu items
  // INSERT SELECTED MENU ITEMS BY ID (ONE) INTO ORDERED_ITEMS TABLE (MANY) ON FORM SUBMIT
  // router.post("/", (req, res) => {
  //     const {order_id, menu_item_id, price_charged, qty} = req.body
  //     console.log(order_id, menu_item_id, price_charged, qty)
  //     addMenuItems(order_id, menu_item_id, price_charged, qty)
  //       .then(orders => {
  //         res.redirect("orders")
  //       })
  //       .catch(err => console.log(err))
  //   })
  return router;
};
