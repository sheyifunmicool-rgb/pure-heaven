import Pure from '../assets/Pure.png'
import React from "react";
import {
  Trophy,
  Ticket,
  Users,
  ShieldCheck,
  ArrowRight,
  Star,
  Target,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  console.log(Pure);
  
  const features = [
    {
      icon: <Ticket size={28} />,
      title: "Easy Ticket Booking",
      description:
        "Discover events and book your tickets with a simple, convenient experience.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Trusted Experience",
      description:
        "We aim to make every step of your event booking experience smooth and reliable.",
    },
    {
      icon: <Trophy size={28} />,
      title: "Unforgettable Events",
      description:
        "From exciting sports to live concerts, discover experiences worth remembering.",
    },
    {
      icon: <Users size={28} />,
      title: "Made for Everyone",
      description:
        "Bringing fans, families, and communities together through entertainment.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#080b14] text-white">
      
      {/* Hero Section */}
      <section className="relative flex min-h-[480px] items-center overflow-hidden">
        <img
          src={Pure}
          alt="Pure Heaven Arena stadium"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#080b14] via-[#080b14]/85 to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 md:px-12">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-amber-400">
            Discover Our Story
          </p>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-7xl">
            More Than Events.
            <span className="block text-amber-400">
              We Create Memories.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
            Welcome to Pure Heaven Arena, your destination for live sports,
            electrifying concerts, and extraordinary experiences. We bring
            people together through the moments they love.
          </p>

          <Link
            to="/events"
            className="mt-9 inline-flex items-center gap-3 rounded-lg bg-amber-400 px-7 py-4 font-bold text-black transition hover:bg-amber-300"
          >
            Explore Events <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-12">
        <div>
          <p className="mb-3 font-bold uppercase tracking-[0.25em] text-amber-400">
            Who We Are
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Where Passion Meets
            <span className="text-amber-400"> Entertainment</span>
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            Pure Heaven Arena is built around one simple idea: every great
            event deserves an unforgettable experience. Whether you are
            supporting your favourite team, enjoying a live performance, or
            discovering something new, we want to help you be part of the
            moment.
          </p>

          <p className="mt-4 leading-8 text-gray-400">
            Our platform brings event discovery and ticket booking together
            in one place, helping fans find events, explore ticket options,
            and prepare for experiences that matter to them.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-amber-400/10 p-3 text-amber-400">
                <Heart size={23} />
              </div>
              <div>
                <h3 className="font-bold">Our Passion</h3>
                <p className="text-sm text-gray-500">
                  Creating memorable moments
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-full bg-amber-400/10 p-3 text-amber-400">
                <Target size={23} />
              </div>
              <div>
                <h3 className="font-bold">Our Purpose</h3>
                <p className="text-sm text-gray-500">
                  Connecting people through events
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-2xl border border-amber-400/20" />

          <img
            src={Pure}
            
            alt="The Pure Heaven Arena experience"
            className="relative h-[320px] w-full rounded-2xl object-cover sm:h-[420px]"
          />

          <div className="absolute bottom-5 left-5 rounded-xl border border-white/10 bg-black/75 px-5 py-4 backdrop-blur-md">
            <p className="text-lg font-bold text-amber-400">
              EXPERIENCE THE EXTRAORDINARY
            </p>
            <p className="mt-1 text-sm text-gray-300">
              Every event. Every moment. Every memory.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="border-y border-white/5 bg-[#0d1220] px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-amber-400/20 bg-[#111827] p-8 md:p-10">
            <div className="mb-5 inline-flex rounded-xl bg-amber-400/10 p-4 text-amber-400">
              <Target size={30} />
            </div>

            <h3 className="text-2xl font-bold">Our Mission</h3>

            <p className="mt-4 leading-8 text-gray-400">
              To make discovering and booking event tickets convenient,
              accessible, and enjoyable while helping people connect with
              the sports, music, and entertainment they love.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111827] p-8 md:p-10">
            <div className="mb-5 inline-flex rounded-xl bg-amber-400/10 p-4 text-amber-400">
              <Star size={30} />
            </div>

            <h3 className="text-2xl font-bold">Our Vision</h3>

            <p className="mt-4 leading-8 text-gray-400">
              To become a destination people trust for discovering
              extraordinary events and creating lasting memories with
              friends, family, and fellow fans.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-400">
            The Pure Heaven Difference
          </p>

          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Why Choose Pure Heaven Arena?
          </h2>

          <p className="mt-4 leading-7 text-gray-400">
            We want your journey from discovering an event to getting ready
            for the big day to feel effortless.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-white/10 bg-[#0d1220] p-7 transition duration-300 hover:-translate-y-2 hover:border-amber-400/50"
            >
              <div className="mb-6 inline-flex rounded-xl bg-amber-400/10 p-4 text-amber-400 transition group-hover:bg-amber-400 group-hover:text-black">
                {feature.icon}
              </div>

              <h3 className="text-lg font-bold">{feature.title}</h3>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 pb-20 md:px-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-amber-400/20 bg-gradient-to-br from-[#191b24] to-[#0d1220] px-6 py-14 text-center sm:px-12 sm:py-20">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
            Your Next Experience Awaits
          </p>

          <h2 className="text-3xl font-extrabold sm:text-5xl">
            Be There for the Moment.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
            Find your next favourite event and get ready to make memories
            that last a lifetime.
          </p>

          <Link
            to="/events"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-amber-400 px-8 py-4 font-bold text-black transition hover:scale-105 hover:bg-amber-300"
          >
            Discover Events <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
