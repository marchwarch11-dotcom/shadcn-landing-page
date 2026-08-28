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
  navigation: [
    { href: "/#memberships", label: "Memberships" },
    { href: "/#services", label: "Services" },
    { href: "/#about", label: "About" },
    { href: "/#snow", label: "Snow" },
  ],
  contact: {
    phoneE164: null,
    whatsappNumberE164: null,
  },
};
