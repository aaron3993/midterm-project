// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure //

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

const notifyOwner = (id = 1234, phoneNumber = "+16477837891") => {
  client.messages
    .create({
      body: `New order #${id}. Please log in to confirm order`,
      from: "+12028901491",
      to: phoneNumber,
    })
    .then((message) => console.log(message.sid))
    .catch((error) => console.log(error));
};

module.exports = { notifyOwner };
