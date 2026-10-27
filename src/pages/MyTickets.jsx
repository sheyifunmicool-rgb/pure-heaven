
import { Link } from "react-router-dom";
import { CalendarDays, MapPin, Ticket } from "lucide-react";
import { useTickets } from "../context/Tickets";

function MyTickets() {
  const { tickets } = useTickets();

  return (
    <section className="min-h-screen bg-gray-100 px-4 py-10 md:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold">My Tickets</h1>
          <p className="mt-2 text-gray-500">
            View your Pure Heaven Arena demo bookings.
          </p>
        </div>

        {tickets.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center shadow">
            <Ticket className="mx-auto mb-4 text-red-600" size={48} />
            <h2 className="text-xl font-bold">No tickets yet</h2>
            <p className="mt-2 text-gray-500">
              Find an event and book your first ticket.
            </p>
            <Link
              to="/events"
              className="mt-6 inline-block rounded-lg bg-red-600 px-6 py-3 font-semibold text-white"
            >
              Explore Events
            </Link>
          </div>
        ) : (
          <div className="space-y-5">
            {tickets.map((ticket) => (
              <div
                key={ticket.ticketId}
                className="overflow-hidden rounded-2xl bg-white shadow md:flex"
              >
                <img
                  src={ticket.image}
                  alt={ticket.title}
                  className="h-52 w-full object-cover md:h-auto md:w-56"
                />

                <div className="flex-1 space-y-3 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h2 className="text-xl font-bold">{ticket.title}</h2>
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                      standard show entry
                    </span>
                  </div>

                  <p className="flex items-center gap-2 text-sm text-gray-600">
                    <CalendarDays size={16} />
                    {ticket.date} · {ticket.time}
                  </p>

                  <p className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={16} />
                    {ticket.location}
                  </p>

                  <p className="text-sm text-gray-600">
                    Booking ID: {ticket.ticketId}
                  </p>

                  <p className="font-semibold">
                    {ticket.quantity} ticket(s) · ₦
                    {(ticket.price * ticket.quantity).toLocaleString()}
                  </p>

                  <p className="text-sm text-gray-500">
                    Booked by {ticket.customer.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default MyTickets;
