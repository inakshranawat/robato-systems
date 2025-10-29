import SibApiV3Sdk from 'sib-api-v3-sdk';
import dotenv from 'dotenv';
dotenv.config();

const defaultClient = SibApiV3Sdk.ApiClient.instance;
defaultClient.authentications['api-key'].apiKey = process.env.BREVO_API_KEY;

const tranEmailApi = new SibApiV3Sdk.TransactionalEmailsApi();

export const sendContactEmail = async (data) => {
  const { firstName, lastName, email, phone, message } = data;

  // Admin notification
  const adminEmail = new SibApiV3Sdk.SendSmtpEmail();
  adminEmail.sender = { email: process.env.SENDER_EMAIL, name: 'Robato Systems' };
  adminEmail.to = [{ email: process.env.ADMIN_EMAIL }];
  adminEmail.subject = 'New Contact Form Submission';
  adminEmail.htmlContent = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  try { await tranEmailApi.sendTransacEmail(adminEmail); console.log('Admin contact email sent'); }
  catch(err){ console.error('Error sending contact email to admin:', err); }

  // User welcome email
  const userEmail = new SibApiV3Sdk.SendSmtpEmail();
  userEmail.sender = { email: process.env.SENDER_EMAIL, name: 'Robato Systems' };
  userEmail.to = [{ email }];
  userEmail.subject = 'Thank you for contacting Robato Systems!';
  userEmail.htmlContent = `
    <h2>Hello ${firstName},</h2>
    <p>Thank you for reaching out to us. We will get back to you within 24 hours.</p>
    <p>Best regards,<br/>Robato Systems Team</p>
  `;

  try { await tranEmailApi.sendTransacEmail(userEmail); console.log('Welcome email sent to user'); }
  catch(err){ console.error('Error sending welcome email to user:', err); }
};

export const sendTrialEmail = async (data) => {
  const { firstName, lastName, email, phone, company, country, jobTitle, message } = data;

  // Admin notification
  const adminEmail = new SibApiV3Sdk.SendSmtpEmail();
  adminEmail.sender = { email: process.env.SENDER_EMAIL, name: 'Robato Systems' };
  adminEmail.to = [{ email: process.env.ADMIN_EMAIL }];
  adminEmail.subject = 'New Free Trial Request';
  adminEmail.htmlContent = `
    <h2>New Free Trial Submission</h2>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Company:</strong> ${company}</p>
    <p><strong>Country:</strong> ${country}</p>
    <p><strong>Job Title:</strong> ${jobTitle}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  try { await tranEmailApi.sendTransacEmail(adminEmail); console.log('Admin trial email sent'); }
  catch(err){ console.error('Error sending trial email to admin:', err); }

  // User welcome email
  const userEmail = new SibApiV3Sdk.SendSmtpEmail();
  userEmail.sender = { email: process.env.SENDER_EMAIL, name: 'Robato Systems' };
  userEmail.to = [{ email }];
  userEmail.subject = 'Thank you for requesting a free trial!';
  userEmail.htmlContent = `
    <h2>Hello ${firstName},</h2>
    <p>Thank you for requesting a free trial. Our team will contact you shortly with all the details.</p>
    <p>Best regards,<br/>Robato Systems Team</p>
  `;

  try { await tranEmailApi.sendTransacEmail(userEmail); console.log('Welcome email sent to trial user'); }
  catch(err){ console.error('Error sending trial welcome email:', err); }
};
