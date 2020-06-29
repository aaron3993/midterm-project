// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure

const accountSid = "AC183ebdd0e581b4381b607fd57bc100cf";
const authToken = "956e9ff9c8f08fdeb64af521282d18d7";
const client = require("twilio")(accountSid, authToken);

function notifyOwner(order) {
  const { oderID, userID, special_instructions } = order;

  client.messages
    .create({
      body: "Your got new order ID with 3 items Please reply with ",
      from: "+12028901491",
      to: "+16477837891",
    })
    .then((message) => console.log(message.sid));
}
