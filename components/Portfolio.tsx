"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { portfolio } from "@/lib/site";

// Bu bölüm site.showPortfolio === true olduğunda page.tsx'te render edilir.
export default function Portfolio() {
  return (
    <section id="isler" className="py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <span className="eyebrow">Yaptığımız İşler</span>
          <h2 className="section-title mt-3 max-w-2xl">
            Gerçek işletmeler, gerçek sonuçlar.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {portfolio.map((p, i) => (
            <Reveal key={p.url} delay={i * 0.08}>
              <motion.a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group block rounded-2xl border border-line bg-surface p-7 transition-shadow hover:shadow-xl hover:shadow-forest/5"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-semibold text-forest">
                    {p.name}
                  </h3>
                  <span className="text-ember transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
                <p className="mt-2 text-muted">{p.result}</p>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
