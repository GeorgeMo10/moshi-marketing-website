import type { SVGProps } from "react";

/** Shared props for all icons. Stroke-based, inherit currentColor. */
function Base(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    />
  );
}

export function IconTarget(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    </Base>
  );
}

export function IconGlobe(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9s1.3-6.5 3.8-9Z" />
    </Base>
  );
}

export function IconSearch(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </Base>
  );
}

export function IconPin(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <path d="M12 21s-7-5.2-7-11a7 7 0 0 1 14 0c0 5.8-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </Base>
  );
}

export function IconShare(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <circle cx="6" cy="12" r="2.6" />
      <circle cx="18" cy="6" r="2.6" />
      <circle cx="18" cy="18" r="2.6" />
      <path d="m8.3 10.8 7.4-3.6M8.3 13.2l7.4 3.6" />
    </Base>
  );
}

export function IconInbox(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <path d="M4 13 6 5.5A2 2 0 0 1 7.9 4h8.2A2 2 0 0 1 18 5.5L20 13" />
      <path d="M4 13h4l1.5 2.5h5L16 13h4v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5Z" />
    </Base>
  );
}

export function IconBell(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </Base>
  );
}

export function IconCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </Base>
  );
}

export function IconPhone(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <path d="M15.5 21a13 13 0 0 1-12.5-12.5A2.5 2.5 0 0 1 5.5 6h2A1.5 1.5 0 0 1 9 7.3l.7 2.7a1.5 1.5 0 0 1-.4 1.5l-1.2 1.1a11 11 0 0 0 4.3 4.3l1.1-1.2a1.5 1.5 0 0 1 1.5-.4l2.7.7A1.5 1.5 0 0 1 19 17v2a2 2 0 0 1-2 2Z" />
    </Base>
  );
}

export function IconChart(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <path d="M4 20V5M4 20h16" />
      <path d="M8 20v-5M12 20V9M16 20v-8" />
    </Base>
  );
}

export function IconStar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.5 14.9 8.6l6.7.9-4.9 4.7 1.2 6.6L12 17.7 6.1 20.8l1.2-6.6L2.4 9.5l6.7-.9L12 2.5Z" />
    </svg>
  );
}

export function IconArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Base>
  );
}

export function IconBolt(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <path d="M13 2 4.5 13.2h6L11 22l8.5-11.2h-6L13 2Z" />
    </Base>
  );
}

export function IconClock(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.2 2" />
    </Base>
  );
}

export function IconCalendar(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 10h17M8 3.5v3M16 3.5v3" />
    </Base>
  );
}

export function IconGift(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <rect x="3.5" y="9" width="17" height="4" rx="1.2" />
      <path d="M5 13v6.5a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5V13M12 9v12" />
      <path d="M12 9S10.8 4 8.4 4a2.2 2.2 0 0 0 0 5M12 9s1.2-5 3.6-5a2.2 2.2 0 0 1 0 5" />
    </Base>
  );
}

export function IconMail(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
      <path d="m3.8 7.5 7.1 5.1a2 2 0 0 0 2.2 0l7.1-5.1" />
    </Base>
  );
}

export function IconChat(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <path d="M20 12.5a7.5 7.5 0 0 1-10.8 6.7L4 20.5l1.4-4.8A7.5 7.5 0 1 1 20 12.5Z" />
    </Base>
  );
}

export function IconUsers(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <circle cx="9.5" cy="8" r="3.5" />
      <path d="M3 20a6.5 6.5 0 0 1 13 0" />
      <path d="M16.5 5.2a3.5 3.5 0 0 1 0 6.6M18 14.4A6.5 6.5 0 0 1 21 20" />
    </Base>
  );
}

export function IconLayers(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z" />
      <path d="m3.5 12.5 8.5 4.5 8.5-4.5" />
      <path d="m3.5 17 8.5 4.5 8.5-4.5" />
    </Base>
  );
}

export function IconStop(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.2 8.2 7.6 7.6" />
    </Base>
  );
}

export function IconPhoneMobile(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M10.5 5.5h3M11 18.4h2" />
    </Base>
  );
}
