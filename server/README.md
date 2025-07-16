# HeadHR Email Backend Setup

This backend server handles email sending with Gmail SMTP and file attachments for the HeadHR application.

## Prerequisites

1. **Gmail Account**: You'll need a Gmail account to send emails
2. **Gmail App Password**: You'll need to generate an app password (not your regular Gmail password)

## Gmail Setup

### Step 1: Enable 2-Factor Authentication
1. Go to your [Google Account settings](https://myaccount.google.com/)
2. Navigate to Security
3. Enable 2-Factor Authentication if not already enabled

### Step 2: Generate App Password
1. Go to your [Google Account settings](https://myaccount.google.com/)
2. Navigate to Security
3. Click on "2-Step Verification"
4. Scroll down to "App passwords"
5. Click "Generate" and select "Mail"
6. Copy the generated 16-character password

## Server Setup

### Step 1: Install Dependencies
```bash
cd server
npm install
```

### Step 2: Configure Environment Variables
1. Copy the `.env.example` file to `.env`:
```bash
cp .env.example .env
```

2. Edit the `.env` file with your Gmail credentials:
```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
COMPANY_EMAIL=your-company-email@gmail.com
PORT=3001
```

Replace:
- `your-email@gmail.com` with your Gmail address
- `your-16-character-app-password` with the app password you generated
- `your-company-email@gmail.com` with the email where you want to receive contact forms

### Step 3: Start the Server
```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

The server will run on `http://localhost:3001`

## API Endpoints

### Company Contact Form
- **URL**: `POST /api/contact/company`
- **Content-Type**: `application/json`
- **Body**:
```json
{
  "name": "Company Name",
  "email": "company@example.com",
  "subject": "Subject",
  "message": "Message content"
}
```

### Job Seeker Contact Form
- **URL**: `POST /api/contact/seeker`
- **Content-Type**: `multipart/form-data`
- **Body**:
  - `name`: Full name
  - `email`: Email address
  - `subject`: Subject
  - `message`: Message content
  - `resume`: Resume file (PDF, DOC, DOCX - max 10MB)

## File Upload Restrictions

- **Allowed file types**: PDF, DOC, DOCX
- **Maximum file size**: 10MB
- **Upload method**: multipart/form-data

## Testing

You can test the API endpoints using curl:

### Test Company Contact
```bash
curl -X POST http://localhost:3001/api/contact/company \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Company",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "Test message"
  }'
```

### Test Job Seeker Contact
```bash
curl -X POST http://localhost:3001/api/contact/seeker \
  -F "name=John Doe" \
  -F "email=john@example.com" \
  -F "subject=Job Application" \
  -F "message=I am interested in job opportunities" \
  -F "resume=@/path/to/resume.pdf"
```

## Troubleshooting

### Common Issues

1. **"Invalid login"**: Check your Gmail credentials and app password
2. **"File too large"**: Ensure files are under 10MB
3. **"Invalid file type"**: Only PDF, DOC, and DOCX files are allowed
4. **CORS errors**: The server is configured to allow all origins in development

### Server Logs
The server will log all email sending attempts and errors to the console.

## Security Notes

- Never commit your `.env` file to version control
- Use environment variables for all sensitive configuration
- The Gmail app password is specific to this application
- Consider using a dedicated email account for sending automated emails

## Production Deployment

For production deployment:
1. Set up proper environment variables on your server
2. Use a process manager like PM2
3. Configure proper logging
4. Set up HTTPS
5. Consider using a dedicated SMTP service for high volume
