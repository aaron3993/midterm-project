const express = require("express");
const router = express.Router();

module.exports = ({ fetchOrderDetailsByStatus, fetchOrdersByStatus, confirmOrder, updateOrderReady }) => {
  router.get("/", (req, res) => {
    const templateVars = {};
      fetchOrdersByStatus('pending')
      .then(pendingOrders => {
        const pendingOrdersObj = {};
        for (const order of JSON.parse(pendingOrders)) {
          pendingOrdersObj[order.order_id] = order;
          pendingOrdersObj[order.order_id].menu_items = [];
        };
        fetchOrderDetailsByStatus('pending')
        .then(pendingOrderDetails => {
          for (const order_detail of JSON.parse(pendingOrderDetails)) {
            pendingOrdersObj[order_detail.order_id].menu_items.push(order_detail);









          };
          templateVars.pendingOrders = pendingOrdersObj;
          res.render('admin', templateVars);
        })









      });
    //     // pendingOrders is an array of objects which includes order_id, user_id, placed_at, special_instructions
    //     templateVars.pendingOrders = JSON.parse(pendingOrders);

    //     // let pendingIds = JSON.parse(pendingOrders).map(order => order.order_id);

    //     fetchPendingOrderDetails()
    //       .then(pendingOrderDetails => {
    //         console.log(JSON.parse(pendingOrderDetails));
    //         res.send('ok');
    //       });





    //     // console.log(templateVars.pendingOrders.order_id);
    //     // templateVars[pendingOrders] = pendingOrders;
    //     // res.render('admin', templateVars);
    //     // fetchPendingOrderDetails()
    //     //  .then(pendingOrderDetails => {
    //     //  });
    //   })
    //   .catch(err => {
    //     res
    //       .status(500)
    //       .json({ error: err.message });
    // });
  });
  router.post("/", (req, res) => {
    console.log(req.body);
    const {order_id, wait_time} = req.body;
    if (parseInt(wait_time) === 0) {
      updateOrderReady(order_id)
        .then(order => {
          console.log(`notifying guest order is ready for pickup`);
          console.log(JSON.parse(order));
          res.redirect("admin");
      })
    } else {
      confirmOrder(order_id, wait_time)
        .then(order => {
          console.log(`notifying guest it will take ${wait_time} minutes`);
          console.log(JSON.parse(order));
          res.redirect("admin");
      })
    }
  });
  return router;
};


