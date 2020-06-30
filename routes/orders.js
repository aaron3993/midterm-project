const express = require("express");
const router = express.Router();

const { notifyOwner } = require("../helpers/notifyOwner");

module.exports = ({ getMenuItems, getCompletedOrder, placeOrder, addMenuItem }) => {
  // GET all orders
  // GET * FROM ORDERED_ITEMS TABLE
  router.get("/new", (req, res) => {
    if (!req.session.user_id) {
      return res.redirect("/menu");
    }
    getMenuItems()
      .then(menu => {
        let templateVars = {
          menuItems: menu,
          user: req.session.user_id
        };
        res.render("new_order", templateVars);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/:id/completed", (req, res) => {
    if (!req.session.user_id) {
      return res.redirect("/menu");
    }
    getCompletedOrder(req.params.id)
      .then(completedOrder => {
        console.log('get req.session: ', req.session);
        let templateVars = {
          completedOrder,
          user: req.session.user_id
        };
        res.render("completed_order", templateVars);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // POST - place an order
  router.post("/:id", (req, res) => {
    console.log("creating a new order");
    const menuItems = JSON.parse(req.body.orderDetails);
    // Loop the menuItems object and call addMenuItem add each menu item to a new ordered_item
    placeOrder(req.session.user_id, new Date(), req.body.specialInstructions, null, 'pending', null).then(order => {
      // Mentor says the following is a bad approach, mixing backend with frontend
      // req.session.order_id = order[0].id;
      console.log('post req.session: ', req.session);
      for (const menuItem in menuItems) {
        addMenuItem(order.id, Number(menuItem), menuItems[menuItem]);
      }
      res.redirect(`/orders/${order.id}/completed`);
    }).catch(err => console.log(err));
  });
  return router;
};

// let templateVars = {
//   completedOrder
// };
// res.render("completed_order", templateVars)
// notifyOwner(order)
