const express = require('express');
const router  = express.Router();

module.exports = ({ getOrders, placeOrder }) => {
  // GET specific order
  router.get("/", (req, res) => {
    getOrders()
      .then(orders => { 
        let templateVars = {
          orders
        };
        res.render("orders", templateVars)
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  
  // POST - place an order
  // router.post("/", (req, res) => {
  //     const {order_id, menu_item_id, price_charged, qty} = req.body
  //     console.log(order_id, menu_item_id, price_charged, qty)
  //     placeOrder(order_id, menu_item_id, price_charged, qty)
  //       .then(orders => {
  //         res.redirect("id")
  //       })
  //       .catch(err => console.log(err))
  //   })
    return router;
};