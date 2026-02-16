import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { TrackingData } from '@/lib/tracked-fetch';

type ContactRequestBody = {
  service: string;
  name: string;
  phone: string;
  email: string;
  subject?: string;
  message?: string;
  trackingData: TrackingData;
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactRequestBody;
    const { name, email, phone, service, subject, message, trackingData } = body;

    console.log('Received contact form submission:', { name, email, phone, service, subject, message, trackingData });

    // Check for required fields
    if (!name || !email) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Service Inquiry</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #ffffff; }
            .header { background-color: #2563eb; color: #ffffff; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .header h2 { margin: 0; font-size: 24px; }
            .section { margin-bottom: 25px; padding: 15px; background-color: #f9fafb; border-radius: 6px; border-left: 4px solid #2563eb; }
            .section-title { font-weight: bold; font-size: 16px; color: #1f2937; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid #e5e7eb; padding-bottom: 5px; }
            .field { margin-bottom: 8px; font-size: 14px; }
            .label { font-weight: bold; color: #4b5563; width: 120px; display: inline-block; }
            .value { color: #111827; }
            .message-box { background-color: #ffffff; padding: 15px; border: 1px solid #e5e7eb; border-radius: 4px; white-space: pre-wrap; }
            .footer { margin-top: 30px; font-size: 12px; color: #9ca3af; text-align: center; border-top: 1px solid #e5e7eb; padding-top: 15px; }
            .tracking-info { font-size: 14px; color: #6b7280; font-family: monospace; background: #f3f4f6; padding: 10px; border-radius: 4px; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Service Inquiry</h2>
            </div>
            
            <div style="padding: 20px;">
              <div class="section">
                <div class="section-title">Client Information</div>
                <div class="field"><span class="label">Name:</span> <span class="value">${name}</span></div>
                <div class="field"><span class="label">Email:</span> <span class="value"><a href="mailto:${email}">${email}</a></span></div>
                <div class="field"><span class="label">Phone:</span> <span class="value">${phone || 'Not provided'}</span></div>
              </div>

              <div class="section">
                <div class="section-title">Inquiry Details</div>
                <div class="field"><span class="label">Service:</span> <span class="value">${service || 'General Inquiry'}</span></div>
                <div class="field"><span class="label">Subject:</span> <span class="value">${subject || 'N/A'}</span></div>
              </div>

              <div class="section">
                <div class="section-title">Message</div>
                <div class="message-box">${message || 'No message provided.'}</div>
              </div>

              ${
                trackingData
                  ? `
              <div class="section" style="border-left-color: #9ca3af;">
                <div class="section-title">Marketing Tracking</div>
                <div class="tracking-info">
                  ${trackingData.landing_url ? `<div><strong>Landing URL:</strong> ${trackingData.landing_url}</div>` : ''}
                  ${trackingData.referrer ? `<div><strong>Referrer:</strong> ${trackingData.referrer}</div>` : ''}
                  ${trackingData.utm_source ? `<div><strong>Source:</strong> ${trackingData.utm_source}</div>` : ''}
                  ${trackingData.utm_medium ? `<div><strong>Medium:</strong> ${trackingData.utm_medium}</div>` : ''}
                  ${trackingData.utm_campaign ? `<div><strong>Campaign:</strong> ${trackingData.utm_campaign}</div>` : ''}
                  ${trackingData.gclid ? `<div><strong>GCLID:</strong> ${trackingData.gclid}</div>` : ''}
                </div>
              </div>
              `
                  : ''
              }
              
              <div class="footer">
                <p>This email was sent from your website contact form.</p>
                <p>Date: ${new Date().toLocaleString()}</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const mailOptions = {
      from: process.env.SMTP_USER, // Sender address
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // Receiver address
      subject: subject || `New Service Inquiry: ${service || 'General Inquiry'}`,
      text: `
                Name: ${name}
                Email: ${email}
                Phone: ${phone || 'Not provided'}
                Service Interested In: ${service || 'Not specified'}
                Subject: ${subject || 'N/A'}
                
                Message:
                ${message || 'N/A'}

                ${
                  trackingData
                    ? `
                --- Marketing Tracking ---
                Source: ${trackingData.utm_source || 'N/A'}
                Medium: ${trackingData.utm_medium || 'N/A'}
                Campaign: ${trackingData.utm_campaign || 'N/A'}
                Landing URL: ${trackingData.landing_url || 'N/A'}
                `
                    : ''
                }
            `,
      html: htmlContent,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
