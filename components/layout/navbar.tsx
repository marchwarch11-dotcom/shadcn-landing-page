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
  const hasNavigation = siteConfig.navigation.length > 0;

  return (
    <header className="sticky top-5 z-40 mx-auto flex w-[90%] max-w-screen-xl items-center justify-between rounded-2xl border border-secondary bg-card p-2 shadow-inner md:w-[80%] lg:w-[75%]">
      <Link href="/" className="px-2 text-lg font-bold">
        {siteConfig.name}
      </Link>

      {hasNavigation ? (
        <>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {siteConfig.navigation.map(({ href, label }) => (
              <Button key={href} asChild variant="ghost" size="sm">
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
                  aria-label="Open navigation"
                >
                  <Menu className="size-5" aria-hidden="true" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="left"
                className="flex flex-col rounded-br-2xl rounded-tr-2xl border-secondary bg-card"
              >
                <SheetHeader className="text-left">
                  <SheetTitle>{siteConfig.name}</SheetTitle>
                </SheetHeader>
                <Separator />
                <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
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
        </>
      ) : null}
    </header>
  );
};
