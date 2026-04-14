"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const problems = [
  {
    num: "01",
    title: "Tardes enteras gestionando lo que debería gestionarse solo",
    body: "Tu equipo invierte horas en tareas repetitivas — citas, rutas, emails, reportes — que no generan valor real para el negocio.",
  },
  {
    num: "02",
    title: "Herramientas que prometen mucho y no encajan en tu operativa",
    body: "ChatGPT, Make, Zapier. Muchas empresas lo prueban. Pocas consiguen que funcione en su día a día real.",
  },
  {
    num: "03",
    title: "Sin saber por dónde empezar ni qué ROI esperar",
    body: "La IA no es un botón. Necesitas saber qué proceso automatizar primero y qué retorno puedes esperar.",
  },
];

function ProblemCard({ num, title, body, index }: { num: string; title: string; body: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: EASE }}
      className="relative p-6 sm:p-8 rounded-lg border border-border bg-card hover:bg-card/80 transition-colors duration-200 group"
    >
      <span className="font-mono text-[3.5rem] font-black text-teal/15 group-hover:text-teal/25 transition-colors duration-200 leading-none block mb-4 select-none">
        {num}
      </span>
      <h3 className="font-display font-bold text-sm sm:text-base text-foreground leading-snug mb-3">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {body}
      </p>
    </motion.div>
  );
}

export function Problem() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="max-w-2xl mb-12 sm:mb-16"
        >
          <p className="text-teal font-display font-semibold text-[11px] tracking-[0.2em] uppercase mb-4">
            El problema
          </p>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.1] tracking-tight text-foreground">
            Tu empresa ya sabe que la IA puede ayudar.{" "}
            <span className="text-muted-foreground font-bold">
              El problema es cómo implementarla.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {problems.map((p, i) => (
            <ProblemCard key={p.num} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
