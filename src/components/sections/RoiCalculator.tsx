"use client";

import { useState, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const WORKING_DAYS = 22;

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-foreground">{label}</label>
        <span className="font-mono text-base font-bold text-teal">
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 rounded-full appearance-none cursor-pointer bg-border accent-teal"
        style={{
          background: `linear-gradient(to right, #14B8A6 0%, #14B8A6 ${((value - min) / (max - min)) * 100}%, hsl(var(--border)) ${((value - min) / (max - min)) * 100}%, hsl(var(--border)) 100%)`,
        }}
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  );
}

function MetricBlock({
  label,
  value,
  unit,
  large,
}: {
  label: string;
  value: string;
  unit: string;
  large?: boolean;
}) {
  return (
    <div className={`${large ? "col-span-2 sm:col-span-1" : ""}`}>
      <p className="text-xs text-muted-foreground mb-1">{label}</p>
      <p
        className={`font-mono font-bold text-foreground leading-none ${large ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"}`}
      >
        {value}
        <span className="text-teal ml-1 text-base sm:text-lg">{unit}</span>
      </p>
    </div>
  );
}

export function RoiCalculator() {
  const [workers, setWorkers] = useState(50);
  const [appointments, setAppointments] = useState(40);
  const [hourCost, setHourCost] = useState(14);

  const results = useMemo(() => {
    const routeSavings =
      workers * (20 / 60) * WORKING_DAYS * hourCost;
    const appointmentSavings =
      appointments * (3 / 60) * WORKING_DAYS * hourCost;
    const total = routeSavings + appointmentSavings;
    const roi = Math.round((total / 1000) * 100);
    return { routeSavings, appointmentSavings, total, roi };
  }, [workers, appointments, hourCost]);

  const fmt = (n: number) =>
    new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(n);

  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });
  const contentRef = useRef(null);
  const contentInView = useInView(contentRef, { once: true, margin: "-60px" });

  return (
    <section id="calculadora" className="py-20 sm:py-28 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl mb-12 sm:mb-16"
        >
          <p className="text-teal font-display font-semibold text-xs tracking-widest uppercase mb-4">
            Calculadora
          </p>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-foreground">
            Calcula el ahorro de tu empresa
          </h2>
        </motion.div>

        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 32 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
        >
          {/* Inputs */}
          <div className="rounded-lg border border-border bg-card p-6 sm:p-8 space-y-8">
            <Slider
              label="¿Cuántos trabajadores de campo?"
              value={workers}
              min={10}
              max={500}
              step={5}
              onChange={setWorkers}
              format={(v) => `${v} pers.`}
            />
            <Slider
              label="¿Cuántas citas/reservas gestionáis al día?"
              value={appointments}
              min={10}
              max={200}
              step={5}
              onChange={setAppointments}
              format={(v) => `${v} citas`}
            />
            <Slider
              label="Coste laboral medio por hora"
              value={hourCost}
              min={8}
              max={25}
              step={0.5}
              onChange={setHourCost}
              format={(v) => `${v}€/h`}
            />
          </div>

          {/* Outputs */}
          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
              <p className="text-xs font-display font-semibold text-teal tracking-widest uppercase mb-6">
                Ahorro mensual estimado
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <MetricBlock
                  label="En optimización de rutas"
                  value={fmt(results.routeSavings)}
                  unit="/mes"
                />
                <MetricBlock
                  label="En gestión de citas"
                  value={fmt(results.appointmentSavings)}
                  unit="/mes"
                />
              </div>
              <div className="pt-6 border-t border-border">
                <p className="text-xs font-display font-semibold text-teal tracking-widest uppercase mb-3">
                  Total mensual
                </p>
                <p className="font-mono font-black text-4xl sm:text-5xl text-foreground leading-none mb-1">
                  {fmt(results.total)}
                  <span className="text-teal text-xl ml-1">/mes</span>
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  ROI del sistema:{" "}
                  <span className="text-teal font-mono font-bold text-sm">
                    {results.roi}%
                  </span>
                </p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground px-1">
              Estos son datos conservadores. En proyectos reales el ahorro suele ser mayor.
            </p>

            <Button
              asChild
              size="lg"
              className="w-full bg-teal text-white hover:bg-teal-dark font-display font-bold text-sm tracking-wide"
            >
              <a href="#contacto">
                Quiero ver mi análisis personalizado →
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
