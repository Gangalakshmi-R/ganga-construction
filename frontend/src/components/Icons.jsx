const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const ArrowUpRight = (p) => (
  <svg {...base} {...p}><path d="M7 17 17 7M8 7h9v9" /></svg>
);
export const ArrowRight = (p) => (
  <svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const ArrowLeft = (p) => (
  <svg {...base} {...p}><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
);
export const Plus = (p) => (
  <svg {...base} {...p}><path d="M12 5v14M5 12h14" /></svg>
);
export const Close = (p) => (
  <svg {...base} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const Menu = (p) => (
  <svg {...base} {...p}><path d="M4 8h16M4 16h16" /></svg>
);
export const Check = (p) => (
  <svg {...base} {...p}><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
);
export const Phone = (p) => (
  <svg {...base} {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);
export const Pin = (p) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.800 12 21 12 21Z" />
    <circle cx="12" cy="9.500" r="2.500" />
  </svg>
);
export const Star = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="m12 2.8 2.8 5.9 6.4.8-4.7 4.4 1.2 6.400L12 17.200 6.300 20.300l1.200-6.400L2.800 9.500l6.400-.8L12 2.800Z" />
  </svg>
);
export const Diamond = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 1 14.500 9.500 23 12l-8.500 2.500L12 23l-2.500-8.500L1 12l8.500-2.500Z" />
  </svg>
);
export const Quote = (p) => (
  <svg viewBox="0 0 48 48" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M10 30c0-9 4.500-15 13-17l1.500 3.500C20 18 18.500 20.500 18 23h6v13H10V30Zm20 0c0-9 4.500-15 13-17l1.500 3.500C40 18 38.500 20.500 38 23h6v13H30V30Z" />
  </svg>
);
export const WhatsApp = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 2a10 10 0 0 0-8.600 15.100L2 22l5-1.300A10 10 0 1 0 12 2Zm0 18.200a8.200 8.200 0 0 1-4.200-1.200l-.3-.2-3 .8.800-2.900-.2-.3A8.200 8.200 0 1 1 12 20.200Zm4.500-6.100c-.2-.1-1.500-.7-1.700-.8s-.4-.1-.6.100-.7.800-.8 1-.3.200-.5.100a6.700 6.700 0 0 1-3.300-2.900c-.2-.4.200-.4.700-1.300a.5.500 0 0 0 0-.5l-.8-1.900c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.300 3 3 0 0 0-.9 2.200 5.200 5.200 0 0 0 1.100 2.800 11.900 11.900 0 0 0 4.600 4c1.700.7 2.300.8 3.100.7a2.600 2.600 0 0 0 1.700-1.200 2.100 2.100 0 0 0 .1-1.200c-.1-.1-.3-.2-.5-.3Z" />
  </svg>
);

/* service + brand icons */
export const House = (p) => (
  <svg {...base} {...p}>
    <path d="M3 11.500 12 4l9 7.500M5.500 10v10h13V10M10 20v-5.500h4V20" />
  </svg>
);
export const Building = (p) => (
  <svg {...base} {...p}>
    <path d="M4 21V5l9-2v18M13 8h7v13M8 8h1M8 12h1M8 16h1M16.500 12h.5M16.500 16h.5M2 21h20" />
  </svg>
);
export const Blueprint = (p) => (
  <svg {...base} {...p}>
    <path d="M3 4h18v16H3zM3 9h18M9 9v11M14 14h4" />
  </svg>
);
export const Wrench = (p) => (
  <svg {...base} {...p}>
    <path d="M14.500 6.500a4 4 0 0 0 5 5L9 22l-3-3L16.500 8.500A4 4 0 0 0 14.500 6.500ZM14.500 6.500 17 4l3 3-2.500 2.500M5 5l3 1 1 3-2 2-3-1-1-3 2-2Z" />
  </svg>
);
export const Engineer = (p) => (
  <svg {...base} {...p}>
    <path d="M5 14a7 7 0 0 1 14 0M3 14h18M12 5v4M8 21v-4a4 4 0 0 1 8 0v4" />
  </svg>
);
export const Shield = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3 5 6v5c0 4.500 3 8.200 7 10 4-1.800 7-5.500 7-10V6l-7-3Zm-3 9 2.500 2.500L15.500 9.500" />
  </svg>
);
export const Clipboard = (p) => (
  <svg {...base} {...p}>
    <path d="M9 4h6v3H9zM7 5.500H6a1 1 0 0 0-1 1V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6.500a1 1 0 0 0-1-1h-1M8.500 14l2.500 2.500 4.500-5" />
  </svg>
);
export const Team = (p) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="8" r="3.500" />
    <path d="M2.500 20a6.500 6.500 0 0 1 13 0M16 4.500a3.500 3.500 0 0 1 0 7M18 14.500a6.500 6.500 0 0 1 3.500 5.500" />
  </svg>
);

export const BrandMark = (p) => (
  <svg viewBox="0 0 64 64" aria-hidden="true" {...p}>
    <rect width="64" height="64" rx="18" fill="#4A21A0" />
    <rect x="1" y="1" width="62" height="62" rx="17" fill="none" stroke="#C8A9F4" strokeOpacity="0.5" strokeWidth="1.5" />
    <path d="M17 49V30a15 15 0 0 1 30 0v19" fill="none" stroke="#E9DDFF" strokeWidth="5" strokeLinecap="round" />
    <path d="M26 49V32a6 6 0 0 1 12 0v17Z" fill="#fff" />
  </svg>
);
