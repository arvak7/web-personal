"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function fadeIn(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.65, ease: EASE },
  };
}

export function Hero() {
  return (
    <section className="relative flex items-center pt-16 overflow-hidden min-h-[90vh] sm:min-h-[85vh]">
      {/* Subtle teal glow */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px]"
        style={{
          background:
            "radial-gradient(ellipse 55% 55% at 50% 50%, rgba(20,184,166,0.07), transparent)",
        }}
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            {...fadeIn(0)}
            className="text-teal font-display font-semibold text-[11px] tracking-[0.2em] uppercase mb-5"
          >
            Consultoría IA · España
          </motion.p>

          {/* Headline */}
          <motion.h1
            {...fadeIn(0.1)}
            className="font-display font-black leading-[1.08] tracking-tight text-foreground mb-5
              text-[2.2rem] sm:text-5xl md:text-6xl"
          >
            Automatizo los procesos de tu empresa con IA.{" "}
            <span className="text-teal">Sin que necesites equipo técnico.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeIn(0.2)}
            className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl mb-8"
          >
            Analizo dónde pierde tiempo y dinero tu empresa y construyo el
            sistema que lo resuelve. Con resultados medibles desde el primer mes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeIn(0.3)}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-10"
          >
            <Button
              asChild
              size="lg"
              className="bg-teal text-white hover:bg-teal-dark font-display font-bold text-sm tracking-wide"
            >
              <a href="#contacto">Solicita una auditoría gratuita</a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="text-muted-foreground hover:text-foreground font-display font-semibold text-sm group"
            >
              <a href="#como-funciona" className="flex items-center justify-center gap-2">
                Ver cómo funciona
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </Button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            {...fadeIn(0.4)}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-4 border-t border-border/50"
          >
            {[
              "Especialista en empresas de servicios",
              "Perito informático",
              "Proyectos en producción",
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <span className="w-1 h-1 rounded-full bg-teal inline-block shrink-0" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        {...fadeIn(0.8)}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground/50"
      >
        <span className="text-[10px] tracking-widest uppercase font-display">Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
