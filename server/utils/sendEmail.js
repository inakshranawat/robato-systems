// sendEmail.js
import SibApiV3Sdk from 'sib-api-v3-sdk';
import dotenv from 'dotenv';
dotenv.config();

// Initialize Brevo (Sendinblue) client
const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.BREVO_API_KEY;

const tranEmailApi = new SibApiV3Sdk.TransactionalEmailsApi();

/**
 * 📧 Base email template – professional, clean, and mobile-friendly.
 */
const baseTemplate = (title, body) => `
  <div style="background-color:#f4f6f8; padding:40px 0; font-family:'Segoe UI', Arial, sans-serif;">
    <div style="max-width:600px; margin:auto; background-color:#fff; border-radius:12px; overflow:hidden; box-shadow:0 6px 16px rgba(0,0,0,0.1);">
      <!-- Header -->
      <div style="background-color:#3c0366; text-align:center; padding:25px 15px;">
        <img src="${process.env.BASE_URL || ''}/web-logo.png" alt="Robato Systems" style="max-height:50px; margin-bottom:10px;" />
        <h1 style="color:#fff; font-size:22px; margin:0;">Robato Systems</h1>
      </div>

      <!-- Body -->
      <div style="padding:35px 25px;">
        <h2 style="font-size:22px; color:#111827; margin-bottom:15px;">${title}</h2>
        <div style="font-size:16px; line-height:1.6; color:#4b5563;">
          ${body}
        </div>
      </div>

      <!-- Footer -->
      <div style="background-color:#f9fafb; text-align:center; padding:15px;">
        <p style="color:#6b7280; font-size:13px; margin:5px 0;">
          &copy; ${new Date().getFullYear()} Robato Systems. All rights reserved.
        </p>
        <p style="margin:0;">
          <a href="${process.env.BASE_URL || '#'}" style="color:#0066ff; text-decoration:none; font-weight:500;">Visit Website</a>
        </p>
      </div>
    </div>
  </div>
`;

/**
 * 📩 Send Contact Form Email
 */
export const sendContactEmail = async (data) => {
  const { firstName, lastName, email, phone, message } = data;

  // Admin email
  const adminBody = `
    <p>You have received a new contact form submission:</p>
    <table style="width:100%; border-collapse:collapse; margin-top:10px; font-size:15px;">
      <tr><td><strong>Name:</strong></td><td>${firstName} ${lastName}</td></tr>
      <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
      <tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>
      <tr><td><strong>Message:</strong></td><td>${message}</td></tr>
    </table>
  `;

  const adminEmail = {
    sender: { email: process.env.SENDER_EMAIL, name: 'Robato Systems' },
    to: [{ email: process.env.ADMIN_EMAIL }],
    cc: process.env.CC_EMAIL ? [{ email: process.env.CC_EMAIL }] : [],
    bcc: process.env.BCC_EMAIL ? [{ email: process.env.BCC_EMAIL }] : [],
    subject: '📬 New Contact Form Submission',
    htmlContent: baseTemplate('New Contact Form Submission', adminBody),
  };

  try {
    await tranEmailApi.sendTransacEmail(adminEmail);
    console.log('✅ Admin contact email sent');
  } catch (err) {
    console.error('❌ Error sending admin contact email:', err.message);
  }

  // User email
  const userBody = `
    <p>Hi ${firstName},</p>
    <p>Thank you for reaching out to <strong>Robato Systems</strong>! 🎉</p>
    <p>We've received your message and will respond within 24 hours.</p>

    <div style="text-align:center; margin-top:25px;">
      <a href="${process.env.BASE_URL}" style="display:inline-block; background:#3c0366; color:#fff; padding:12px 28px; border-radius:8px; text-decoration:none; font-weight:600;">
        Explore Our Services
      </a>
    </div>

    <p style="margin-top:25px;">Best regards,<br/><strong>The Robato Systems Team</strong></p>
  `;

  const userEmail = {
    sender: { email: process.env.SENDER_EMAIL, name: 'Robato Systems' },
    to: [{ email }],
    subject: '🤝 Thanks for Contacting Robato Systems!',
    htmlContent: baseTemplate("We've received your message!", userBody),
  };

  try {
    await tranEmailApi.sendTransacEmail(userEmail);
    console.log('✅ User thank-you email sent');
  } catch (err) {
    console.error('❌ Error sending user contact email:', err.message);
  }
};

/**
 * 🚀 Send Free Trial Email
 */
export const sendTrialEmail = async (data) => {
  const { firstName, lastName, email, phone, company, country, jobTitle, message } = data;

  const adminBody = `
    <p>A new <strong>Free Trial Request</strong> has been received:</p>
    <table style="width:100%; border-collapse:collapse; margin-top:10px; font-size:15px;">
      <tr><td><strong>Name:</strong></td><td>${firstName} ${lastName}</td></tr>
      <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
      <tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>
      <tr><td><strong>Company:</strong></td><td>${company}</td></tr>
      <tr><td><strong>Country:</strong></td><td>${country}</td></tr>
      <tr><td><strong>Job Title:</strong></td><td>${jobTitle}</td></tr>
      <tr><td><strong>Message:</strong></td><td>${message}</td></tr>
    </table>
  `;

  const adminEmail = {
    sender: { email: process.env.SENDER_EMAIL, name: 'Robato Systems' },
    to: [{ email: process.env.ADMIN_EMAIL }],
    cc: process.env.CC_EMAIL ? [{ email: process.env.CC_EMAIL }] : [],
    bcc: process.env.BCC_EMAIL ? [{ email: process.env.BCC_EMAIL }] : [],
    subject: '🚀 New Free Trial Request',
    htmlContent: baseTemplate('New Free Trial Request', adminBody),
  };

  try {
    await tranEmailApi.sendTransacEmail(adminEmail);
    console.log('✅ Admin trial email sent');
  } catch (err) {
    console.error('❌ Error sending admin trial email:', err.message);
  }

  // User trial confirmation
  const userBody = `
    <p>Hi ${firstName},</p>
    <p>Thank you for requesting a <strong>Free Trial</strong> with <strong>Robato Systems</strong>! 🎉</p>
    <p>Our team will reach out soon to get you started.</p>

    <div style="text-align:center; margin-top:25px;">
      <a href="${process.env.BASE_URL}" style="display:inline-block; background:#3c0366; color:#fff; padding:12px 28px; border-radius:8px; text-decoration:none; font-weight:600;">
        Explore Our Services
      </a>
    </div>

    <p style="margin-top:25px;">Warm regards,<br/><strong>The Robato Systems Team</strong></p>
  `;

  const userEmail = {
    sender: { email: process.env.SENDER_EMAIL, name: 'Robato Systems' },
    to: [{ email }],
    subject: '🎉 Your Free Trial Request Has Been Received!',
    htmlContent: baseTemplate('Thanks for Requesting a Free Trial!', userBody),
  };

  try {
    await tranEmailApi.sendTransacEmail(userEmail);
    console.log('✅ Trial confirmation email sent to user');
  } catch (err) {
    console.error('❌ Error sending trial confirmation email:', err.message);
  }
};
