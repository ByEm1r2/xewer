"use client";

import Reveal from "./Reveal";
import { process, why } from "@/lib/site";

export default function Process() {
  return (
    <section id="surec" className="bg-sand py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <span className="eyebrow">Nasıl Çalışırız</span>
          <h2 className="section-title mt-3 max-w-2xl">
            Basit, şeffaf bir süreç.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.08}>
              <div className="relative h-full rounded-2xl border border-line bg-cream p-7">
                <span className="font-display text-3xl font-semibold text-ember/80">
                  {p.step}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-forest">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {why.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.06}>
              <div className="border-t border-forest/15 pt-5">
                <h3 className="font-display text-lg font-semibold text-forest">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
