"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { primaryNav, serviceLinks } from "@/lib/nav";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const [home, about, ...rest] = primaryNav;

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-white/95 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto max-w-content px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo-icon.png"
              alt=""
              width={36}
              height={36}
              className="h-9 w-9"
              priority
            />
            <span className="text-lg font-bold tracking-tight text-brand-ink">
              BRACEWorks
              <span className="text-brand-navy"> - Cloud &amp; AI Security</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link href={home.href} className="text-sm font-medium text-brand-ink hover:text-brand-navy">
              {home.label}
            </Link>
            <Link href={about.href} className="text-sm font-medium text-brand-ink hover:text-brand-navy">
              {about.label}
            </Link>

            <div className="relative" ref={servicesRef}>
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((open) => !open)}
                className="flex items-center gap-1 text-sm font-medium text-brand-ink hover:text-brand-navy"
              >
                Services
                <ChevronDown aria-hidden="true" className="h-4 w-4" />
              </button>
              {servicesOpen && (
                <div className="absolute left-1/2 top-full mt-2 w-80 -translate-x-1/2 rounded-md border border-brand-border bg-white p-2 shadow-lg">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setServicesOpen(false)}
                      className="block rounded-md px-3 py-2 text-sm text-brand-ink hover:bg-brand-bg hover:text-brand-navy"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {rest.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-ink hover:text-brand-navy"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-brand-ink md:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? (
              <X aria-hidden="true" className="h-6 w-6" />
            ) : (
              <Menu aria-hidden="true" className="h-6 w-6" />
            )}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-brand-border pb-4 md:hidden">
            <div className="flex flex-col gap-1 pt-2">
              <Link
                href={home.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-brand-ink hover:bg-brand-bg"
              >
                {home.label}
              </Link>
              <Link
                href={about.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-brand-ink hover:bg-brand-bg"
              >
                {about.label}
              </Link>

              <button
                type="button"
                aria-expanded={mobileServicesOpen}
                onClick={() => setMobileServicesOpen((open) => !open)}
                className="flex items-center justify-between rounded-md px-2 py-2 text-left text-sm font-medium text-brand-ink hover:bg-brand-bg"
              >
                Services
                <ChevronDown
                  aria-hidden="true"
                  className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="flex flex-col gap-1 pl-4">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-md px-2 py-2 text-sm text-brand-muted hover:bg-brand-bg hover:text-brand-navy"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}

              {rest.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-2 py-2 text-sm font-medium text-brand-ink hover:bg-brand-bg"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
