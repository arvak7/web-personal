export const SITE_CONFIG = {
  name: "Manel Reus",
  title: "Manel Reus · IA para empresas",
  email: "manel.reus@outlook.es",
  whatsapp: "+34699714302",
  linkedinUrl: "https://linkedin.com/in/manelreus",
  githubUrl: "https://github.com/manelreus",
  whatsappMessage:
    "Hola, me interesa la auditoría gratuita de automatización.",
} as const;

export function whatsappUrl(): string {
  const phone = SITE_CONFIG.whatsapp.replace(/\D/g, "");
  const text = encodeURIComponent(SITE_CONFIG.whatsappMessage);
  return `https://web.whatsapp.com/send?phone=${phone}&text=${text}`;
}
