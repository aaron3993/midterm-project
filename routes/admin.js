const express = require("express");
const router = express.Router();

const { notifyCustomerOrderConfirmed, notifyCustomerOrderReady } = require("../helpers/notify");

module.exports = ({ fetchOrderDetailsByStatus, fetchOrdersByStatus, confirmOrder, updateOrderReady, getPhoneNumberByOrderID }) => {
  router.get("/", (req, res) => {
    const templateVars = {};

    fetchOrdersByStatus('pending')
    .then (pendingOrders => {
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
        fetchOrdersByStatus('confirmed')
        .then(confirmedOrders => {
          const confirmedOrdersObj = {};
          for (const order of JSON.parse(confirmedOrders)) {
            confirmedOrdersObj[order.order_id] = order;
            confirmedOrdersObj[order.order_id].menu_items = [];
          };
          fetchOrderDetailsByStatus('confirmed')
          .then(confirmedOrderDetails => {
            for (const order_detail of JSON.parse(confirmedOrderDetails)) {
              confirmedOrdersObj[order_detail.order_id].menu_items.push(order_detail);
            };
            templateVars.confirmedOrders = confirmedOrdersObj
            templateVars.pendingOrders = pendingOrdersObj;
            console.log(templateVars);
            res.render('admin', templateVars);
          })
        })
      })
    })
  });

  router.post("/", (req, res) => {
    console.log(req.body);
    const {order_id, wait_time} = req.body;
    if (parseInt(wait_time) === 0) {
      updateOrderReady(order_id)
        .then(order => {
          getPhoneNumberByOrderID(order_id)
          .then(phone => {
            notifyCustomerOrderReady(order_id, JSON.parse(phone).phone);
            res.redirect("admin");
          })
      })
    } else {
      confirmOrder(order_id, wait_time)
        .then(order => {
          getPhoneNumberByOrderID(order_id)
          .then( phone => {
            notifyCustomerOrderConfirmed(order_id, wait_time, JSON.parse(phone).phone);
            res.redirect("admin");
          });
      })
    }
  });
  return router;
};


