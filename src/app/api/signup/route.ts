import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email } = body;

    // validation
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    if (name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Name must be at least 2 characters' },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // send confirmation email to the user
    const { data, error } = await resend.emails.send({
      from: 'Institute for Algorithm Mining <noreply@algomining.org>',
      to: email,
      subject: 'Welcome to the Institute for Algorithm Mining',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Institute for Algorithm Mining</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #fafaf9;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #fafaf9;">
              <tr>
                <td align="center" style="padding: 40px 20px;">
                  <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                    <tr>
                      <td style="padding: 40px;">
                        <h1 style="margin: 0 0 20px 0; font-size: 24px; font-weight: 400; color: #1c1917; letter-spacing: -0.025em;">
                          Welcome, ${name}!
                        </h1>
                        <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #44403c;">
                          Thank you for your interest in the <strong>Institute for Algorithm Mining</strong>. We've received your signup and will reach out to you soon with more information about upcoming events, research opportunities, and ways to get involved.
                        </p>
                        <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #44403c;">
                          In the meantime, feel free to explore our website and follow us on our social channels for the latest updates.
                        </p>
                        <div style="margin: 30px 0; padding: 20px; background-color: #f5f5f4; border-radius: 6px; border-left: 3px solid #10b981;">
                          <p style="margin: 0; font-size: 14px; color: #57534e;">
                            <strong>Your signup details:</strong><br>
                            Name: ${name}<br>
                            Email: ${email}
                          </p>
                        </div>
                        <p style="margin: 0; font-size: 14px; color: #78716c;">
                          Best regards,<br>
                          The Institute for Algorithm Mining Team
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 20px 40px; border-top: 1px solid #e7e5e4; text-align: center;">
                        <p style="margin: 0; font-size: 12px; color: #a8a29e;">
                          This is an automated message. Please do not reply to this email.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Signup successful! Check your email for confirmation.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
