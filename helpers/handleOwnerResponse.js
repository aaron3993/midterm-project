// POST: /reservations/handle
router.post("/handle", twilio.webhook({ validate: false }), function (
  req,
  res
) {
  let from = req.body.From;
  let smsRequest = req.body.Body;

  let smsResponse;

  const [orderID, duration] = smsRequest.split("-");

  if (db.lookup(orderID)) {
    db.update(order_ready_at, Now() + duration);
    let message = "Thanks for confirming duration for oder ID";
    respond(res, message);
  } else {
    let message = "It seems there is no oder in the DB for given order id";
    respond(res, message);
  }
});
