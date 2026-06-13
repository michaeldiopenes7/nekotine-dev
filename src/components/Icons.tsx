import type { SVGProps } from "react";

const base = (props: SVGProps<SVGSVGElement>) => ({
  viewBox: "0 0 24 24",
  "aria-hidden": true as const,
  ...props,
});

export const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base(props)}>
    <path d="M12 3v18" />
    <path d="M3 12h18" />
  </svg>
);

export const ListIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base(props)}>
    <path d="M4 5h16" />
    <path d="M4 12h10" />
    <path d="M4 19h16" />
  </svg>
);

export const ArrowOutIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base(props)}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

export const BarsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base(props)}>
    <path d="M4 19V5" />
    <path d="M4 19h16" />
    <path d="M8 15v-4" />
    <path d="M12 15V8" />
    <path d="M16 15v-6" />
  </svg>
);

export const CardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base(props)}>
    <path d="M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" />
    <path d="M11 18h2" />
  </svg>
);

export const PencilIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base(props)}>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
  </svg>
);

export const MicIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base(props)}>
    <path d="M12 3v10" />
    <path d="M8 7v4a4 4 0 0 0 8 0V7" />
    <path d="M5 11a7 7 0 0 0 14 0" />
    <path d="M12 18v3" />
    <path d="M9 21h6" />
  </svg>
);

export const projectIcons = {
  bars: BarsIcon,
  card: CardIcon,
  pencil: PencilIcon,
  mic: MicIcon,
} as const;
