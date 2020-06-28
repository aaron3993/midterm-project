const express = require('express');
const router  = express.Router();

module.exports = ({ getMenuItems, placeOrder }) => {
  // Get all menu items and pass them to the template through template vars
  router.get("/", (req, res) => {
    getMenuItems()
      .then(menu => {
        let templateVars = {
          menu
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
