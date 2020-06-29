const express = require("express");
const router = express.Router();

const { notifyOwner } = require("../helpers/notifyOwner");

module.exports = ({ getMenuItems, getCompletedOrder, placeOrder }) => {
  // GET all orders
  // GET * FROM ORDERED_ITEMS TABLE
  router.get("/", (req, res) => {
    getMenuItems()
      .then((menu) => {
        let templateVars = {
          orders: [1, 2, 3],
          menuItems: menu,
        };
        console.log(templateVars);
        res.render("orders", templateVars);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  router.get("/:id/completed", (req, res) => {
    getCompletedOrder()
      .then((completedOrder) => {
        console.log(completedOrder);
        let templateVars = {
          completedOrder,
        };
        res.render("completed_order", templateVars);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  // POST - place an order
  // INSERT ALL ORDERS MADE (MANY) INTO THE ORDERS TABLE (ONE)
  router.post("/", (req, res) => {
    // const {user_id, order_placed_at, special_instructions, order_ready_duration, order_ready, order_complete_at} = req.body
    // console.log(user_id, order_placed_at, special_instructions, order_ready_duration, order_ready, order_complete_at)
    console.log("creating a new order");
    placeOrder(1, new Date(), "no bread", 30, false, null)
      .then((order) => {
        console.log(order);
        notifyOwner(order);
        res.redirect(`/orders/1/completed`);
      })
      .catch((err) => console.log(err));
  });

  return router;
};
