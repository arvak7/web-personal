"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/config";
import { clarityEvent } from "@/lib/clarity";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    problem: "",
  });

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", problem: "" });
        clarityEvent("form_contact_success");
      } else {
        setStatus("error");
        clarityEvent("form_contact_error");
      }
    } catch {
      setStatus("error");
      clarityEvent("form_contact_error");
    }
  };

  const waUrl = whatsappUrl();

  const inputClass =
    "w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal transition-colors";

  return (
    <section id="contacto" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: title + context */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-teal font-display font-semibold text-xs tracking-widest uppercase mb-4">
              Contacto
            </p>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-foreground mb-6">
              Hablemos
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-sm">
              Primera sesión gratuita. Sin compromiso. Cuéntame qué hace tu
              empresa y dónde pierdes más tiempo.
            </p>

            {/* WhatsApp direct */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => clarityEvent("cta_whatsapp")}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-border bg-card hover:border-teal/40 hover:bg-secondary/60 transition-colors group"
            >
              <svg
                className="w-5 h-5 text-teal"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              <span className="text-sm font-medium text-foreground group-hover:text-teal transition-colors">
                Escríbeme por WhatsApp
              </span>
              <svg
                className="w-4 h-4 text-muted-foreground group-hover:text-teal transition-colors ml-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>

            <p className="mt-4 text-xs text-muted-foreground">
              o usa el formulario →
            </p>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.15,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {status === "success" ? (
              <div className="rounded-lg border border-teal/30 bg-teal/5 p-8 sm:p-10 flex flex-col items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-teal/20 text-teal flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-display font-bold text-lg text-foreground">
                  Mensaje recibido.
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Te respondo en menos de 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-muted-foreground mb-1.5">
                      Nombre <span className="text-teal">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-muted-foreground mb-1.5">
                      Email <span className="text-teal">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@empresa.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs font-medium text-muted-foreground mb-1.5">
                    Empresa{" "}
                    <span className="text-muted-foreground/50">(opcional)</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Nombre de tu empresa"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="problem" className="block text-xs font-medium text-muted-foreground mb-1.5">
                    ¿Cuál es el principal problema que quieres resolver?{" "}
                    <span className="text-teal">*</span>
                  </label>
                  <textarea
                    id="problem"
                    name="problem"
                    required
                    rows={4}
                    value={form.problem}
                    onChange={handleChange}
                    placeholder="Describe brevemente el proceso que más tiempo os consume..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-destructive">
                    Ha habido un error. Intenta de nuevo o escríbeme por WhatsApp.
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "loading"}
                  className="w-full bg-teal text-white hover:bg-teal-dark font-display font-bold text-sm tracking-wide disabled:opacity-60"
                >
                  {status === "loading"
                    ? "Enviando..."
                    : "Solicitar auditoría gratuita"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Sin spam. Solo la respuesta a tu mensaje.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
