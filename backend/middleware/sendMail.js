"use strict";
const nodemailer = require("nodemailer");


const sendMail = async (email, emailTo) => {


  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "stmp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL, // generated ethereal user
      pass: process.env.PASSWORD, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: email, // sender address
    to: emailTo, // list of receivers
    subject: "Reservation", // Subject line
    text: "Reservation", // plain text body
    html: "<b>Reservationz ${email}</b>", // html body
  });
}

exports = { sendMail } 