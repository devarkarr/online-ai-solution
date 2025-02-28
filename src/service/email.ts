import { ContactType } from "@/pages/contact";
import { Resend } from "resend";

const mail_key = import.meta.env.VITE_EMAIL_KEY;

const resend = new Resend(mail_key);

export default async function sendEmail(values: ContactType) {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: values.email,
      subject: "Ai-Solution Contact Form",
      html: `<ul>
      <li>${values.name}</li>
      <li>${values.phone}</li>
      <li>${values.email}</li>
      <li>${values.company_name}</li>
      <li>${values.country}</li>
      <li>${values.job_title}</li>
      <li>${values.job_detail}</li>
      </ul>`,
    });
    return {
      success: "Mail Send Successfully!",
    };
  } catch (error) {
    return {
      error: error,
    };
  }
}
