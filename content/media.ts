export type MediaSection =
  | "hero"
  | "seasonal-experience"
  | "memberships"
  | "services"
  | "member-credits"
  | "service-priority"
  | "about"
  | "team"
  | "real-work"
  | "testimonials"
  | "commercial"
  | "snow"
  | "final-cta";

export interface MediaSource {
  provider: "Pexels";
  photographer: string;
  pageUrl: string;
}

export interface MediaAsset {
  section: MediaSection;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  temporary?: boolean;
  source?: MediaSource;
}

export const media = {
  "hero-primary": {
    section: "hero",
    src: "/garitas-temp/hero/hero-temp-01.jpg",
    alt: "Temporary stock photograph of a maintained residential property and lawn",
    temporary: true,
    source: {
      provider: "Pexels",
      photographer: "Max Vakhtbovych",
      pageUrl: "https://www.pexels.com/photo/courtyard-of-modern-villa-with-glass-walls-7031604/",
    },
  },
  "season-spring": {
    section: "seasonal-experience",
    src: "/garitas-temp/seasons/spring-temp-01.jpg",
    alt: "Temporary stock photograph of a blooming landscaped spring garden",
    temporary: true,
    source: {
      provider: "Pexels",
      photographer: "Serhii Volyk",
      pageUrl: "https://www.pexels.com/photo/blooming-spring-garden-16500525/",
    },
  },
  "season-summer": {
    section: "seasonal-experience",
    src: "/garitas-temp/seasons/summer-temp-01.jpg",
    alt: "Temporary stock photograph of a green summer lawn and trees",
    temporary: true,
    source: {
      provider: "Pexels",
      photographer: "Egor Komarov",
      pageUrl: "https://www.pexels.com/photo/trees-on-a-green-lawn-in-summer-16805356/",
    },
  },
  "season-fall": {
    section: "seasonal-experience",
    src: "/garitas-temp/seasons/fall-temp-01.jpg",
    alt: "Temporary stock photograph of a landscaped garden with autumn foliage",
    temporary: true,
    source: {
      provider: "Pexels",
      photographer: "Olena Bohovyk",
      pageUrl: "https://www.pexels.com/photo/garden-in-autumn-19102762/",
    },
  },
  "season-winter": {
    section: "seasonal-experience",
    src: "/garitas-temp/seasons/winter-temp-01.jpg",
    alt: "Temporary stock photograph of a snow-covered residential yard",
    temporary: true,
    source: {
      provider: "Pexels",
      photographer: "Joshua Miranda",
      pageUrl: "https://www.pexels.com/photo/suburban-settlement-cottages-during-snowy-winter-day-4272164/",
    },
  },
  "services-lawn-care": {
    section: "services",
    src: "/garitas-temp/services/services-temp-01.jpg",
    alt: "Temporary stock photograph of lawn mowing at a residential property",
    temporary: true,
    source: {
      provider: "Pexels",
      photographer: "PROSPER MBEMBA KOUTIHOU",
      pageUrl: "https://www.pexels.com/photo/mower-28180214/",
    },
  },
  "services-garden-care": {
    section: "services",
    src: "/garitas-temp/services/services-temp-02.jpg",
    alt: "Temporary stock photograph of garden trimming and plant care",
    temporary: true,
    source: {
      provider: "Pexels",
      photographer: "Anna Shvets",
      pageUrl: "https://www.pexels.com/photo/man-trimming-the-leaves-5027602/",
    },
  },
  "about-pair": {
    section: "about",
    src: "/garitas-temp/about/about-temp-01.jpg",
    alt: "Temporary stock photograph of two professionals outdoors; not Alex or Raimundo",
    temporary: true,
    source: {
      provider: "Pexels",
      photographer: "Ketut Subiyanto",
      pageUrl: "https://www.pexels.com/photo/photo-of-a-man-and-a-woman-in-a-business-attire-4963425/",
    },
  },
  "team-crew": {
    section: "team",
    src: "/garitas-temp/team/team-temp-01.jpg",
    alt: "Temporary stock photograph of a maintenance crew working outdoors; not the Garitas team",
    temporary: true,
    source: {
      provider: "Pexels",
      photographer: "Sóc Năng Động",
      pageUrl: "https://www.pexels.com/photo/urban-gardening-crew-maintaining-lush-city-park-35065154/",
    },
  },
  "work-lawn": {
    section: "real-work",
    src: "/garitas-temp/work/work-temp-01.jpg",
    alt: "Temporary stock photograph of lawn care work; not Garitas work",
    temporary: true,
    source: {
      provider: "Pexels",
      photographer: "Magic K",
      pageUrl: "https://www.pexels.com/photo/a-person-cutting-grass-with-a-lawn-mower-6728925/",
    },
  },
  "work-garden": {
    section: "real-work",
    src: "/garitas-temp/work/work-temp-02.jpg",
    alt: "Temporary stock photograph of garden maintenance; not Garitas work",
    temporary: true,
    source: {
      provider: "Pexels",
      photographer: "Anna Shvets",
      pageUrl: "https://www.pexels.com/photo/man-with-pruner-cultivating-green-plant-5231137/",
    },
  },
  "commercial-property": {
    section: "commercial",
    src: "/garitas-temp/commercial/commercial-temp-01.jpg",
    alt: "Temporary stock photograph of a landscaped commercial building exterior",
    temporary: true,
    source: {
      provider: "Pexels",
      photographer: "Czapp Árpád",
      pageUrl: "https://www.pexels.com/photo/office-building-11176809/",
    },
  },
  "snow-removal": {
    section: "snow",
    src: "/garitas-temp/snow/snow-temp-01.jpg",
    alt: "Temporary stock photograph of snow-removal work; not Garitas work",
    temporary: true,
    source: {
      provider: "Pexels",
      photographer: "www.kaboompics.com",
      pageUrl: "https://www.pexels.com/photo/close-up-of-man-plowing-the-driveway-with-a-red-snow-shovel-6952447/",
    },
  },
} satisfies Record<string, MediaAsset>;

export const prototypeVisuals = {
  hero: "hero-primary",
  seasons: {
    spring: "season-spring",
    summer: "season-summer",
    fall: "season-fall",
    winter: "season-winter",
  },
  services: ["services-lawn-care", "services-garden-care"],
  about: "about-pair",
  team: "team-crew",
  realWork: ["work-lawn", "work-garden"],
  commercial: "commercial-property",
  snow: "snow-removal",
} as const;
