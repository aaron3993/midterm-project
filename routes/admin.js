const express = require("express");
const router = express.Router();

module.exports = ({ fetchPendingOrderDetails, fetchPendingOrders }) => {
  router.get("/", (req, res) => {
    const templateVars = {};
    fetchPendingOrders()
      .then(pendingOrders => {
        // pendingOrders is an array of objects which includes order_id, user_id, placed_at, special_instructions
        templateVars.pendingOrders = JSON.parse(pendingOrders);

        // let pendingIds = JSON.parse(pendingOrders).map(order => order.order_id);

        fetchPendingOrderDetails()
          .then(pendingOrderDetails => {
            console.log(JSON.parse(pendingOrderDetails));
            res.send('ok');
          });





        // console.log(templateVars.pendingOrders.order_id);
        // templateVars[pendingOrders] = pendingOrders;
        // res.render('admin', templateVars);
        // fetchPendingOrderDetails()
        //  .then(pendingOrderDetails => {
        //  });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
    });
  });
  return router;
};
