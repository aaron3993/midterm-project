const express = require("express");
const router = express.Router();

const accountSid = "AC183ebdd0e581b4381b607fd57bc100cf";
const authToken = "956e9ff9c8f08fdeb64af521282d18d7";
const client = require("twilio")(accountSid, authToken);

const notifyOwner = (order) => {
  //const { oderID, userID, special_instructions } = order;

  client.messages
    .create({
      body: "Your got new order ID with 3 items Please reply with ",
      from: "+12028901491",
      to: "+16477837891",
    })
    .then((message) => console.log(message.sid));
};

module.exports = ({ getCompletedOrder }) => {
  // GET completed order
  // GET SPECIFIC ORDER FROM ORDERS TABLE
  router.get("/", (req, res) => {
    getCompletedOrder()
      .then((completedOrder) => {
        console.log(completedOrder);
        let templateVars = {
          completedOrder,
        };

        res.render("completed_order", templateVars);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
