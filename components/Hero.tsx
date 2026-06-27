"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";

const headline = ["İşletmeni", "çevrimiçi", "büyütecek", "bir", "site."];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const word = {
  hidden: { opacity: 0, y: "0.5em" },
  show: {
    opacity: 1,
    y: "0em",
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Tonal, yumuşak arka plan — aynı renk ailesi, AI gradyanı değil */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-cream to-sand" />
        <div className="absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-sage/20 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[380px] w-[380px] rounded-full bg-ember/10 blur-3xl" />
      </div>

      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">KOBİ &amp; Yerel İşletmeler için</span>
        </motion.div>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.05] text-forest sm:text-6xl md:text-7xl"
        >
          {headline.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom">
              <motion.span
                variants={word}
                className={`inline-block ${w === "site." ? "text-ember" : ""}`}
              >
                {w}&nbsp;
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
        >
          {site.tagline} Tasarımdan yayına kadar her şeyi biz hallederiz —
          sen işine odaklan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a href="#iletisim" className="btn-primary">
            Teklif Al
          </a>
          <a href="#hizmetler" className="btn-ghost">
            Hizmetleri Gör
          </a>
        </motion.div>
      </div>
    </section>
  );
}
