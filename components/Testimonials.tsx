"use client";

import Reveal from "./Reveal";
import { testimonials } from "@/lib/site";

export default function Testimonials() {
  return (
    <section id="yorumlar" className="py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <span className="eyebrow">Yorumlar</span>
          <h2 className="section-title mt-3 max-w-2xl">
            Müşterilerimiz ne diyor?
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-surface p-7">
                <div className="font-display text-4xl leading-none text-ember/40">
                  &ldquo;
                </div>
                <blockquote className="mt-2 flex-1 text-forest">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <div className="font-medium text-forest">{t.name}</div>
                  <div className="text-sm text-muted">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
