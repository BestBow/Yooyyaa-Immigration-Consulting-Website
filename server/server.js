// Load environment variables from .env
import dotenv from "dotenv";
dotenv.config({ path: './.env' }); 

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import { rateLimit } from 'express-rate-limit';

const PORT = process.env.PORT || 5050;
const app = express();

// Use middleware
app.use(cors());

app.use(express.json()); // Built-in parser for JSON bodies
app.use(bodyParser.json());


const formLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // max 10 requests per minute
  message: "cannot send more than 10 requests per minute"
});

//Applying rateLimiter on contact form route
app.use("/api/contact",formLimiter);


// Set up Nodemailer transporter using environment variables
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER, // Your Gmail account (set in .env)
    pass: process.env.GMAIL_PASS, // Your Gmail App Password (set in .env)
  },
});

// This route handles the contact form submissions
app.post("/api/contact", async (req, res) => {
  try {
    // Destructure form data from the request body
    const { name, email, phone, category, message } = req.body;

    // Build email options (the email you'll receive)
    const mailOptions = {
      from: email, // Use sender's email
      to: "annabellaivagba@gmail.com", // Your email address
      subject: "New Contact Form Submission",
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Category: ${category}
Message: ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with success if email is sent
    return res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
