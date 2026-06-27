# Velora — Web Ajansı Sitesi

KOBİ'ler ve yerel işletmeler için hızlı, mobil-öncelikli, müşteri kazandıran
web siteleri tasarlayan ajans için tek sayfalık, animasyonlu tanıtım sitesi.

> **Velora** geçici bir marka adıdır. Değiştirmek için `lib/site.ts` içindeki
> `brand` alanını güncelle (tek yerden tüm siteye yansır).

## Teknolojiler

- **Next.js 14** (App Router) — hız, SEO, statik prerender
- **Tailwind CSS** — "Krem & Adaçayı" paleti
- **Framer Motion** — scroll'da beliren animasyonlar, hover etkileşimleri
- **Lenis** — pürüzsüz (smooth) scroll

## Renk Paleti

| Rol | Hex |
|-----|-----|
| Zemin (krem) | `#F4F1EA` |
| Metin / marka (orman yeşili) | `#1B3A2D` |
| Vurgu (terracotta) | `#D4623A` |
| Destek (adaçayı) | `#7C8C6F` |

Tasarım kararlarının tamamı için: [`DESIGN.md`](./DESIGN.md)

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## İçerik Düzenleme

Tüm metinler, paketler, yorumlar, telefon/WhatsApp ve marka adı tek dosyada:
**`lib/site.ts`**

- `site.brand` — marka adı
- `site.whatsapp` — WhatsApp numarası (`90` + numara)
- `site.email` — iletişim e-postası
- `site.showPortfolio` — `true` yapınca "Yaptığımız İşler" bölümü açılır
  (şimdilik gizli)
- `services`, `pricing`, `testimonials`, `faqs`, `stats` — içerik listeleri

## Yayına Alma

[Vercel](https://vercel.com)'e bu repoyu bağlaman yeterli — otomatik build
alır ve yayınlar. Yayından önce `lib/site.ts` içindeki WhatsApp numarası ve
e-postayı kendi bilgilerinle güncelle.
