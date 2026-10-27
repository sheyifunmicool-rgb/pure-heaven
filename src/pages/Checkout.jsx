
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CalendarDays, MapPin, Ticket } from "lucide-react";
import events from "../data/events";
import { useTickets } from "../context/Tickets";

function Checkout() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { purchaseTicket } = useTickets();
  const customerD = JSON.parse(
  localStorage.getItem("customer") || ""
);
console.log(customerD);


  const event = events.find((item) => String(item.id) === id);

  const [quantity, setQuantity] = useState(1);
  const [customer, setCustomer] = useState({
    name: (customerD.fullName || ""),
    email: (customerD.email || ""),
  });

  if (!event) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Event not found</h1>
        <button
          onClick={() => navigate("/events")}
          className="mt-4 rounded-lg bg-red-600 px-5 py-3 text-white"
        >
          Browse Events
        </button>
      </div>
    );
  }

  const total = event.price * quantity;

  function handleSubmit(e) {
    e.preventDefault();

    purchaseTicket(event, quantity, customer);
    navigate("/my-tickets");
  }

  return (
    <section className="min-h-screen bg-gray-100 px-4 py-10 md:px-10">
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl bg-white shadow">
          <img
            src={event.image}
            alt={event.title}
            className="h-64 w-full object-cover"
          />

          <div className="space-y-4 p-6">
            <span className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-600">
              {event.category}
            </span>

            <h1 className="text-2xl font-bold">{event.title}</h1>

            <p className="flex items-center gap-2 text-gray-600">
              <CalendarDays size={18} />
              {event.date} · {event.time}
            </p>

            <p className="flex items-center gap-2 text-gray-600">
              <MapPin size={18} />
              {event.location}
            </p>

            <p className="text-xl font-bold text-red-600">
              ₦{event.price.toLocaleString()} per ticket
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="h-fit space-y-5 rounded-2xl bg-white p-6 shadow"
        >
          <h2 className="text-2xl font-bold">Checkout</h2>
          <p className="text-sm text-gray-500">
            Enter your details to reserve your tickets.
          </p>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Full name
            </label>
            <input
              required
              value={customer.name}
              onChange={(e) =>
                setCustomer({ ...customer, name: e.target.value })
              }
              placeholder="Enter your full name"
              className="w-full rounded-lg border p-3 outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Email address
            </label>
            <input
              required
              type="email"
              value={customer.email}
              onChange={(e) =>
                setCustomer({ ...customer, email: e.target.value })
              }
              placeholder="you@example.com"
              className="w-full rounded-lg border p-3 outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Number of tickets
            </label>
            <select
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full rounded-lg border p-3"
            >
              {[1, 2, 3, 4, 5, 6].map((number) => (
                <option key={number} value={number}>
                  {number} ticket{number > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-between border-t pt-5">
            <span className="text-gray-600">Total amount</span>
            <span className="text-2xl font-extrabold text-red-600">
              ₦{total.toLocaleString()}
            </span>
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            <Ticket size={18} />
            Confirm Booking
          </button>

          <p className="text-xs text-gray-500">
             payment process is not added yet.
          </p>
        </form>
      </div>
    </section>
  );
}

export default Checkout;
