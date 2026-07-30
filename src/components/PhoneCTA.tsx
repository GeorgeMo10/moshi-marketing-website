import { SITE } from "@/lib/site";
import { IconPhone } from "./icons";

function IconChat(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
      <path d="M8 10h8M8 13h5" />
    </svg>
  );
}

type Tone = "brand" | "light" | "dark";

const CALL_STYLES: Record<Tone, string> = {
  brand: "bg-brand text-white hover:bg-brand-dark",
  light: "bg-white text-brand hover:bg-white/90",
  dark: "bg-ink text-white hover:bg-ink/90",
};

const TEXT_STYLES: Record<Tone, string> = {
  brand: "border-2 border-brand/30 text-brand hover:border-brand",
  light: "border-2 border-white/40 text-white hover:border-white",
  dark: "border-2 border-ink/15 text-ink hover:border-ink/30",
};

/**
 * Click-to-call + click-to-text buttons.
 * The "Text" (sms:) button is the natural choice on mobile; both render on all
 * screens so desktop visitors still see the number and can tap to call.
 */
export function PhoneCTA({
  tone = "brand",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <a
        href={`tel:${SITE.phone.tel}`}
        className={`inline-flex h-14 items-center justify-center gap-2 rounded-full px-7 text-base font-bold shadow-sm transition ${CALL_STYLES[tone]}`}
      >
        <IconPhone width={20} height={20} />
        Call {SITE.phone.display}
      </a>
      <a
        href={`sms:${SITE.phone.sms}`}
        className={`inline-flex h-14 items-center justify-center gap-2 rounded-full px-7 text-base font-bold transition ${TEXT_STYLES[tone]}`}
      >
        <IconChat />
        Text Us
      </a>
    </div>
  );
}
