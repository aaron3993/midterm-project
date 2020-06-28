const express = require('express');
const router  = express.Router();

module.exports = ({ getOrders, placeOrder }) => {
  // GET all orders
  // GET * FROM ORDERED_ITEMS TABLE
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
  // INSERT ALL ORDERS MADE (MANY) INTO THE ORDERS TABLE (ONE)
  // router.post("/", (req, res) => {
  //     const {user_id, order_placed_at, special_instructions, order_ready_duration, order_ready, order_complete_at} = req.body
  //     console.log(user_id, order_placed_at, special_instructions, order_ready_duration, order_ready, order_complete_at)
  //     placeOrder(user_id, order_placed_at, special_instructions, order_ready_duration, order_ready, order_complete_at)
  //       .then(orders => {
  //         res.redirect("completed_order")
  //       })
  //       .catch(err => console.log(err))
  //   })

    return router;
};