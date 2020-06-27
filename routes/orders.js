const express = require('express');
const router  = express.Router();

module.exports = ({ getOrders, placeOrder }) => {
  // GET specific order
  router.get("/", (req, res) => {
    getOrders()
      .then(orders => { 
        let templateVars = {
          orders
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
  // router.post("/", (req, res) => {
    //   const {...} = req.body
    //   console.log(...)
    //   placeOrder(...)
    //     .then(order => {
    //       res.json(order)
    //     })
    //     .catch(err => console.log(err))
    // })
    return router;
};