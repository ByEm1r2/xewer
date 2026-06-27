"use client";

import Reveal from "./Reveal";
import { site } from "@/lib/site";

export default function Contact() {
  const wa = `https://wa.me/${site.whatsapp}`;

  return (
    <section id="iletisim" className="py-24 sm:py-32">
      <div className="container-x">
        <div className="overflow-hidden rounded-3xl bg-forest text-cream">
          <div className="grid gap-10 p-8 sm:p-12 md:grid-cols-2 md:p-16">
            <Reveal>
              <span className="eyebrow text-ember">İletişim</span>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                Projeni konuşalım.
              </h2>
              <p className="mt-4 max-w-md text-cream/70">
                Kısa bir mesaj bırak ya da WhatsApp&apos;tan yaz — sana özel,
                net bir teklifle dönelim.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-ember text-cream hover:bg-ember-dark"
                >
                  WhatsApp&apos;tan Yaz
                </a>
                <p className="text-sm text-cream/60">{site.email}</p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <form
                className="space-y-4"
                action={`mailto:${site.email}`}
                method="post"
                encType="text/plain"
              >
                <Field name="ad" label="Ad Soyad" />
                <Field name="telefon" label="Telefon" type="tel" />
                <Field name="isletme" label="İşletme adı" />
                <div>
                  <label className="mb-1.5 block text-sm text-cream/70">Mesaj</label>
                  <textarea
                    name="mesaj"
                    rows={4}
                    className="w-full rounded-xl border border-cream/20 bg-cream/5 px-4 py-3 text-cream placeholder-cream/40 outline-none transition-colors focus:border-ember"
                    placeholder="Nasıl bir siteye ihtiyacın var?"
                  />
                </div>
                <button type="submit" className="btn w-full bg-ember text-cream hover:bg-ember-dark">
                  Teklif İste
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
}: {
  name: string;
  label: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm text-cream/70">{label}</label>
      <input
        type={type}
        name={name}
        className="w-full rounded-xl border border-cream/20 bg-cream/5 px-4 py-3 text-cream placeholder-cream/40 outline-none transition-colors focus:border-ember"
      />
    </div>
  );
}
