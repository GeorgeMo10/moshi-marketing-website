import { existsSync } from "node:fs";
import path from "node:path";
import { initials, type Client } from "@/lib/clients";

/**
 * Renders a client's logo, or an initials monogram when the file hasn't been
 * added to public/clients/ yet. Server component — the existence check runs at
 * build time, so a missing logo never ships as a broken image.
 *
 * Logos marked `logoTone: "light"` are white/pale marks that would disappear on
 * a white card, so they get a dark chip behind them.
 */
export function ClientLogo({
  client,
  size = "md",
}: {
  client: Client;
  size?: "sm" | "md";
}) {
  const hasFile =
    !!client.logo &&
    existsSync(path.join(process.cwd(), "public", client.logo));

  const height = size === "sm" ? "h-12 sm:h-14" : "h-16";
  const maxWidth = size === "sm" ? "max-w-[160px]" : "max-w-[200px]";

  if (!hasFile) {
    return (
      <span
        className={`grid ${size === "sm" ? "h-12 w-12" : "h-16 w-16"} place-items-center rounded-2xl bg-brand/10 text-lg font-extrabold tracking-tight text-brand`}
        title={`${client.name} — logo file not added yet`}
      >
        {initials(client.name)}
      </span>
    );
  }

  if (client.logoTone === "light") {
    return (
      <span
        className={`inline-flex ${height} items-center rounded-xl bg-ink px-4 py-2`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={client.logo}
          alt={client.logoAlt}
          className={`h-full w-auto ${maxWidth} object-contain`}
          loading="lazy"
        />
      </span>
    );
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={client.logo}
      alt={client.logoAlt}
      className={`${height} w-auto ${maxWidth} object-contain`}
      loading="lazy"
    />
  );
}
