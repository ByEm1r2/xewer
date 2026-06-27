# Velora — Web Ajansı Sitesi Tasarım Planı

> Yer tutucu marka adı: **Velora** (Latin *velox* = hızlı). Tek yerden değiştirilebilir.
> Konumlanma: *KOBİ'ler ve yerel işletmeler için hızlı, mobil-öncelikli, dönüşüm odaklı web siteleri.*

---

## 1. Marka Kimliği

- **Ton:** Premium ama erişilebilir. Soğuk/kurumsal değil; davetkâr ve güven veren.
- **Vaat (tek cümle):** "İşletmeni 7 günde mobil-uyumlu, hızlı ve müşteri kazandıran bir siteyle çevrimiçi taşıyoruz."
- **Logo yönü:** Sade bir kelime-logo (wordmark). "V" harfinden türeyen, hız hissi veren bir işaret (ileri eğik / hareket çizgisi).

---

## 2. Renk Paleti (Dark-first — premium his)

Ana yön: **koyu (dark) tema**, tek canlı vurgu rengi. "Havalı, üst seviye" hissi en kolay koyu zeminde verilir.

| Rol | Renk | Hex |
|-----|------|-----|
| Zemin (ana) | Neredeyse siyah | `#0A0A0C` |
| Zemin (kart) | Koyu gri | `#141418` |
| Metin (ana) | Kırık beyaz | `#F5F5F7` |
| Metin (ikincil) | Gri | `#9A9AA5` |
| **Vurgu (accent)** | Elektrik moru | `#6D5DF6` |
| Vurgu 2 (gradyan) | Camgöbeği | `#22D3EE` |
| Başarı/işaret | Limon yeşili | `#A3E635` |

> **Alternatif sıcak palet** (istersen): zemin `#0B0B0B`, vurgu amber `#F5A623` + altın `#E8C36B`. Daha "lüks butik" hissi verir.

- Hero ve butonlarda **mor→camgöbeği gradyan** kullanılır.
- Açık tema (light) opsiyonel: aynı renkler invert edilir, ileride eklenebilir.

---

## 3. Tipografi

- **Başlıklar:** `Clash Display` veya `Satoshi` (modern, geometrik, karakterli — Fontshare'den ücretsiz).
- **Gövde:** `Inter` (her ekranda okunaklı, Türkçe karakter desteği tam).
- Büyük başlıklar: 56–80px (web), 32–40px (mobil). Bol boşluk (whitespace).

---

## 4. Sayfa Kurgusu (tek sayfa + alt sayfalar)

### Ana Sayfa (scroll akışı)
1. **Hero**
   - Büyük başlık (kelime kelime beliren animasyon), tek cümle vaat.
   - 2 buton: "Teklif Al" (dolu, gradyan) + "İşlerimiz" (çerçeveli).
   - Arka planda yumuşak hareket eden gradyan / parçacık efekti.
2. **Güven şeridi** — "30+ işletme bize güveniyor" + müşteri logoları (kayan şerit).
3. **Hizmetler** — 3 kart: Landing / Kurumsal Site / E-ticaret. Hover'da yükselme + ışıma.
4. **Yaptığımız İşler (Portfolyo)** — gerçek projeler, gerçek sonuç rakamlarıyla:
   - oksuzseramik.com, serinyoltaksi.com, mkuhastanetaksi.com, pollarea.com
   - Her kartta: görsel, kısa açıklama, "X kat daha hızlı / Y aramada üst sıra" gibi metrik.
5. **Süreç** — 4 adım: Keşif → Tasarım → Geliştirme → Yayın. Basit ve korkutmayan.
6. **Neden Velora?** — Hız, mobil-öncelik, SEO, sürekli destek (4 ikon + kısa metin).
7. **Yorumlar** — müşteri görüşleri (kaydırmalı kartlar).
8. **Fiyat/Paketler** — 3 paket, şeffaf. (Tek seferlik + aylık bakım vurgusu.)
9. **SSS** — açılır-kapanır 5-6 soru.
10. **İletişim / CTA** — güçlü kapanış başlığı + form (Ad, Telefon, İşletme, Mesaj) + **WhatsApp butonu** + Google harita.

### Alt sayfalar
- `/isler/[proje]` — vaka çalışması (case study) detay sayfası.
- `/hizmetler` — hizmet detayları.
- Sabit **WhatsApp yüzen butonu** (mobilde şart).

---

## 5. Animasyon Stratejisi

"Üst seviye animasyonlu" hissin teknik karşılığı:

- **Lenis** → pürüzsüz scroll (havalı sitelerin asıl sırrı).
- **Framer Motion** → bölümlerin scroll'da belirmesi, kademeli (stagger) giriş.
- **GSAP + ScrollTrigger** → hero metin animasyonu, paralaks, sayaç animasyonları (örn. "0 → 30 müşteri").
- Hover mikro-etkileşimleri: butonlar, kartlar, bağlantılar.
- **Performans kuralı:** animasyonlar `transform` ve `opacity` ile (GPU dostu). Mobilde ağır efektler azaltılır (`prefers-reduced-motion` desteği).

---

## 6. Teknik Stack

| Katman | Teknoloji | Neden |
|--------|-----------|-------|
| Framework | **Next.js (App Router)** | Hız, SEO, görsel optimizasyonu |
| Stil | **Tailwind CSS** | Hızlı, tutarlı, responsive |
| Animasyon | **Framer Motion + GSAP + Lenis** | Üst seviye hareket |
| Form | Next API route + e-posta (Resend) | Teklif talepleri |
| Deploy | **Vercel** | Ücretsiz, tek tıkla, CDN |
| Analitik | Vercel Analytics / Plausible | Ziyaretçi takibi |

---

## 7. Mobil & Erişilebilirlik

- **Mobil-öncelikli** tasarım: önce 375px, sonra büyütülür.
- Dokunma hedefleri ≥ 44px, sabit WhatsApp butonu.
- Lighthouse hedefi: Performans/SEO/Erişilebilirlik 90+.
- Türkçe karakter, doğru `lang="tr"`, semantik HTML, alt metinler.

---

## 8. Dönüşüm (Para Kazandıran Detaylar)

- Her ekranda görünür bir **CTA** ("Teklif Al").
- **Sosyal kanıt:** gerçek rakamlar, gerçek müşteri isimleri/logoları.
- **WhatsApp** birincil iletişim (Türkiye'de en yüksek dönüşüm).
- Paketlerde **aylık bakım/hosting** = tekrarlayan gelir.
- Hız ve mobil performansı bir **satış argümanı** olarak göster (Lighthouse skoru rozet gibi).

---

## 9. Sonraki Adımlar

1. [ ] Marka adını onayla (Velora veya alternatif).
2. [ ] Renk paletini seç (dark-mor / sıcak-amber).
3. [ ] İçerikleri topla: portfolyo metrikleri, müşteri yorumları, paket fiyatları.
4. [ ] Next.js iskeletini kur (bu plan onaylanınca).
5. [ ] Bölümleri sırayla geliştir → Vercel'e deploy.
