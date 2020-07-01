// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure //

const twilioSMSAPI = () => {
  const accountSid = process.env.TWILIO_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require("twilio")(accountSid, authToken);

  return function (options) {
    client.messages
      .create({
        body: options.text,
        from: "+12028901491",
        to: options.phoneNumber,
      })
      .then((message) => console.log(message.sid))
      .catch((error) => console.log(error));
  };
};
const notifySMS = twilioSMSAPI();

const notifyOwner = (id = 1234, phoneNumber = "+16477837891") => {
  const options = {
    text: `New Order ${id} recieved. Please log in to confirm.`,
    phoneNumber: phoneNumber,
  };
  notifySMS(options);
};

const notifyCustomerOrderConfirmed = (
  id = 7,
  waitTime = 10,
  phoneNumber = "+16477837891"
) => {
  const options = {
    text: `Order id ${id} is confirmed and will be ready in ${waitTime}`,
    phoneNumber: phoneNumber,
  };
  console.log('notifying the client');
  // notifySMS(options);
};

const notifyCustomerOrderReady = (id = 1234, phoneNumber = "+16477837891") => {
  const options = {
    text: `Order ${id} is ready. Please proceed to the restuarant to pick it up.`,
    phoneNumber: phoneNumber,
  };
  console.log('Notifying from notify owner');
  // notifySMS(options);
};

module.exports = {
  notifyOwner,
  notifyCustomerOrderConfirmed,
  notifyCustomerOrderReady,
};
