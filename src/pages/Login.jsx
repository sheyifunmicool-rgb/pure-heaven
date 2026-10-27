
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Ticket, ArrowRight } from "lucide-react";
import Pure from "../assets/Pure.png";
import { useTickets } from "../context/Tickets";

const Login = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const customer = {
      fullName: fullName.trim(),
      email: email.trim(),
    };

    localStorage.setItem("customer", JSON.stringify(customer));

    navigate("/");
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080b14] px-4 py-12 text-white">
      <img
        src={Pure}
        alt="Pure Heaven Arena"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />

      <div className="absolute inset-0 bg-[#080b14]/85" />

      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-[#0d1220]/95 p-7 shadow-2xl sm:p-10">
        <Link to="/" className="mb-8 flex items-center justify-center gap-3">
          <div className="rounded-xl bg-amber-400 p-3 text-black">
            <Ticket size={27} />
          </div>

          <div>
            <h1 className="text-xl font-extrabold">
              PURE HEAVEN <span className="text-amber-400">ARENA</span>
            </h1>
            <p className="mt-1 text-[9px] tracking-[0.2em] text-gray-400">
              EXPERIENCE THE EXTRAORDINARY
            </p>
          </div>
        </Link>

        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-amber-400">
            Welcome
          </p>

          <h2 className="text-3xl font-extrabold">Your Details</h2>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            Enter your name and email to make your ticket booking easier.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="fullName"
              className="mb-2 block text-sm font-semibold text-gray-300"
            >
              FULL NAME
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#080b14] px-4 focus-within:border-amber-400">
              <User size={19} className="shrink-0 text-amber-400" />

              <input
                type="text"
                id="fullName"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                autoComplete="name"
                required
                className="w-full bg-transparent py-4 text-sm outline-none placeholder:text-gray-600"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-gray-300"
            >
              GMAIL ADDRESS
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#080b14] px-4 focus-within:border-amber-400">
              <Mail size={19} className="shrink-0 text-amber-400" />

              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@gmail.com"
                autoComplete="email"
                required
                className="w-full bg-transparent py-4 text-sm outline-none placeholder:text-gray-600"
              />
            </div>
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-amber-400 py-4 font-bold text-black transition hover:bg-amber-300"
          >
            LOGIN 
          </button>
        </form>

        <p className="mt-6 text-center text-xs leading-6 text-gray-500">
          Your details will be saved on this browser to help fill in your
          ticket booking form.
        </p>
      </div>
    </div>
  );
};

export default Login;
