
import { createContext, useContext, useState } from "react";

const TicketContext = createContext();

export function TicketProvider({ children }) {
  const [eVent, setEVent ] =useState('');
  const [eve, setEve] =useState('')
   const savedCustomer = JSON.parse(
    localStorage.getItem("customer") || "{}"
  );

  const [customer, setCustomer] = useState(savedCustomer);

  const updateCustomer = (fullName, email) => {
    const customerDetails = {
      fullName,
      email,
    };

    setCustomer(customerDetails);

    localStorage.setItem(
      "customer",
      JSON.stringify(customerDetails)
    );
  };
  const [tickets, setTickets] = useState(() => {
    try  {
      return JSON.parse(localStorage.getItem("phaTickets")) || [];
    } catch {
      return [];
    }
  });

  function purchaseTicket(event, quantity, customer) {
    const newTicket = {
      ticketId: `PHA-${Date.now()}`,
      eventId: event.id,
      title: event.title,
      image: event.image,
      date: event.date,
      time: event.time,
      location: event.location,
      price: event.price,
      quantity,
      customer,
      purchasedAt: new Date().toISOString(),
    };

    setTickets((previous) => {
      const updated = [...previous, newTicket];
      localStorage.setItem("phaTickets", JSON.stringify(updated));
      return updated;
    });
  }

  return (
    <TicketContext.Provider value={{ setCustomer, customer, updateCustomer, eVent, setEVent, tickets, purchaseTicket }}>
      {children}
    </TicketContext.Provider>
  );
}

export function useTickets() {
  return useContext(TicketContext);
}
