export default async function sendFormEmail({ formData, formType }) {
  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

  if (!BREVO_API_KEY) throw new Error("Brevo API key is missing");
  if (!ADMIN_EMAIL) throw new Error("Admin email is missing");

  const themeColor = "#3c0366";
  const companyName = "Robato Systems";

  let userSubject = "";
  let adminSubject = "";
  let htmlWelcome = "";
  let htmlAdmin = "";

  if (formType === "contact") {
    userSubject = "Thank you for contacting us";
    adminSubject = `New Contact Form Submission: ${formData.firstName} ${formData.lastName}`;

    htmlWelcome = `
      <div style="font-family: 'Helvetica', Arial, sans-serif; color:#333; background:#f7f7f7; padding:20px;">
        <div style="max-width:600px; margin:auto; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.05);">
          <div style="background:${themeColor}; color:#fff; padding:20px; text-align:center;">
            <h1 style="margin:0; font-size:28px;">${companyName}</h1>
          </div>
          <div style="padding:25px; line-height:1.6; font-size:16px;">
            <p>Hi ${formData.firstName},</p>
            <p>Thank you for reaching out to <strong>${companyName}</strong> via our Contact form. We have received your message and will get back to you as soon as possible.</p>
            <p>In the meantime, you can explore our website for more information.</p>
            <div style="text-align:center; margin:30px 0;">
              <a href=${process.env.NEXT_PUBLIC_BASE_URL} style="background:${themeColor}; color:#fff; text-decoration:none; padding:12px 25px; border-radius:6px; font-weight:bold; display:inline-block;">Visit Our Website</a>
            </div>
            <p style="color:#888; font-size:14px;">Best regards,<br/>${companyName} Team</p>
          </div>
        </div>
      </div>`;

    htmlAdmin = `
      <div style="font-family: 'Helvetica', Arial, sans-serif; color:#333; background:#f7f7f7; padding:20px;">
        <div style="max-width:600px; margin:auto; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.05);">
          <div style="background:${themeColor}; color:#fff; padding:20px; text-align:center;">
            <h1 style="margin:0; font-size:28px;">${companyName}</h1>
          </div>
          <div style="padding:25px; line-height:1.6; font-size:16px;">
            <h2 style="color:${themeColor}; border-bottom:2px solid ${themeColor}; padding-bottom:5px;">New Contact Form Submission</h2>
            <ul style="list-style:none; padding:0; margin-top:15px;">
              <li style="margin-bottom:8px;"><strong>First Name:</strong> ${formData.firstName}</li>
              <li style="margin-bottom:8px;"><strong>Last Name:</strong> ${formData.lastName}</li>
              <li style="margin-bottom:8px;"><strong>Email:</strong> ${formData.email}</li>
              <li style="margin-bottom:8px;"><strong>Phone:</strong> ${formData.phone}</li>
              <li style="margin-bottom:8px;"><strong>Company:</strong> ${formData.company}</li>
              <li style="margin-bottom:8px;"><strong>Job Title:</strong> ${formData.jobTitle}</li>
              <li style="margin-top:12px; padding:10px; background:#f0f0f0; border-radius:6px;"><strong>Message:</strong><br/>${formData.message}</li>
            </ul>
          </div>
        </div>
      </div>`;
  } else if (formType === "trial") {
    userSubject = "Thank you for booking a demo";
    adminSubject = `New Trial Form Submission: ${formData.firstName} ${formData.lastName}`;

    htmlWelcome = `
      <div style="font-family: 'Helvetica', Arial, sans-serif; color:#333; background:#f7f7f7; padding:20px;">
        <div style="max-width:600px; margin:auto; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.05);">
          <div style="background:${themeColor}; color:#fff; padding:20px; text-align:center;">
            <h1 style="margin:0; font-size:28px;">${companyName}</h1>
          </div>
          <div style="padding:25px; line-height:1.6; font-size:16px;">
            <p>Hi ${formData.firstName},</p>
            <p>Thank you for booking a demo with <strong>${companyName}</strong>. Our team will reach out to schedule your demo session shortly.</p>
            <p>Meanwhile, you can visit our website for more information.</p>
            <div style="text-align:center; margin:30px 0;">
              <a href=${process.env.NEXT_PUBLIC_BASE_URL} style="background:${themeColor}; color:#fff; text-decoration:none; padding:12px 25px; border-radius:6px; font-weight:bold; display:inline-block;">Visit Our Website</a>
            </div>
            <p style="color:#888; font-size:14px;">Best regards,<br/>${companyName} Team</p>
          </div>
        </div>
      </div>`;

    htmlAdmin = `
      <div style="font-family: 'Helvetica', Arial, sans-serif; color:#333; background:#f7f7f7; padding:20px;">
        <div style="max-width:600px; margin:auto; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.05);">
          <div style="background:${themeColor}; color:#fff; padding:20px; text-align:center;">
            <h1 style="margin:0; font-size:28px;">${companyName}</h1>
          </div>
          <div style="padding:25px; line-height:1.6; font-size:16px;">
            <h2 style="color:${themeColor}; border-bottom:2px solid ${themeColor}; padding-bottom:5px;">New Trial Form Submission</h2>
            <ul style="list-style:none; padding:0; margin-top:15px;">
              <li style="margin-bottom:8px;"><strong>First Name:</strong> ${formData.firstName}</li>
              <li style="margin-bottom:8px;"><strong>Last Name:</strong> ${formData.lastName}</li>
              <li style="margin-bottom:8px;"><strong>Email:</strong> ${formData.email}</li>
              <li style="margin-bottom:8px;"><strong>Phone:</strong> ${formData.phone}</li>
              <li style="margin-bottom:8px;"><strong>Company:</strong> ${formData.company}</li>
              <li style="margin-bottom:8px;"><strong>Job Title:</strong> ${formData.jobTitle}</li>
              <li style="margin-bottom:8px;"><strong>Country:</strong> ${formData.country || "N/A"}</li>
              <li style="margin-top:12px; padding:10px; background:#f0f0f0; border-radius:6px;"><strong>Message:</strong><br/>${formData.message}</li>
            </ul>
          </div>
        </div>
      </div>`;
  } else {
    throw new Error("Invalid form type");
  }

  const sendEmail = async (to, subject, html, fromEmail, fromName) => {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY
      },
      body: JSON.stringify({
        sender: { email: fromEmail, name: fromName },
        to: [{ email: to }],
        subject,
        htmlContent: html
      })
    });

    const json = await res.json();
    if (!res.ok) {
      console.error("Brevo email error:", json);
      throw new Error(`Email sending failed: ${JSON.stringify(json)}`);
    }
  };

  try {
    await sendEmail(formData.email, userSubject, htmlWelcome, ADMIN_EMAIL, companyName);
    await sendEmail(ADMIN_EMAIL, adminSubject, htmlAdmin, ADMIN_EMAIL, companyName);
  } catch (err) {
    console.error("Error sending form emails:", err);
    throw err;
  }
}
