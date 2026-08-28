export interface SiteNavigationItem {
  href: string;
  label: string;
}

interface SiteConfig {
  name: string;
  navigation: SiteNavigationItem[];
  contact: {
    phoneE164: string | null;
    whatsappNumberE164: string | null;
  };
}

export const siteConfig: SiteConfig = {
  name: "Garitas Property Care",
  navigation: [],
  contact: {
    phoneE164: null,
    whatsappNumberE164: null,
  },
};
