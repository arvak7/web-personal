"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const services = [
  {
    title: "Automatización de operaciones",
    body: "Rutas, citas, atención a clientes, gestión de incidencias. Tu equipo deja de gestionar manualmente y empieza a supervisar.",
    badge: "Empresas de servicios",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 6V12L16 14"/><circle cx="12" cy="12" r="10"/>
      </svg>
    ),
  },
  {
    title: "Asistente inteligente para documentos",
    body: "Busca, resume y extrae información clave de tus documentos en segundos. Sin perder tiempo en archivos y expedientes.",
    badge: "Despachos · Gestorías · Consultorias",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14,2 14,8 20,8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    title: "Integración de procesos con IA",
    body: "Conectamos tus herramientas actuales y añadimos inteligencia donde más falta hace. Sin migrar todo desde cero.",
    badge: "Cualquier sector",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="7" height="7" rx="1"/>
        <rect x="15" y="3" width="7" height="7" rx="1"/>
        <rect x="2" y="14" width="7" height="7" rx="1"/>
        <rect x="15" y="14" width="7" height="7" rx="1"/>
        <path d="M9 7h6M9 18h6M5.5 10v4M18.5 10v4"/>
      </svg>
    ),
  },
];

function ServiceCard({ title, body, badge, icon, index }: {
  title: string; body: string; badge: string; icon: React.ReactNode; index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.6, ease: EASE }}
      className="flex flex-col p-6 sm:p-8 rounded-lg border border-border bg-card hover:border-teal/30 transition-colors duration-200 group"
    >
      <div className="w-9 h-9 rounded-md bg-teal/10 text-teal flex items-center justify-center mb-5 group-hover:bg-teal/15 transition-colors duration-200">
        {icon}
      </div>
      <h3 className="font-display font-bold text-base text-foreground mb-3 leading-snug">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
        {body}
      </p>
      <Badge variant="teal" className="self-start text-[11px]">
        {badge}
      </Badge>
    </motion.div>
  );
}

export function Services() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });
  const footerRef = useRef(null);
  const footerInView = useInView(footerRef, { once: true, margin: "-40px" });

  return (
    <section id="servicios" className="py-20 sm:py-28 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="max-w-xl mb-12 sm:mb-16"
        >
          <p className="text-teal font-display font-semibold text-[11px] tracking-[0.2em] uppercase mb-4">
            Servicios
          </p>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.1] tracking-tight text-foreground">
            Qué puedo hacer por tu empresa
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-8">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>

        <motion.p
          ref={footerRef}
          initial={{ opacity: 0 }}
          animate={footerInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm text-muted-foreground text-center"
        >
          ¿No encaja exactamente?{" "}
          <a href="#contacto" className="text-teal hover:text-teal-light underline underline-offset-4 transition-colors">
            Cuéntame tu problema
          </a>{" "}
          — seguramente tiene solución.
        </motion.p>
      </div>
    </section>
  );
}
