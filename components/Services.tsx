"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { services } from "@/lib/site";

export default function Services() {
  return (
    <section id="hizmetler" className="py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <span className="eyebrow">Hizmetler</span>
          <h2 className="section-title mt-3 max-w-2xl">
            İşine uygun, doğru çözüm.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group h-full rounded-2xl border border-line bg-surface p-7 transition-shadow hover:shadow-xl hover:shadow-forest/5"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-forest/5 font-display text-lg font-semibold text-forest transition-colors group-hover:bg-ember group-hover:text-cream">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-xl font-semibold text-forest">
                  {s.title}
                </h3>
                <p className="mt-2 text-muted">{s.desc}</p>
                <ul className="mt-5 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-forest">
                      <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
