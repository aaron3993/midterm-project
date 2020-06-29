const express = require('express');
const router  = express.Router();

module.exports = ({ getMenuItems, placeOrder }) => {
  // GET all orders
  // GET * FROM ORDERED_ITEMS TABLE
  router.get("/", (req, res) => {
    const menuItemsObj = {"1": 2, "2": 1, "5": 1, "6": 3}
      getMenuItems()
      .then(menu => {
        let templateVars = {
          orders: [1, 2, 3],
          menuItems: menu
        };
        console.log(templateVars)
        res.render("orders", templateVars)
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  // POST - place an order
  // INSERT ALL ORDERS MADE (MANY) INTO THE ORDERS TABLE (ONE)
  router.post("/", (req, res) => {
      placeOrder(1, Date.now(), 'no cheese', 30, false, null)
        .then(order => {
          // notifyOwner(order)
          console.log('order: ', order)
          res.redirect("completed_order")
        })
        .catch(err => console.log(err))
    })

    return router;
};