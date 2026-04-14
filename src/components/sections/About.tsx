"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SITE_CONFIG } from "@/lib/config";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const credentials = [
  "Ingeniería Técnica Informática",
  "Máster en Peritaje Informático (2025)",
  "Proyectos en producción para empresas reales",
  "Especialista en automatización con IA",
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="sobre-mi" className="py-20 sm:py-28 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Text left */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <p className="text-teal font-display font-semibold text-[11px] tracking-[0.2em] uppercase mb-4">
              Sobre mí
            </p>
            <h2 className="font-display font-black text-3xl sm:text-4xl leading-[1.1] tracking-tight text-foreground mb-8">
              Con quién trabajas
            </h2>

            <p className="text-base text-foreground leading-relaxed mb-4">
              Soy{" "}
              <strong className="font-semibold">{SITE_CONFIG.name}</strong>,
              ingeniero técnico informático y perito informático judicial.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
              Llevo años construyendo sistemas de software complejos. Lo que me
              diferencia no es solo saber programar — es entender cómo funcionan
              las empresas y construir soluciones que realmente se usan.
            </p>
            <p className="text-base font-semibold text-foreground leading-relaxed mb-8">
              No vendo tecnología. Resuelvo problemas de negocio.
            </p>

            <div className="pt-6 border-t border-border">
              <p className="text-[11px] text-teal font-display font-semibold tracking-[0.2em] uppercase mb-2">
                Área de trabajo
              </p>
              <p className="text-sm text-muted-foreground">España · Remoto o presencial según el proyecto</p>
            </div>
          </motion.div>

          {/* Credentials right */}
          <div className="space-y-3 lg:pt-14">
            {credentials.map((cred, i) => (
              <motion.div
                key={cred}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.5, ease: EASE }}
                className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card"
              >
                <span className="mt-0.5 w-5 h-5 rounded-full bg-teal/15 text-teal flex items-center justify-center shrink-0">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-sm text-foreground">{cred}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
