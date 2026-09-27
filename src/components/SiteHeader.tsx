import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { images, BRAND } from "@/lib/site";
import { useLang, type L } from "@/lib/i18n";

const nav: { to: string; label: L }[] = [
  { to: "/shop", label: { en: "Shop", ar: "المتجر" } },
  { to: "/about", label: { en: "About", ar: "عن العلامة" } },
  { to: "/journal", label: { en: "Journal", ar: "المدوّنة" } },
];

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const light = overlay && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700",
        scrolled ? "bg-ivory/92 backdrop-blur-md py-4" : "py-7",
        scrolled && "border-b border-border",
      )}
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-6 md:grid-cols-3 md:px-12">
        <Link
          to="/"
          className={cn(
            "min-w-0 font-display text-xl tracking-[0.42em] transition-colors duration-700",
            light ? "text-ivory" : "text-charcoal",
          )}
          aria-label={`${BRAND.name} home`}
        >
          {BRAND.name.toUpperCase()}
        </Link>

        <nav className="hidden justify-center gap-12 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={cn(
                "label-xs link-underline transition-colors duration-700",
                light ? "text-ivory/90 hover:text-ivory" : "text-charcoal/70 hover:text-charcoal",
              )}
              activeProps={{ className: light ? "text-ivory" : "text-charcoal" }}
            >
              {t(n.label)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-6">
          <div className={cn("hidden items-center gap-2 label-xs sm:flex", light ? "text-ivory/80" : "text-stone")}>
            {(["ar", "en"] as const).map((l, i) => (
              <span key={l} className="flex items-center gap-2">
                {i === 1 && <span className="opacity-40">|</span>}
                <button
                  onClick={() => setLang(l)}
                  className={cn(
                    "transition-colors duration-500",
                    lang === l ? (light ? "text-ivory" : "text-charcoal") : "hover:opacity-70",
                  )}
                >
                  {l === "ar" ? "AR" : "EN"}
                </button>
              </span>
            ))}
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className={cn("flex h-6 w-7 flex-col justify-center gap-[6px] md:hidden", light ? "text-ivory" : "text-charcoal")}
          >
            <span className={cn("h-px w-full bg-current transition-transform duration-500", open && "translate-y-[3.5px] rotate-45")} />
            <span className={cn("h-px w-full bg-current transition-transform duration-500", open && "-translate-y-[3.5px] -rotate-45")} />
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden bg-ivory transition-[max-height,opacity] duration-700 md:hidden",
          open ? "mt-6 max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="flex flex-col gap-6 px-6 pb-10 pt-6">
          <img src={images.logo} alt="" className="h-16 w-16 object-contain mix-blend-multiply" aria-hidden />
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="font-display text-3xl text-charcoal">
              {t(n.label)}
            </Link>
          ))}
          <div className="flex items-center gap-4 pt-2 label-xs text-stone">
            {(["ar", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={cn("transition-colors duration-500", lang === l && "text-charcoal")}
              >
                {l === "ar" ? "العربية" : "English"}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
