
import { BrowserRouter, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Routers from "./approutes/routers";

import { TicketProvider } from "./context/Tickets";

function AppContent() {
  const navigate = useNavigate();

  const customer = JSON.parse(
    localStorage.getItem("customer") || "null"
  );

  const handleLogout = () => {
    localStorage.removeItem("customer");

    toast.success("Logged out successfully");
    navigate("/login");
  };

  if (!customer) {
    return <Login />;
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <Navbar onLogout={handleLogout} />

      <main className="flex-1">
        <Routers />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <TicketProvider>
      <BrowserRouter>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
          }}
        />
        <AppContent />
      </BrowserRouter>
    </TicketProvider>
  );
}

export default App;
