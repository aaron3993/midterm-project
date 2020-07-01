const express = require("express");
const router = express.Router();

module.exports = ({ fetchPendingOrderDetails, fetchPendingOrders, confirmOrder }) => {
  router.get("/", (req, res) => {
    const templateVars = {};
    res.render('admin');
    // fetchPendingOrders()
    //   .then(pendingOrders => {
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
    if (wait_time === 0) {
      // Order is ready => notify guest and change status in order to 'ready'
      // .then
      res.redirect("admin");
    } else {
      confirmOrder(order_id, wait_time)
        .then(order => {

          console.log('------------------------>',order);
          console.log(`notifying guest it will take ${wait_time} minutes and ready at ${JSON.parse(order).ready_at}`);
          res.redirect("admin");
        })
      // Order is confirmed => notify guest, update wait time and ready_at in db, update status to 'confirmed' in db
      // .then
      // res.redirect("admin");
    }
  });


  return router;
};


