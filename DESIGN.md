# Velora — Web Ajansı Sitesi Tasarım Planı

> Yer tutucu marka adı: **Velora** (Latin *velox* = hızlı). Tek yerden değiştirilebilir.
> Konumlanma: *KOBİ'ler ve yerel işletmeler için hızlı, mobil-öncelikli, dönüşüm odaklı web siteleri.*

---

## 1. Marka Kimliği

- **Ton:** Premium ama erişilebilir. Soğuk/kurumsal değil; davetkâr ve güven veren.
- **Vaat (tek cümle):** "İşletmeni 7 günde mobil-uyumlu, hızlı ve müşteri kazandıran bir siteyle çevrimiçi taşıyoruz."
- **Logo yönü:** Sade bir kelime-logo (wordmark). "V" harfinden türeyen, hız hissi veren bir işaret (ileri eğik / hareket çizgisi).

---

## 2. Renk Paleti — "Krem & Adaçayı" (NİHAİ)

Açık, editoryal, sıcak zemin + derin orman yeşili + sıcak terracotta vurgu.
**AI klişesi yok** (mor/indigo/neon kullanılmaz). Havalı his; tonal, yumuşak
geçişlerden ve boşluktan gelir — koyu zeminden değil.

| Rol | Renk | Hex |
|-----|------|-----|
| Zemin (ana) | Krem / kemik | `#F4F1EA` |
| Zemin (kart/yüzey) | Sıcak beyaz | `#FBFAF6` |
| Zemin (alternatif bölüm) | Açık kum | `#EAE4D8` |
| Metin (ana) / marka | Derin orman yeşili | `#1B3A2D` |
| Metin (ikincil) | Yeşilimsi gri | `#5A655C` |
| **Vurgu (CTA, linkler)** | Terracotta / ember | `#D4623A` |
| Destek yeşili (yumuşak) | Adaçayı | `#7C8C6F` |
| Çizgi / kenarlık | Sıcak gri | `#DDD7C9` |

### Geçiş (gradyan) prensibi — en kritik kısım
- **Tonal geçişler:** her zaman aynı renk ailesi içinde, yumuşak.
  - Bölüm geçişi: krem `#F4F1EA` → açık kum `#EAE4D8`
  - Yeşil bölümler: orman yeşili `#1B3A2D` → biraz daha koyu `#15302480`
  - Sıcak vurgu ışıması: terracotta çok düşük opaklıkta, sadece odak noktasında.
- **Rainbow / çok renkli gradyan YOK** (ucuz ve AI gibi durur).
- Terracotta **az ve etkili** kullanılır: butonlar, önemli sayılar, hover.

### Tema mantığı
- Ana site **açık (krem) tema**.
- İsteğe bağlı koyu bölüm: orman yeşili zeminli "öne çıkan" bir şerit
  (örn. istatistikler / CTA), kontrast ve sinematik his için.

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
4. **Yaptığımız İşler (Portfolyo)** — *ŞİMDİLİK GİZLİ.*
   - Bölüm kodlanır ama yayında gizlenir (tek bayrak / feature flag ile açılır).
   - Daha iyi referanslar gelince açılır. Yeri hazır bekler.
   - Açıldığında: oksuzseramik.com, serinyoltaksi.com, mkuhastanetaksi.com,
     pollarea.com — her biri bir sonuç cümlesiyle (örn. "Google'da 1. sıra").
   - Gizliyken yerine **müşteri yorumları + rakamlar (sayaç animasyonu)** öne çıkar.
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

1. [x] Renk paleti seçildi → **Krem & Adaçayı** (açık tema).
2. [x] Portfolyo kararı → **şimdilik gizli** (bölüm hazır, yayında kapalı).
3. [ ] Marka adını onayla (Velora veya alternatif — geçici olarak Velora).
4. [ ] Next.js iskeletini kur (Tailwind + Framer Motion + Lenis).
5. [ ] Hero + temel bölümleri geliştir → Vercel'e deploy.
6. [ ] İçerik doldur: müşteri yorumları, rakamlar, paket fiyatları.
