const express = require("express");
const router = express.Router();

module.exports = ({ getUserByEmail }) => {
  // GET menu items
  // GET * FROM MENU_ITEMS TABLE
  router.get("/", (req, res) => {
    templateVars = {
      errorMsg: null,
    };
    res.render("login", templateVars);
  });

  // router.post("/", (req, res) => {
  //   const { email, password } = req.body;
  //   //if user is trying to login without filling details
  //   if (!email || !password) {
  //     res.status(400).render("error", {
  //       error: "400. Please provide valid credentials.",
  //       user: undefined,
  //     }); //check if the user is registed or not
  //   } else if (!isEmailRegistered(users, email)) {
  //     res.status(403).render("error", {
  //       error: "403. User does not exist.",
  //       user: undefined,
  //     }); //if user is registed than check if password is matching or not
  //   } else if (bcrypt.compareSync(password, getHashedPassword(users, email))) {
  //     const userID = getUserIDByEmail(users, email);
  //     req.session.user_id = userID;
  //     res.redirect(`/urls`);
  //   } else {
  //     //if not, return to user with error
  //     res.status(403).render("error", {
  //       error: "Password and email do not match.",
  //       user: undefined,
  //     });
  //   }
  // });

  router.post("/", (req, res) => {
    const { userEmail, userPassword } = req.body;
    // If user submits with missing inputs, redirect back to register page with error message
    if (!userEmail || !userPassword) {
      let templateVars = {
        errorMsg: "Please fill out all fields before submitting",
      };
      res.render("login", templateVars);
    }
    // Fetch user from db
    getUserByEmail(userEmail).then((user) => {
      // If user is undefined, it means the db query retuned nothing and the email is not on file
      if (!user) {
        let templateVars = {
          errorMsg: "That email is not registered",
        };
        res.render("login", templateVars);
      } else if (user.password !== userPassword) {
        // If password doesn't match, redirect to login with error message
        let templateVars = {
          errorMsg: "Invalid credentials",
        };
        res.render("login", templateVars);
      } else {
        // All good, set cookie to user id and redirect to menu
        req.session.user_id = user.id;
        res.redirect("/menu");
      }
    });
  });
  return router;
};
