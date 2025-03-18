import express from "express";
import cors from "cors";
import records from "./routes/record.js";
import dotenv from "dotenv";
dotenv.config();



const PORT = process.env.PORT || 5050;
const app = express();
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");


app.use(cors());
app.use(express.json());
app.use("/record",records);

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, 
      pass: process.env.GMAIL_PASS, 
    },
  });
  

// This route handles the contact form submissions
app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, category, message } = req.body;
  
      const mailOptions = {
        from: email, // the user's email
        to: "annabellaivagba@gmail.com", // where we actually want to receive the email
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
  
      // If successful, respond with a success status
      return res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ success: false, message: "Failed to send email" });
    }
  });

app.listen(PORT, ()=>{
    console.log(`Server listening on port" ${PORT}`);
})




