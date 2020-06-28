const express = require('express');
const router  = express.Router();

module.exports = ({ getCompletedOrder }) => {
  // GET completed order
  // GET SPECIFIC ORDER FROM ORDERS TABLE
  router.get("/", (req, res) => {
    getCompletedOrder()
      .then(completedOrder => {
        console.log(completedOrder)
        let templateVars = {
          completedOrder
        };
        res.render("completed_order", templateVars)
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};