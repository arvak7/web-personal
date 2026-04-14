"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function CaseStudies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <p className="text-teal font-display font-semibold text-[11px] tracking-[0.2em] uppercase mb-4">
            Casos de éxito
          </p>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.1] tracking-tight text-foreground mb-12 sm:mb-16 max-w-xl">
            Resultados reales, con números reales
          </h2>

          <div className="max-w-2xl rounded-lg border border-border/60 bg-card p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-display font-semibold tracking-widest uppercase text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-teal/50 animate-pulse" />
                Próximamente
              </span>
            </div>
            <p className="text-foreground text-base sm:text-lg leading-relaxed mb-5 max-w-lg">
              Ahora mismo estoy construyendo los primeros proyectos piloto. En
              unos meses podré mostrarte resultados reales con datos verificables —
              no estimaciones, sino impacto medido semana a semana.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-lg mb-8">
              Si quieres ser de los primeros en ver esos resultados (y
              potencialmente protagonizar uno), escríbeme.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 text-teal text-sm font-display font-semibold hover:text-teal-light transition-colors group"
            >
              Escríbeme ahora
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
