import type { Metadata } from "next";
import { Unbounded, Figtree, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"), // canviar per la URL real a Vercel
  title: "Manel Reus · Automatización con IA para empresas",
  description:
    "Automatizo procesos empresariales con IA. Citas, rutas, documentos, atención al cliente. Resultados medibles desde el primer mes.",
  keywords: [
    "consultor IA",
    "automatización procesos",
    "inteligencia artificial pymes",
    "España",
  ],
  openGraph: {
    title: "Manel Reus · IA para empresas",
    description:
      "Automatizo los procesos de tu empresa con IA. Sin complicaciones.",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${unbounded.variable} ${figtree.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
