import React from 'react';
import { ScanFace, Landmark, X, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 px-5 py-6 text-gray-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">

        {/* Logo and Description */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold text-white">
            Pure Heaven <span className="text-yellow-500">Arena</span>
          </h2>
          <p className="mt-1 max-w-xs text-xs leading-5">
            Your destination for live sports, concerts and unforgettable moments.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs">
          <a href="/" className="transition hover:text-yellow-500">Home</a>
          <a href="/events" className="transition hover:text-yellow-500">Events</a>
          <a href="/tickets" className="transition hover:text-yellow-500">Tickets</a>
          <a href="/about" className="transition hover:text-yellow-500">About</a>
          <a href="/contact" className="transition hover:text-yellow-500">Contact</a>
        </div>

        {/* Socials and Email */}
        <div className="flex items-center gap-4">
          <a href="mailto:support@pureheavenarena.com" aria-label="Email"
            className="transition hover:text-yellow-500">
            <Mail size={17} />
          </a>
          <a href="#" aria-label="Facebook"
            className="transition hover:text-yellow-500">
            <ScanFace size={17} />
          </a>
          <a href="#" aria-label="Instagram"
            className="transition hover:text-yellow-500">
            <Landmark size={17} />
          </a>
          <a href="#" aria-label="Twitter"
            className="transition hover:text-yellow-500">
            <X size={17} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto mt-5 max-w-7xl border-t border-slate-800 pt-4 text-center text-[11px]">
        © {new Date().getFullYear()} Pure Heaven Arena. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;