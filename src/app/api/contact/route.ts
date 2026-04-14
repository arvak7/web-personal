import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "tu@email.com";

  try {
    const { name, email, company, problem } = await req.json();

    if (!name || !email || !problem) {
      return NextResponse.json(
        { error: "Campos requeridos: nombre, email y problema." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Formulario web <onboarding@resend.dev>",
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `Nueva auditoría de ${name}${company ? ` (${company})` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #14B8A6;">Nueva solicitud de auditoría</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #888; font-size: 13px; width: 100px;">Nombre</td>
              <td style="padding: 8px 0; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888; font-size: 13px;">Email</td>
              <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${
              company
                ? `<tr>
              <td style="padding: 8px 0; color: #888; font-size: 13px;">Empresa</td>
              <td style="padding: 8px 0; font-size: 14px;">${company}</td>
            </tr>`
                : ""
            }
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 8px;">
            <p style="color: #888; font-size: 12px; margin: 0 0 8px;">Problema a resolver</p>
            <p style="font-size: 14px; margin: 0; white-space: pre-wrap;">${problem}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Error:", err);
    return NextResponse.json(
      { error: "Error interno. Intenta de nuevo." },
      { status: 500 }
    );
  }
}
