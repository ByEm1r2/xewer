import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream py-12">
      <div className="container-x flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="font-display text-xl font-semibold text-forest">
          {site.brand}
          <span className="text-ember">.</span>
        </div>
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {site.brand}. Tüm hakları saklıdır.
        </p>
        <div className="flex gap-6 text-sm text-muted">
          <a href="#hizmetler" className="hover:text-forest">Hizmetler</a>
          <a href="#paketler" className="hover:text-forest">Paketler</a>
          <a href="#iletisim" className="hover:text-forest">İletişim</a>
        </div>
      </div>
    </footer>
  );
}
