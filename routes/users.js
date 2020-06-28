/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = ({ getUsers, addUser }) => {
  // Template GET default
  router.get("/", (req, res) => {
    getUsers()
      .then(users => {
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  // Template POST
  // router.post("/", (req, res) => {
  //   const {name, email, password} = req.body
  //   console.log(name, email, password)
  //   // Can test post request using CURL or Insomnia (49:35 in lecture)
  //   addUser(name, email, password)
  //     .then(user => {
  //       res.json(user)
  //     })
  //     .catch(err => console.log(err))
  // })

  return router;
};
