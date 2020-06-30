const express = require("express");
const router = express.Router();

module.exports = ({ registerUser }) => {
  // GET menu items
  // GET * FROM MENU_ITEMS TABLE
  router.get("/", (req, res) => {
    res.render("register");
  });

  router.post("/", (req, res) => {
    const {userName, userEmail, userPhone, userPassword} = req.body;
    const values = [userName, userEmail, userPhone, userPassword];
    registerUser(values)
      .then(newUser => {
        // new user is an object that looks like this {id: 9};
        // set cookie here
        res.redirect("menu");
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
    });
  });

  return router;
};
