import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/about';
import Events from '../pages/Events';
import Checkout from '../pages/Checkout';
import MyTickets from '../pages/MyTickets';
import Contact from '../pages/contact';
import Login from '../pages/MyTickets';

const Routers = () => {
  return (
    <div>
      <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/checkout/:id" element={<Checkout />} />
              <Route path="/my-tickets" element={<MyTickets />} />
              <Route path="/contact" element={<Contact />} />
              <Route path='/about' element={<About/>}/>
              <Route path="/login" element={<Login />} />

              <Route
                path="*"
                element={
                  <div className="p-16 text-center">
                    <h1 className="text-3xl font-bold">
                      404 — Page not found
                    </h1>
                  </div>
                }
              />
            </Routes>
    </div>
  )
}

export default Routers