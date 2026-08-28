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
  provider: "Unsplash";
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
      provider: "Unsplash",
      photographer: "Roger Starnes Sr",
      pageUrl: "https://unsplash.com/photos/t0CsdU0wopU",
    },
  },
  "season-spring": {
    section: "seasonal-experience",
    src: "/garitas-temp/seasons/spring-temp-01.jpg",
    alt: "Temporary stock photograph of a landscaped spring garden",
    temporary: true,
    source: {
      provider: "Unsplash",
      photographer: "QY Liu",
      pageUrl: "https://unsplash.com/photos/184tM0HpxPA",
    },
  },
  "season-summer": {
    section: "seasonal-experience",
    src: "/garitas-temp/seasons/summer-temp-01.jpg",
    alt: "Temporary stock photograph of a green summer lawn and mature trees",
    temporary: true,
    source: {
      provider: "Unsplash",
      photographer: "Arlind Photography",
      pageUrl: "https://unsplash.com/photos/Adml9nvXBqw",
    },
  },
  "season-fall": {
    section: "seasonal-experience",
    src: "/garitas-temp/seasons/fall-temp-01.jpg",
    alt: "Temporary stock photograph of a landscaped garden with fall foliage",
    temporary: true,
    source: {
      provider: "Unsplash",
      photographer: "Sergej Karpow",
      pageUrl: "https://unsplash.com/photos/y2p8sMFHOVs",
    },
  },
  "season-winter": {
    section: "seasonal-experience",
    src: "/garitas-temp/seasons/winter-temp-01.jpg",
    alt: "Temporary stock photograph of a snow-covered residential yard",
    temporary: true,
    source: {
      provider: "Unsplash",
      photographer: "Somesh Harshavardhan",
      pageUrl: "https://unsplash.com/photos/pdaCycH3HuQ",
    },
  },
  "services-lawn-care": {
    section: "services",
    src: "/garitas-temp/services/services-temp-01.jpg",
    alt: "Temporary stock photograph of lawn mowing at a residential property",
    temporary: true,
    source: {
      provider: "Unsplash",
      photographer: "Kenny Perez",
      pageUrl: "https://unsplash.com/photos/67XudSXgB5U",
    },
  },
  "services-garden-care": {
    section: "services",
    src: "/garitas-temp/services/services-temp-02.jpg",
    alt: "Temporary stock photograph of gardening and plant care",
    temporary: true,
    source: {
      provider: "Unsplash",
      photographer: "Emma Renly",
      pageUrl: "https://unsplash.com/photos/wUv846iaFsw",
    },
  },
  "about-pair": {
    section: "about",
    src: "/garitas-temp/about/about-temp-01.jpg",
    alt: "Temporary stock photograph of two professionals outdoors; not Alex or Raimundo",
    temporary: true,
    source: {
      provider: "Unsplash",
      photographer: "Vitaly Gariev",
      pageUrl: "https://unsplash.com/photos/gNCOF0GQ08M",
    },
  },
  "team-crew": {
    section: "team",
    src: "/garitas-temp/team/team-temp-01.jpg",
    alt: "Temporary stock photograph of people working together outdoors; not the Garitas team",
    temporary: true,
    source: {
      provider: "Unsplash",
      photographer: "Ridwan Abdurrohman",
      pageUrl: "https://unsplash.com/photos/jYJBC_S_Cps",
    },
  },
  "work-lawn": {
    section: "real-work",
    src: "/garitas-temp/work/work-temp-01.jpg",
    alt: "Temporary stock photograph of lawn care work; not Garitas work",
    temporary: true,
    source: {
      provider: "Unsplash",
      photographer: "Michael Smith",
      pageUrl: "https://unsplash.com/photos/bsld7GjQwjI",
    },
  },
  "work-garden": {
    section: "real-work",
    src: "/garitas-temp/work/work-temp-02.jpg",
    alt: "Temporary stock photograph of garden maintenance; not Garitas work",
    temporary: true,
    source: {
      provider: "Unsplash",
      photographer: "Jane Thomson",
      pageUrl: "https://unsplash.com/photos/ngHnAXs_5eE",
    },
  },
  "commercial-property": {
    section: "commercial",
    src: "/garitas-temp/commercial/commercial-temp-01.jpg",
    alt: "Temporary stock photograph of a landscaped commercial building exterior",
    temporary: true,
    source: {
      provider: "Unsplash",
      photographer: "Long Chung",
      pageUrl: "https://unsplash.com/photos/7bCsEyLV5Go",
    },
  },
  "snow-removal": {
    section: "snow",
    src: "/garitas-temp/snow/snow-temp-01.jpg",
    alt: "Temporary stock photograph of snow-removal work; not Garitas work",
    temporary: true,
    source: {
      provider: "Unsplash",
      photographer: "Yuriy Vertikov",
      pageUrl: "https://unsplash.com/photos/dqhC2Oh1Ps4",
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
