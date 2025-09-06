require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const winston = require('winston');
const mongoose = require('mongoose');
const SibApiV3Sdk = require('@getbrevo/brevo');
const app = express();
const port = 3000;

// Configure Brevo API client
const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
apiInstance.setApiKey('api-key', process.env.BREVO_API_KEY);

// Define a simple schema and model for testing
const TestSchema = new mongoose.Schema({
  message: String,
  createdAt: { type: Date, default: Date.now },
});
const Test = mongoose.model('Test', TestSchema);

// Create a Winston logger instance
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

// Connect to MongoDB Atlas
const mongoURI = process.env.MONGO_URI; // Use MONGO_URI from environment variables
mongoose.connect(mongoURI)
  .then(() => logger.info('MongoDB connected...'))
  .catch(err => logger.error(err));

// Request logging middleware
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

app.use(express.json()); // For parsing application/json

// Route to send a test email
app.post('/send-email', async (req, res) => {
  const { toEmail, subject, textContent } = req.body;

  if (!toEmail || !subject || !textContent) {
    return res.status(400).json({ message: 'Missing required email parameters' });
  }

  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail.sender = { email: 'noreply@careerverve.com', name: 'CareerVerve' }; // Replace with your sender email
  sendSmtpEmail.to = [{ email: toEmail }];
  sendSmtpEmail.subject = subject;
  sendSmtpEmail.textContent = textContent;

  try {
    /* eslint-disable-next-line no-undef */
    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
    logger.info('Email sent successfully:', data);
    res.status(200).json({ message: 'Email sent successfully', data });
  } catch (error) {
    logger.error('Error sending email:', error.response ? error.response.body : error);
    res.status(500).json({ message: 'Error sending email', error: error.message });
  }
});

app.get('/', (req, res) => {
  res.send('Hello World from Backend!');
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Route to test database connectivity
app.get('/testdb', async (req, res) => {
  try {
    const newMessage = `Test message from ${new Date().toISOString()}`;
    const newTest = new Test({ message: newMessage });
    await newTest.save();
    logger.info(`Saved new test message: ${newMessage}`);

    const allTests = await Test.find({});
    res.status(200).json({ message: 'Database test successful', savedMessage: newMessage, allTests });
  } catch (error) {
    logger.error('Database test failed:', error);
    res.status(500).json({ message: 'Database test failed', error: error.message });
  }
});

module.exports = app;

app.listen(port, () => {
  logger.info(`Backend listening at http://localhost:${port}`);
});

// Error handling middleware
/* eslint-disable-next-line no-unused-vars */
app.use((err, req, res, _next) => {
  logger.error(err.message, err);
  res.status(500).send('Something broke!');
});
