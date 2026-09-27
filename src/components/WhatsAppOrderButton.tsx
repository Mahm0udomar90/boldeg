import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/site";
import { useLang, type L } from "@/lib/i18n";

const defaultLabel: L = { en: "Order via WhatsApp", ar: "اطلب عبر واتساب" };

export function WhatsAppOrderButton({
  message,
  className,
  label,
  variant = "solid",
}: {
  message: string;
  className?: string;
  label?: L;
  variant?: "solid" | "ghost";
}) {
  const { t, dir } = useLang();

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center justify-center gap-3 px-8 py-4 label-xs transition-colors duration-500",
        variant === "solid"
          ? "bg-charcoal text-ivory hover:bg-charcoal/90"
          : "border border-charcoal/25 text-charcoal hover:border-charcoal",
        className,
      )}
    >
      <span>{t(label ?? defaultLabel)}</span>
      <span
        className={cn(
          "transition-transform duration-500",
          dir === "rtl" ? "group-hover:-translate-x-1" : "group-hover:translate-x-1",
        )}
        aria-hidden
      >
        {dir === "rtl" ? "\u2190" : "\u2192"}
      </span>
    </a>
  );
}
