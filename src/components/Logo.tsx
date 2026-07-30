type LogoProps = {
  /** Color scheme: "on-red" for the red navbar, "on-white" for light backgrounds. */
  variant?: "on-red" | "on-white";
  showWordmark?: boolean;
  className?: string;
};

/**
 * The Moshi "M!" brush mark, drawn inline so it can inherit color.
 * This is a faithful recreation of the brand logo; the canonical raster/vector
 * lives at /public/logo.svg (and app/icon.svg for the favicon).
 */
function MoshiMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <g
        transform="translate(30,0) skewX(-7)"
        strokeWidth="46"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M150 358L198 176L256 296L314 176L362 358" />
        <path d="M398 176L392 300" />
      </g>
      <circle cx="404" cy="356" r="24" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Logo({
  variant = "on-red",
  showWordmark = true,
  className = "",
}: LogoProps) {
  const onRed = variant === "on-red";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {onRed ? (
        // On the red navbar, the logo's white glyph stands on its own.
        <MoshiMark className="h-9 w-9 text-white" />
      ) : (
        // On light backgrounds, the full brand tile: red square, white glyph.
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand shadow-sm">
          <MoshiMark className="h-7 w-7 text-white" />
        </span>
      )}
      {showWordmark && (
        <span
          className={`text-lg font-extrabold tracking-tight ${
            onRed ? "text-white" : "text-ink"
          }`}
        >
          Moshi
          <span className="font-medium opacity-90"> Marketing</span>
        </span>
      )}
    </span>
  );
}
