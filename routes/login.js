const express = require("express");
const router = express.Router();

module.exports = () => {
  // GET menu items
  // GET * FROM MENU_ITEMS TABLE
  router.get("/", (req, res) => {
    res.render("login");
  });

  router.post("/", (req, res) => {
    const { email, password } = req.body;
    //if user is trying to login without filling details
    if (!email || !password) {
      res.status(400).render("error", {
        error: "400. Please provide valid credentials.",
        user: undefined,
      }); //check if the user is registed or not
    } else if (!isEmailRegistered(users, email)) {
      res.status(403).render("error", {
        error: "403. User does not exist.",
        user: undefined,
      }); //if user is registed than check if password is matching or not
    } else if (bcrypt.compareSync(password, getHashedPassword(users, email))) {
      const userID = getUserIDByEmail(users, email);
      req.session.user_id = userID;
      res.redirect(`/urls`);
    } else {
      //if not, return to user with error
      res.status(403).render("error", {
        error: "Password and email do not match.",
        user: undefined,
      });
    }
  });

  return router;
};
