# Roadmap · web-personal (manelreus.com)

## Estat actual

Web de consultoria/freelance d'automatització amb IA per a empreses. Desplegada a Vercel. Disseny dark/light mode amb Next.js + Tailwind.

---

## Seccions actuals (en producció)

| Secció | Estat | Notes |
|---|---|---|
| Navbar | OK | Logo MR pendent (problema colors dark mode) |
| Hero | OK | CTA principal |
| Problem | OK | |
| Services | OK | |
| HowItWorks | OK | |
| RoiCalculator | OK | |
| About | OK | |
| Contact | OK | Formulari + WhatsApp |
| Footer | OK | |

---

## Seccions eliminades temporalment

| Secció | Motiu | Quan tornarà |
|---|---|---|
| CaseStudies | Sense casos reals encara | Quan tingui 1+ projecte finalitzat amb dades verificables |

---

## Pendent / TODO

### Alta prioritat
- [ ] **Casos d'èxit reals** — afegir quan hi hagi projectes pilots finalitzats amb mètriques concretes
- [ ] **Logo MR** — resoldre compatibilitat dark/light mode (SVG a `public/mr.svg` ja disponible)
- [ ] **Blog o contingut** — articles sobre automatització IA per SEO i credibilitat

### Millores UX/disseny
- [ ] **Foto o avatar** — secció "Sobre mi" sense imatge personal
- [ ] **Testimonials** — quan hi hagi clients satisfets
- [ ] **Casos d'ús detallats** — pàgines individuals per sector (comerç, clíniques, etc.)

### Tècnic
- [ ] **SEO** — meta tags, OG image, sitemap.xml, robots.txt
- [ ] **Analytics** — revisar integració Clarity + Vercel Analytics
- [ ] **Formulari de contacte** — revisar que els emails arribin correctament
- [ ] **WhatsApp link** — comprovar que funciona des de mòbil (ara apunta a web.whatsapp.com en lloc de wa.me)

---

## Idees futures

- Calculadora ROI més elaborada amb sectors específics
- Integració cal·lendari per reservar auditoria directament
- Newsletter o lead magnet (guia PDF, checklist d'automatització)
- Pàgina de serveis individual amb més detall per a cada servei

---

## Fitxers d'interès

- `src/lib/config.ts` — dades de contacte i configuració global
- `src/components/sections/` — totes les seccions de la web
- `public/mr.svg` — logo MR (pendent d'integrar)
- `src/components/sections/CaseStudies.tsx` — secció oculta, no eliminada
