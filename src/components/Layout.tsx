import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/journey", label: "Our Journey" },
  { to: "/ministries", label: "Ministries" },
  { to: "/leuchtturm", label: "Leuchtturm Youth" },
  { to: "/weekly", label: "Weekly Activities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/prayer", label: "Prayer Request" },
  { to: "/contact", label: "Contact" },
];

const footerLinks = navLinks.filter((l) => l.to !== "/");

export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-charcoal/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/assets/church-logo.jpeg"
              alt="Bethesda Evangelical Church – House of Grace logo"
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="leading-tight">
              <div className="font-serif text-xl text-gold">Bethesda</div>
              <div className="text-[10px] tracking-[0.25em] text-cream/80 uppercase">
                House of Grace
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${isActive ? "text-gold" : "text-cream/70 hover:text-cream"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="lg:hidden text-cream"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {open && (
          <nav className="border-t border-white/10 px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-sm ${isActive ? "text-gold" : "text-cream/70"}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 bg-black/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/assets/church-logo.jpeg"
                alt="Bethesda Evangelical Church – House of Grace logo"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <div className="font-serif text-lg text-gold">Bethesda</div>
                <div className="text-[10px] tracking-[0.2em] text-cream/70 uppercase">
                  House of Grace
                </div>
              </div>
            </Link>
            <p className="mt-4 text-sm text-cream/60">
              Bethesda Evangelical Church — House of Grace.
              <br />
              Transforming lives through Jesus Christ.
            </p>
            <p className="mt-2 text-sm text-cream/60">
              Lange Str. 19A, 49080 Osnabrück, Germany
            </p>
            <a
              href="mailto:besthesdahouseofgrace1010@gmail.com"
              className="mt-2 block text-sm text-gold hover:text-gold-light"
            >
              besthesdahouseofgrace1010@gmail.com
            </a>
          </div>

          <div>
            <h4 className="mb-4 text-xs tracking-[0.2em] text-gold uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream/60 hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs tracking-[0.2em] text-gold uppercase">
              Connect
            </h4>
            <Link
              to="/prayer"
              className="inline-block rounded border border-gold/40 px-4 py-2 text-sm text-gold hover:bg-gold/10"
            >
              Prayer Request
            </Link>
          </div>
        </div>
        <div className="border-t border-white/5 py-4 text-center text-xs text-cream/40">
          © {new Date().getFullYear()} Bethesda Evangelical Church – House of
          Grace. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
