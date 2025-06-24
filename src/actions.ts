"use server";
import nodemailer from "nodemailer";

export async function sendMail({ sender, subject, text }: { sender: string; subject: string; text?: string; }) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "jayendraawasthi0609@gmail.com",
        subject: `Portfolio Contact by : ${sender}, Subject: ${subject}`,
        text,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        return { success: true, info };
    } catch (error) {
        return { success: false, error };
    }
}