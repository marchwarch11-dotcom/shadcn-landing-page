import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";

export const FooterSection = () => {
  return (
    <footer className="container pb-10">
      <Separator />
      <div className="flex flex-col gap-5 py-8 sm:flex-row sm:items-end sm:justify-between">
        <Link href="/#hero" className="text-xl font-semibold tracking-tight sm:text-2xl">
          {siteConfig.name}
        </Link>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
};
