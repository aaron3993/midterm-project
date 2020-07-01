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
          completedOrder,
          user: req.session.username
        };
        res.render("order_status", templateVars)
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
