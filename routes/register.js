const express = require("express");
const router = express.Router();

module.exports = ({ registerUser, getUserByEmail }) => {
  router.get("/", (req, res) => {
    templateVars = {
      errorMsg: null,
      user: req.session
    };
    res.render("register", templateVars);
  });

  router.post("/", (req, res) => {
    const { userName, userEmail, userPhone, userPassword } = req.body;
    // If user submits with missing inputs, redirect back to register page with error message
    if (!userName || !userEmail || !userPhone || !userPassword) {
      let templateVars = {
        errorMsg: "Please fill out all fields before submitting",
        user: req.session
      };
      res.render("register", templateVars)
    };
    getUserByEmail(userEmail)
    .then(user => {
      if (user.email === userEmail) {
        let templateVars = {
          errorMsg: 'Email is already taken',
          user: req.session
        };
        res.render("register", templateVars)
      }
    })
    const values = [userName, userEmail, userPhone, userPassword, 'customer'];
    registerUser(values)
      .then((newUser) => {
        req.session.user_id = newUser.id;
        req.session.username = newUser.name
        req.session.role = 'customer';
        res.redirect("menu");
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};