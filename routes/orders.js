const express = require('express');
const router  = express.Router();

module.exports = ({ getMenuItems, getCompletedOrder, placeOrder, addMenuItem, getLastOrder, getPriceById }) => {
  // GET all orders
  // GET * FROM ORDERED_ITEMS TABLE
  router.get("/:id", (req, res) => {
    getMenuItems()
      .then(menu => {
        let templateVars = {
          orders: [1, 2, 3],
          menuItems: menu
        };
        res.render("orders", templateVars);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  router.get("/:id/completed", (req, res) => {
    getCompletedOrder()
      .then(completedOrder => {
        let templateVars = {
          completedOrder
        };
        res.render("completed_order", templateVars);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  // POST - place an order
  router.post("/:id", (req, res) => {
  // { specialInstructions: '',
  // orderDetails: '{"1":1,"3":1}' }
    console.log("creating a new order");
    //       (id, order_placed_at, special_instructions, order_ready_duration, order_ready, order_complete_at)
    const menuItems = JSON.parse(req.body.orderDetails);
    // Loop the menuItems object and call addMenuItem add each menu item to a new ordered_item
    // let lastOrders
    // console.log(getLastOrder().then(lastOrder => {
    //   lastOrders = lastOrder[0].max
    // }))
    // console.log(lastOrders)//order_id
    // console.log(Number(menuItem)), //menu_item_id
    // console.log(getPriceById(menuItem).then(item => item[0].price_charged).catch(err => console.log(err))), //price
    // console.log(menuItems[menuItem]) //qty
    placeOrder(1, new Date(), req.body.specialInstructions, 30, false, null).then(menuItemId => {
      for (const menuItem in menuItems) {
        addMenuItem(menuItemId, Number(menuItem), 1, menuItems[menuItem]);
      }
    }).then(id => {
      getCompletedOrder()
        .then(completedOrder => {
          console.log('completedOrder: ', completedOrder)
          res.redirect(`/orders/1/completed`);
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