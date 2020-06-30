const express = require("express");
const router = express.Router();

const { notifyOwner } = require("../helpers/notifyOwner");

module.exports = ({ getMenuItems, getCompletedOrder, placeOrder, addMenuItem }) => {
  // GET all orders
  // GET * FROM ORDERED_ITEMS TABLE
  router.get("/:id", (req, res) => {
    getMenuItems()
      .then(menu => {
        let templateVars = {
          orders: [1, 2, 3],
          menuItems: menu,
        };
        res.render("orders", templateVars);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  router.get("/:id/completed", (req, res) => {
    getCompletedOrder()
      .then(completedOrder => {
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
  router.post("/:id", (req, res) => {
    console.log("creating a new order");
    const menuItems = JSON.parse(req.body.orderDetails);
    // Loop the menuItems object and call addMenuItem add each menu item to a new ordered_item
    placeOrder(req.session.user_id, new Date(), req.body.specialInstructions, null, 'pending', null).then(order => {
      req.session.order_id = order[0].id
      console.log('req.session: ', req.session)
      for (const menuItem in menuItems) {
        addMenuItem(order[0].id, Number(menuItem), menuItems[menuItem]);
      }
    }).then(id => {
      getCompletedOrder()
        .then(completedOrder => {
          console.log('completedOrder: ', completedOrder)
          res.redirect(`/orders/${req.session.order_id}/completed`);
        })
        .catch(err => console.log(err));
    });
  });
  return router;
};

// let templateVars = {
//   completedOrder
// };
// res.render("completed_order", templateVars)
// notifyOwner(order)