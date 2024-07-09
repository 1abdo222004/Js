const express = require("express");
const bodyParser = require("body-parser");
const Botly = require("botly");
const botly = new Botly({
    accessToken: 'EAAR5Iep3r7IBO1jFZBtQotTQCZAkkM3kif1lEKXgua3mrSFyI9lTxcFUoyaofnX7ZBoQn4ndOjjFihrkfd5gIegsSZA0vneSgLkaKzZAF322uSILoiWEQQ4WmWeCrraQPmth5lnSUZBP4FJQrU4sjbrSB4GNgSgJQ7T9WBWGGJbfloadt4JBGoikWToOTCvFbX', // page access token provided by facebook
    verifyToken:'text', // needed when using express - the verification token you provided when defining the webhook in facebook
    notificationType: Botly.CONST.REGULAR, // already the default (optional)
    FB_URL: 'https://graph.facebook.com/v2.6/' // this is the default - allows overriding for testing purposes
});

botly.on("message", (senderId, message, data) => {
    let text = `echo: ${data.text}`;

    botly.sendText({
      id: senderId,
      text: text
    });
});

const app = express();
app.use(bodyParser.json({
    verify: botly.getVerifySignature(process.env.APP_SECRET) //allow signature verification based on the app secret
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/webhook", botly.router());
app.listen(3000);
