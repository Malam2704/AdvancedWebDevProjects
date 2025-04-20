// Express Email Sender API
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail', // you can use other services like 'outlook', 'yahoo', etc.
    auth: {
        user: process.env.EMAIL_USER,     // your email
        pass: process.env.EMAIL_PASSWORD  // your email password or app-specific password
    }
});

// API endpoint to send email
app.post('/api/send-email', async (req, res) => {
    try {
        const { to, subject, text } = req.body;

        // Validate request body
        if (!to || !subject || !text) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields: to, subject, or text'
            });
        }

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,  // sender address
            to: to,                         // recipient address
            subject: subject,               // Subject line
            text: text                      // plain text body
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.messageId);

        res.status(200).json({
            success: true,
            message: 'Email sent successfully',
            messageId: info.messageId
        });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send email',
            error: error.message
        });
    }
});

// Simple home route
app.get('/', (req, res) => {
    res.send('Email API is running! Send a POST request to /api/send-email to send an email.');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});