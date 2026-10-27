
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {  Ticket, Menu, X } from "lucide-react";
import { useTickets } from "../context/Tickets";
import toast from "react-hot-toast";
import { LogOut } from "lucide-react";

function Navbar() {
   const handleLogout = () => {
    localStorage.removeItem("customer");

    toast.success("You have logged out successfully");
    
    window.location.reload();
  };
  const [isOpen, setIsOpen] = useState(false);
  const {tickets}= useTickets()

  const closeMenu = () => {
    setIsOpen(false);
  };

  const linkStyle = ({ isActive }) =>
    `block transition duration-300 hover:text-amber-400 ${
      isActive ? "text-amber-400" : "text-gray-200"
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-amber-500/20 bg-[#080b14]/95 px-5 py-4 text-white shadow-xl backdrop-blur-md md:px-10">

      <div className="flex items-center justify-between">

        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="font-bold">
          <h1 className="text-xl font-extrabold tracking-wide sm:text-2xl">
            PURE HEAVEN
            <span className="ml-1 text-amber-400">ARENA</span>
          </h1>

          <p className="mt-1 text-[9px] tracking-[0.35em] text-gray-400">
            EXPERIENCE THE EXTRAORDINARY
          </p>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/events" className={linkStyle}>
            Events
          </NavLink>

          <NavLink to="/my-tickets" className={linkStyle}>
            My Tickets
          </NavLink>

          <NavLink to="/contact" className={linkStyle}>
            Contact
          </NavLink>
          <NavLink to="/about" className={linkStyle}>
           About
          </NavLink>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-5">

          <Link
            
            to="/my-tickets"
            aria-label="Shopping cart"
            className="transition hover:text-amber-400 "
          >
            <Ticket size={22}  className="absolute"/>
            <span className="bg-red-600 rounded-full px-1 relative bottom-3 left-2.5 text-sm font-bold">{tickets.length}</span>
          </Link>
          <button
          onClick={handleLogout}
          className="flex shrink-0 items-center gap-2 rounded-lg border border-red-500/40 px-3 py-2 text-sm text-red-400 transition hover:bg-red-500 hover:text-white sm:px-4"
        >
          <LogOut size={17} />
          <span>Logout</span>
        </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-1 transition hover:bg-white/10 hover:text-amber-400 lg:hidden"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
          

        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="mt-5 space-y-1 border-t border-amber-500/20 pt-4 lg:hidden"
        >
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              `${linkStyle({ isActive })} rounded-lg px-4 py-3 hover:bg-white/5`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/events"
            onClick={closeMenu}
            className={({ isActive }) =>
              `${linkStyle({ isActive })} rounded-lg px-4 py-3 hover:bg-white/5`
            }
          >
            Events
          </NavLink>

          <NavLink
            to="/my-tickets"
            onClick={closeMenu}
            className={({ isActive }) =>
              `${linkStyle({ isActive })} rounded-lg px-4 py-3 hover:bg-white/5`
            }
          >
            My Tickets
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              `${linkStyle({ isActive })} rounded-lg px-4 py-3 hover:bg-white/5`
            }
          >
            Contact
          </NavLink >
          <NavLink 
          to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              `${linkStyle({ isActive })} rounded-lg px-4 py-3 hover:bg-white/5`
            }>
            About
          </NavLink>
        </div>
      )}

    </nav>
  );
}

export default Navbar;
