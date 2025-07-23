const nodemailer = require('nodemailer');
require('dotenv').config();

const mailsender = async (email, title, body) => {
    try {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
            },
        });
        let info = await transporter.sendMail({
            from: `ONETAP <${process.env.EMAIL_USERNAME}>`,
            to: email,
            subject: title,
            html: body,
        });

        console.log("Email sent successfully:", info.response);
        return info;
    } catch (error) {
        console.error("Error sending email:", error.message);
        throw error;
    }
}

module.exports = mailsender;