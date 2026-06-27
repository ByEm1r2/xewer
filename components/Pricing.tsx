"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { pricing } from "@/lib/site";

export default function Pricing() {
  return (
    <section id="paketler" className="bg-sand py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <span className="eyebrow">Paketler</span>
          <h2 className="section-title mt-3 max-w-2xl">
            İhtiyacına göre, şeffaf paketler.
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Net fiyat için kısa bir görüşme yeterli — sana özel teklif çıkarırız.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pricing.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className={`flex h-full flex-col rounded-2xl border p-7 ${
                  p.highlight
                    ? "border-forest bg-forest text-cream shadow-xl shadow-forest/10"
                    : "border-line bg-cream"
                }`}
              >
                {p.highlight && (
                  <span className="mb-4 inline-flex w-fit rounded-full bg-ember px-3 py-1 text-xs font-medium text-cream">
                    En çok tercih edilen
                  </span>
                )}
                <h3
                  className={`font-display text-sm font-medium uppercase tracking-wider ${
                    p.highlight ? "text-cream/70" : "text-muted"
                  }`}
                >
                  {p.name}
                </h3>
                <div
                  className={`mt-1 font-display text-3xl font-semibold ${
                    p.highlight ? "text-cream" : "text-forest"
                  }`}
                >
                  {p.price}
                </div>
                <p
                  className={`mt-2 text-sm ${
                    p.highlight ? "text-cream/70" : "text-muted"
                  }`}
                >
                  {p.desc}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span
                        className={`mt-0.5 ${p.highlight ? "text-ember" : "text-ember"}`}
                      >
                        ✓
                      </span>
                      <span className={p.highlight ? "text-cream/90" : "text-forest"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#iletisim"
                  className={`mt-7 ${
                    p.highlight
                      ? "btn bg-ember text-cream hover:bg-ember-dark"
                      : "btn-ghost"
                  }`}
                >
                  Teklif Al
                </a>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
