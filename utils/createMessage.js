export function createMessage(name, email, message) {
  return `<table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f5;padding:20px;font-family:'Segoe UI',sans-serif;">
  <tr>
    <td align="center">
      <table cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;background-color:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.1);">
        <tr>
          <td style="background-color:#4A90E2;padding:20px;color:white;text-align:center;">
            <h2 style="margin:0;">📩 New Message Received</h2>
          </td>
        </tr>
        <tr>
          <td style="padding:20px;">
            <p style="margin:0 0 10px;font-size:16px;color:#333;"><strong>Sender Name:</strong> ${name}</p>
            <p style="margin:0 0 10px;font-size:16px;color:#333;"><strong>Sender Email:</strong> ${email}</p>
            <p style="margin:20px 0 10px;font-size:16px;color:#333;"><strong>Message:</strong></p>
            <div style="background:#f0f4f8;padding:15px;border-radius:8px;color:#333;font-size:15px;line-height:1.6;">
              ${message}
            </div>
          </td>
        </tr>
        <tr>
          <td style="text-align:center;padding:15px;background-color:#f7f7f7;color:#999;font-size:13px;">
            This message was sent via your website contact form.
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
`;
}
