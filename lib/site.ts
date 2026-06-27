// =============================================================
//  TEK MERKEZ — Tüm marka bilgisi ve içerik buradan düzenlenir.
//  Marka adını, telefonu, paketleri vb. değiştirmek için burayı düzenle.
// =============================================================

export const site = {
  brand: "Velora",
  tagline: "Hızlı, mobil-öncelikli, müşteri kazandıran web siteleri.",
  // Türkiye için birincil iletişim — kendi numaranı yaz (90 + numara)
  whatsapp: "905555555555",
  email: "merhaba@velora.com",
  // Portfolyo şimdilik gizli. Daha iyi referanslar gelince true yap.
  showPortfolio: false,
};

export const stats = [
  { value: 30, suffix: "+", label: "Yayına alınan site" },
  { value: 7, suffix: " gün", label: "Ortalama teslim" },
  { value: 98, suffix: "/100", label: "Mobil hız skoru" },
  { value: 100, suffix: "%", label: "Mobil uyumlu" },
];

export const services = [
  {
    title: "Landing / Tek Sayfa",
    desc: "Kampanya, ürün ya da hizmet için tek odaklı, dönüşüm getiren sayfa.",
    points: ["Hızlı teslim", "Tek hedef: arama / form", "WhatsApp entegre"],
  },
  {
    title: "Kurumsal Site",
    desc: "İşletmeni profesyonel temsil eden, çok sayfalı, SEO'ya hazır site.",
    points: ["Kurumsal tasarım", "SEO altyapısı", "Aylık bakım opsiyonu"],
  },
  {
    title: "E-Ticaret",
    desc: "Ürün satışı, ödeme ve stok yönetimiyle satışa hazır mağaza.",
    points: ["Online ödeme", "Ürün/stok yönetimi", "Mobil satış odaklı"],
  },
];

export const process = [
  { step: "01", title: "Keşif", desc: "İşini, hedefini ve müşterini dinleriz." },
  { step: "02", title: "Tasarım", desc: "Markana özel, mobil-öncelikli tasarım." },
  { step: "03", title: "Geliştirme", desc: "Hızlı, animasyonlu, SEO'ya hazır kod." },
  { step: "04", title: "Yayın", desc: "Yayına alır, ölçer ve destek veririz." },
];

export const why = [
  { title: "Hız", desc: "Saniyeler değil, milisaniyeler. Hızlı site = daha çok müşteri." },
  { title: "Mobil-öncelik", desc: "Ziyaretçilerin çoğu telefonda. Önce orada mükemmel." },
  { title: "SEO'ya hazır", desc: "Google'da bulunabilir, doğru kurguyla üst sıralara." },
  { title: "Sürekli destek", desc: "Yayından sonra da yanındayız, güncel tutarız." },
];

export const testimonials = [
  {
    quote: "Sitemiz yayına girdikten sonra telefonlarımız susmadı. Mobilde çok hızlı.",
    name: "İşletme Sahibi",
    role: "Yerel Hizmet",
  },
  {
    quote: "Tasarım tam istediğimiz gibi, hem şık hem kullanışlı oldu.",
    name: "Mağaza Sahibi",
    role: "Perakende",
  },
  {
    quote: "Süreç çok kolaydı, her adımda bilgilendirildik. Tavsiye ederiz.",
    name: "Kurucu",
    role: "Küçük İşletme",
  },
];

export const pricing = [
  {
    name: "Başlangıç",
    price: "Landing",
    desc: "Tek sayfa, tek hedef.",
    features: ["Tek sayfa tasarım", "Mobil uyumlu", "WhatsApp + form", "1 yıl alan adı desteği"],
    highlight: false,
  },
  {
    name: "Profesyonel",
    price: "Kurumsal",
    desc: "En çok tercih edilen.",
    features: ["Çok sayfalı site", "SEO altyapısı", "İçerik yönetimi", "Aylık bakım dahil"],
    highlight: true,
  },
  {
    name: "Mağaza",
    price: "E-Ticaret",
    desc: "Online satış başlasın.",
    features: ["Ürün & stok yönetimi", "Online ödeme", "Mobil satış akışı", "Öncelikli destek"],
    highlight: false,
  },
];

export const faqs = [
  {
    q: "Bir site ne kadar sürede hazır olur?",
    a: "Landing sayfaları genelde günler içinde, kurumsal siteler ortalama 7 gün içinde teslim edilir.",
  },
  {
    q: "Fiyatlar neden sayfada net yazmıyor?",
    a: "Her işin ihtiyacı farklı. Kısa bir görüşmeyle sana özel, net bir teklif çıkarıyoruz.",
  },
  {
    q: "Yayından sonra destek veriyor musunuz?",
    a: "Evet. Aylık bakım paketiyle güncelleme, hosting ve teknik desteği sürdürüyoruz.",
  },
  {
    q: "Mevcut sitemi yenileyebilir misiniz?",
    a: "Tabii. Var olan siteni daha hızlı, mobil-uyumlu ve modern bir hale getirebiliriz.",
  },
];

// Portfolyo — showPortfolio true olunca görünür.
export const portfolio = [
  { name: "Öksüz Seramik", url: "https://oksuzseramik.com", result: "Hızlı, mobil-uyumlu kurumsal site." },
  { name: "Serinyol Taksi", url: "https://serinyoltaksi.com", result: "Aramada üst sıra, tek dokunuş arama." },
  { name: "MKU Hastane Taksi", url: "https://mkuhastanetaksi.com", result: "7/24 ulaşılabilir, mobil-öncelikli." },
  { name: "Pollarea", url: "https://pollarea.com", result: "Modern arayüz, akıcı kullanım." },
];
