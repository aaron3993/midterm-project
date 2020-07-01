const express = require('express');
const router  = express.Router();

module.exports = ({ getCompletedOrder }) => {
  // GET completed order
  // GET SPECIFIC ORDER FROM ORDERS TABLE
  router.get("/", (req, res) => {
    if (!req.session.user_id) {
      return res.redirect("/");
    }
    getCompletedOrder()
      .then(completedOrder => {
        console.log(completedOrder)
        let templateVars = {
          completedOrder,
          user: req.session
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
