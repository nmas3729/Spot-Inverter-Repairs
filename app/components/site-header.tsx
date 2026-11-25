"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import SpotLogo from "./spot-logo";
import WhatsAppIcon from "./whatsapp-icon";

export default function SiteHeader({ whatsappUrl }: { whatsappUrl: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <SpotLogo />
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#expertise">Expertise</a>
          <a href="#approach">Our approach</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          className="header-cta"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon size={17} />
          WhatsApp enquiry
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
      <nav
        className={`mobile-nav${menuOpen ? " is-open" : ""}`}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <a href="#expertise" onClick={closeMenu}>
          Expertise
        </a>
        <a href="#approach" onClick={closeMenu}>
          Our approach
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
        <a
          className="mobile-nav-cta"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          <WhatsAppIcon size={17} />
          WhatsApp enquiry
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
