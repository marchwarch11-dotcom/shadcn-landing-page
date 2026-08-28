"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-4 z-40 mx-auto mt-4 flex w-[calc(100%-2rem)] max-w-6xl items-center justify-between rounded-full border border-border/80 bg-background/85 px-3 py-2 shadow-[0_14px_45px_-30px_hsl(var(--foreground))] backdrop-blur-xl sm:px-4">
      <Link
        href="/#hero"
        className="rounded-full px-2 py-1 text-sm font-semibold tracking-tight sm:text-base"
      >
        {siteConfig.name}
      </Link>

      <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
        {siteConfig.navigation.map(({ href, label }) => (
          <Button key={href} asChild variant="ghost" size="sm" className="rounded-full">
            <Link href={href}>{label}</Link>
          </Button>
        ))}
      </nav>

      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="rounded-full"
              aria-label="Open navigation"
            >
              <Menu className="size-5" aria-hidden="true" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="flex flex-col bg-background">
            <SheetHeader className="text-left">
              <SheetTitle>{siteConfig.name}</SheetTitle>
            </SheetHeader>
            <Separator />
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {siteConfig.navigation.map(({ href, label }) => (
                <Button
                  key={href}
                  asChild
                  variant="ghost"
                  className="justify-start text-base"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={href}>{label}</Link>
                </Button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
