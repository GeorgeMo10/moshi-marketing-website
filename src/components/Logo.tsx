type LogoProps = {
  /** Color scheme: "on-red" for the red navbar, "on-white" for light backgrounds. */
  variant?: "on-red" | "on-white";
  showWordmark?: boolean;
  className?: string;
};

/**
 * Moshi Marketing logo — a rounded square mark with a script "M!" plus an
 * optional "Moshi Marketing" wordmark. This is a placeholder recreation of the
 * brand mark; swap the mark for the official asset when available.
 */
export function Logo({
  variant = "on-red",
  showWordmark = true,
  className = "",
}: LogoProps) {
  const onRed = variant === "on-red";
  // On the red nav the mark is a white tile with a red glyph; elsewhere it's a
  // red tile with a white glyph.
  const tile = onRed ? "bg-white" : "bg-brand";
  const glyph = onRed ? "text-brand" : "text-white";
  const wordmark = onRed ? "text-white" : "text-ink";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className={`grid h-10 w-10 place-items-center rounded-xl ${tile} shadow-sm`}
        aria-hidden="true"
      >
        <span
          className={`font-extrabold italic leading-none ${glyph}`}
          style={{ fontSize: "1.35rem", letterSpacing: "-0.04em" }}
        >
          M!
        </span>
      </span>
      {showWordmark && (
        <span className={`text-lg font-extrabold tracking-tight ${wordmark}`}>
          Moshi<span className="font-medium opacity-90"> Marketing</span>
        </span>
      )}
    </span>
  );
}
