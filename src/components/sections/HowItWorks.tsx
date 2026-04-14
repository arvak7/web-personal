"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const steps = [
  {
    num: "01",
    title: "Diagnóstico gratuito",
    sub: "1 sesión · 45 min",
    body: "Analizamos juntos tu operativa actual. Identifico exactamente dónde la IA puede generar más impacto con menos fricción. Sin coste, sin compromiso.",
    highlight: true,
  },
  {
    num: "02",
    title: "Hoja de ruta con ROI proyectado",
    sub: "1 semana",
    body: "Te entrego un plan concreto: qué automatizar, en qué orden, cuánto cuesta y qué retorno esperar. Con cifras reales.",
  },
  {
    num: "03",
    title: "Implementación por fases",
    sub: "4–8 semanas",
    body: "Construyo e integro el sistema en tu operativa real. Trabajo sobre lo que ya tienes — sin tirar nada por la borda.",
  },
  {
    num: "04",
    title: "Acompañamiento mensual",
    sub: "En curso",
    body: "Mido el impacto, ajusto lo necesario y sigo contigo. El sistema mejora con el tiempo.",
  },
];

function Step({ num, title, sub, body, highlight, index, isLast }: {
  num: string; title: string; sub: string; body: string; highlight?: boolean; index: number; isLast: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: EASE }}
      className="relative flex gap-5"
    >
      {/* Number + connector */}
      <div className="flex flex-col items-center">
        <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center shrink-0 z-10
          ${highlight ? "border-teal bg-teal/10" : "border-border bg-background"}`}>
          <span className={`font-mono font-bold text-sm ${highlight ? "text-teal" : "text-muted-foreground"}`}>
            {num}
          </span>
        </div>
        {!isLast && <div className="w-px flex-1 mt-3 bg-border min-h-[28px]" />}
      </div>

      {/* Content */}
      <div className={`pb-8 pt-1 flex-1 min-w-0 ${isLast ? "pb-0" : ""}`}>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <h3 className="font-display font-bold text-sm sm:text-base text-foreground leading-snug">
            {title}
          </h3>
          <span className="text-[11px] text-teal font-mono bg-teal/10 px-2 py-0.5 rounded-full shrink-0">
            {sub}
          </span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
          {body}
        </p>
      </div>
    </motion.div>
  );
}

export function HowItWorks() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section id="como-funciona" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
            className="lg:sticky lg:top-24"
          >
            <p className="text-teal font-display font-semibold text-[11px] tracking-[0.2em] uppercase mb-4">
              Metodología
            </p>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.1] tracking-tight text-foreground mb-6">
              Un proceso claro, sin sorpresas
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-sm mb-8">
              Cuatro pasos para pasar de &ldquo;esto podría funcionar&rdquo; a un sistema
              que genera ahorro real semana a semana.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 text-teal text-sm font-display font-semibold hover:text-teal-light transition-colors group"
            >
              Empezar con el diagnóstico gratuito
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </motion.div>

          <div className="pt-0 lg:pt-2">
            {steps.map((step, i) => (
              <Step key={step.num} {...step} index={i} isLast={i === steps.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
