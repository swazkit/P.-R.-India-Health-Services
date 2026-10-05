import { Link } from "@tanstack/react-router";
import { HeartPulse, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/healthcare-team", label: "Healthcare Team" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="container-site">
        <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
          <Link
            to="/"
            className="flex min-w-0 items-center gap-2.5"
            aria-label="P. R. India Health Services — Home"
            onClick={() => setOpen(false)}
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
              <HeartPulse className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-sm font-bold leading-tight text-foreground sm:text-base">
                P. R. India Health Services
              </span>
              <span className="hidden text-[11px] font-medium text-muted-foreground sm:block">
                Professional Critical Care Services at Home
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "text-primary font-semibold" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <Link
              to="/join-team"
              className="text-sm font-semibold text-primary underline-offset-4 transition-colors hover:text-teal hover:underline"
            >
              Join Our Team
            </Link>
            <Link
              to="/request-service"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-colors hover:bg-navy"
            >
              Request a Service
            </Link>
          </div>

          <button
            type="button"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border text-foreground lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-border bg-background lg:hidden">
          <nav className="container-site flex flex-col gap-1 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                activeProps={{ className: "bg-secondary text-primary font-semibold" }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-border pt-4">
              <Link
                to="/request-service"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-3 text-base font-semibold text-primary-foreground"
                onClick={() => setOpen(false)}
              >
                Request a Service
              </Link>
              <Link
                to="/join-team"
                className="inline-flex items-center justify-center rounded-lg border border-primary px-4 py-3 text-base font-semibold text-primary"
                onClick={() => setOpen(false)}
              >
                Join Our Team
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
