import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";

export const FooterSection = () => {
  return (
    <footer className="container py-12 sm:py-16">
      <div className="rounded-2xl border border-secondary bg-card p-8 sm:p-10">
        <Link href="/" className="text-xl font-bold">
          {siteConfig.name}
        </Link>
        <Separator className="my-6" />
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.name}.
        </p>
      </div>
    </footer>
  );
};
