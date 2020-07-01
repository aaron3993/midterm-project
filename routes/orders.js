const express = require("express");
const router = express.Router();

const { notifyOwner } = require("../helpers/notify");

module.exports = ({
  getMenuItems,
  getCompletedOrder,
  placeOrder,
  addMenuItem,
  getOwnerPhoneNumber,
}) => {
  // GET all orders
  // GET * FROM ORDERED_ITEMS TABLE
  router.get("/new", (req, res) => {
    if (!req.session.user_id) {
      return res.redirect("/");
    }
    if (req.session.role === "owner") {
      return res.redirect("/admin");
    }
    getMenuItems()
      .then((menu) => {
        let templateVars = {
          menuItems: menu,
          user: req.session.username,
        };
        res.render("new_order", templateVars);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/:id", (req, res) => {
    if (!req.session.user_id) {
      return res.redirect("/");
    }
    if (req.session.role === "owner") {
      return res.redirect("/admin");
    }
    getCompletedOrder(req.params.id)
      .then((completedOrder) => {
        let templateVars = {
          completedOrder,
          user: req.session.username,
        };
        if (completedOrder.user_id === req.session.user_id) {
          res.render("order_status", templateVars);
        } else {
          res.redirect("/menu");
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // POST - place an order
  router.post("/", (req, res) => {
    console.log("creating a new order");
    const menuItems = JSON.parse(req.body.orderDetails);
    const date = new Date();
    placeOrder(
      req.session.user_id,
      date.toLocaleString(),
      req.body.specialInstructions,
      null,
      "pending",
      null
    )
      .then((order) => {
        // Mentor says the following is a bad approach, mixing backend with frontend, so using req.params instead
        // req.session.order_id = order[0].id;
        // Loop the menuItems object and call addMenuItem add each menu item to a new ordered_item
        for (const menuItem in menuItems) {
          addMenuItem(order.id, Number(menuItem), menuItems[menuItem]);
        }
        getOwnerPhoneNumber().then((phone) => notifyOwner(order.id, phone));
        res.redirect(`/orders/${order.id}`);
      })
      .catch((err) => console.log(err));
  });
  return router;
};
