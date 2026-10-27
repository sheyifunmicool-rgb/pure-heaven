
import React from "react";
import tickets from "../data/events";
import { MapPin, CalendarDays } from "lucide-react";

const Events = () => {
  return (
    <section className="bg-slate-950 px-5 py-10 text-white">
      <h2 className="text-sm text-amber-200">Featured Events</h2>
      <h2 className="mb-2 text-3xl font-bold">
        Upcoming <span className="text-yellow-500">Events</span>
      </h2>

      
      <div className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-6 [scrollbar-width:none] ">
        {tickets.map((ticket) => (
          <div 
            key={ticket.id}
            className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-1 hover:border-yellow-500 snap-start min-w-70 h-50"
          >
            <div className="relative">
              <img
                src={ticket.image}
                alt={ticket.title}
                className="h-30 w-full object-cover"
              />

              {ticket.category && (
                <span className="absolute left-3 top-3 rounded-full bg-yellow-500 px-3 py-1 text-xs font-bold text-black">
                  {ticket.category}
                </span>
              )}
            </div>

            <div className="p-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-yellow-500">
                {ticket.category}
              </p>

              <h3 className="mb-3 text-lg font-bold">
                {ticket.title}
              </h3>

              <p className="mb-2 flex items-center gap-2 text-xs text-gray-400">
                <CalendarDays size={15} />
                {new Date(ticket.date + "T12:00:00").toLocaleDateString(
                  "en-GB",
                  { day: "numeric", month: "short", year: "numeric" }
                )}
              </p>

              <p className="mb-4 flex items-center gap-2 text-xs text-gray-400">
                <MapPin size={15} />
                {ticket.venue}
              </p>

              <div className="flex items-center justify-between border-t border-slate-800 pt-4">
                <p className="font-bold text-yellow-500">
                  ₦{ticket.price.toLocaleString("en-NG")}
                </p>

                <button className="rounded-lg bg-yellow-500 px-4 py-2 text-sm font-bold text-black transition hover:bg-yellow-400">
                  Get Ticket
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
