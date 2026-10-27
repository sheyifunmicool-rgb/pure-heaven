
import { Link } from "react-router-dom";
import Pure from '../assets/Pure.png'
import Events from "../components/EventCard";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Ticket,
  Trophy,
  Music,
  Mic2,
} from "lucide-react";
import events from "../data/events";

const Home = () => {
  const featuredEvents = events.slice(0, 3);

  const categories = [
    { name: "Sports", icon: Trophy },
    { name: "Concerts", icon: Music },
    { name: "Comedy", icon: Mic2 },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0 " style={{backgroundImage: `url(${Pure})`}} >
          <img
            src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=2000&q=85"
            alt="Football stadium filled with fans"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-gray-950/20" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-24 md:grid-cols-2 md:px-10 md:py-32">
          <div>
            <h1 className="text-amber-300 font-bold">MORE THAN JUST A STADIUM</h1>

            <h1 className="mt-7 text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              LIVE THE
              <span className="block text-red-500">MOMENT.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-gray-300 sm:text-lg">
              Your next unforgettable experience starts here.
              Discover live sports, concerts, and entertainment
              at Pure Heaven Arena.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/events"
                className="flex items-center gap-2 rounded-xl bg-red-600 px-6 py-4 font-bold text-white transition hover:bg-red-700"
              >
                Explore Events <ArrowRight size={19} />
              </Link>

              <Link
                to="/my-tickets"
                className="flex items-center gap-2 rounded-xl border border-white/30 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                <Ticket size={19} />
                My Tickets
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <p className="text-3xl font-extrabold">10K+</p>
                <p className="mt-1 text-sm text-gray-400">Happy Fans</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold">50+</p>
                <p className="mt-1 text-sm text-gray-400">Live Events</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold">ONE</p>
                <p className="mt-1 text-sm text-gray-400">Amazing Arena</p>
              </div>
            </div>
          </div>

          
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-10 bg-gray-900">
        <div className="mb-7">
          <p className="text-sm font-bold uppercase tracking-widest text-red-600">
            Find your experience
          </p>
          <h2 className="mt-2 text-3xl font-extrabold">
            Explore by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 b">
          {categories.map(({ name, icon: Icon }) => (
            <Link
              to="/events"
              key={name}
              className="group bg-gray-950 text-amber-50 hover:text-amber-800 flex items-center justify-between rounded-2xl border border-gray-200 p-6 transition hover:border-red-500 hover:bg-red-50"
            >
              <div className="flex items-center gap-4 ">
                <div className="rounded-xl bg-red-100 p-3 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                  <Icon size={25} />
                </div>
                <span className="text-lg font-bold">{name}</span>
              </div>
              <ArrowRight className="text-gray-400 group-hover:text-red-600" />
            </Link>
          ))}
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="bg-gray-900 px-5 py-16 md:px-10">
        <div className="mx-auto max-w-7xl bg-gray-900">
          <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-red-600">
                Don't miss out
              </p>
              
              <p className="mt-3 text-gray-500">
                Find your next great experience.
              </p>
            </div>

            <Link
              to="/events"
              className="flex items-center gap-2 font-bold text-red-600 hover:text-red-700"
            >
              View all events <ArrowRight size={18} />
            </Link>
          </div>

          <Events/>

          <Link
            to="/events"
            className="flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-red-600 transition hover:bg-gray-100"
          >
            Find Your Tickets <ArrowRight size={19} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
