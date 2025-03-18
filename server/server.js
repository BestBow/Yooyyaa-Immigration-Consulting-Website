// Load environment variables from the .env file
import dotenv from "dotenv";
dotenv.config();

// Import required packages
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";

// Create an Express app and define the port
const app = express();
const PORT = process.env.PORT || 5050;

// Middleware setup
app.use(cors());
app.use(express.json()); // built-in JSON parser
app.use(bodyParser.json()); 

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER, 
    pass: process.env.GMAIL_PASS, 
  },
});

// Route to handle the contact form submission
app.post("/api/contact", async (req, res) => {
  try {
    // Destructure the form data from the request body
    const { name, email, phone, category, message } = req.body;

    const mailOptions = {
      from: email, // the sender's email (user's email)
      to: "annabellaivagba@gmail.com", // your email address
      subject: "New Contact Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Category: ${category}
        Message: ${message}
      `,
    };

    // Actually send the email
    await transporter.sendMail(mailOptions);

    // Respond with a success message if email sent
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
