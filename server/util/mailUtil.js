import nodemailer from "nodemailer";
import { constructEmail } from "../templatingEngine/email.js";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});


export async function sendMail(email = {}) {
  const info = await transporter.sendMail({
    from: `"Your App" <${process.env.SMTP_USER}>`,
    to: email.email,
    subject: email.subject,
    text: email.username,
    html: constructEmail({ username: email.username, from: email.from}),
  });
  console.log("Message sent: %s", info.messageId);
  return info;
}