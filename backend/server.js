import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
       "https://hama-protofilo-flax.vercel.app", 
    ],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
   port: 587,
  secure: false,
  family: 4, // 👈 FORCE IPv4 (VERY IMPORTANT)
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

app.get("/", (req, res) => {
  res.json({ message: "Server is working!" });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <h3>New Portfolio Contact</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("✅ Email sent successfully");
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("❌ Email error:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

// ONE listen only
app.listen(8080, () => {
  console.log("Server running on port 8080");
});