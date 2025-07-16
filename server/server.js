const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    // Allow only PDF, DOC, and DOCX files
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only PDF, DOC, and DOCX files are allowed!'), false);
    }
  }
});

// Gmail transporter configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  });
};

// Company contact endpoint
app.post('/api/contact/company', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.COMPANY_EMAIL || process.env.GMAIL_USER,
      subject: `Company Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #99BC85;">New Company Contact - HeadHR</h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px;">
            <p><strong>Company Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 3px;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This email was sent from HeadHR contact form.
          </p>
        </div>
      `,
      replyTo: email
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending company email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Job seeker contact endpoint with resume upload
app.post('/api/contact/seeker', upload.single('resume'), async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const resumeFile = req.file;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.COMPANY_EMAIL || process.env.GMAIL_USER,
      subject: `Job Seeker Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #99BC85;">New Job Seeker Contact - HeadHR</h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px;">
            <p><strong>Full Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 3px;">${message}</p>
            ${resumeFile ? `<p><strong>Resume:</strong> ${resumeFile.originalname} (${(resumeFile.size / 1024 / 1024).toFixed(2)} MB)</p>` : '<p><strong>Resume:</strong> Not provided</p>'}
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This email was sent from HeadHR contact form.
          </p>
        </div>
      `,
      replyTo: email
    };

    // Add resume attachment if provided
    if (resumeFile) {
      mailOptions.attachments = [
        {
          filename: resumeFile.originalname,
          content: resumeFile.buffer,
          contentType: resumeFile.mimetype
        }
      ];
    }

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Email sent successfully with resume attachment' });
  } catch (error) {
    console.error('Error sending seeker email:', error);
    if (error.code === 'LIMIT_FILE_SIZE') {
      res.status(400).json({ error: 'File size too large. Please upload a file smaller than 10MB.' });
    } else if (error.message.includes('Only PDF, DOC, and DOCX files are allowed')) {
      res.status(400).json({ error: 'Invalid file type. Only PDF, DOC, and DOCX files are allowed.' });
    } else {
      res.status(500).json({ error: 'Failed to send email' });
    }
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
