
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
 console.log(form)
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
   ;
   
    // Demo only: no message is sent to a server.
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section className="min-h-screen bg-gray-100 px-4 py-12 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="font-semibold uppercase tracking-widest text-red-600">
            We are here for you
          </p>
          <h1 className="mt-3 text-4xl font-extrabold">
            Contact Us
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-gray-500">
            Have a question about tickets, upcoming events, or your booking?
            Send us a message.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-5 rounded-2xl bg-gray-950 p-8 text-white">
            <h2 className="text-2xl font-bold">Get in touch</h2>

            <p className="text-gray-400">
              Our team is ready to help make your next event unforgettable.
            </p>

            <div className="flex items-start gap-4 pt-4">
              <Mail className="text-red-500" />
              <div>
                <p className="font-semibold">Email</p>
                <a
                  href="mailto:support@pureheavenarena.com"
                  className="text-gray-400 hover:text-white"
                >
                  support@pureheavenarena.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-red-500" />
              <div>
                <p className="font-semibold">Phone</p>
                <a
                  href="tel:+2348000000000"
                  className="text-gray-400 hover:text-white"
                >
                  Add your official phone number
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-red-500" />
              <div>
                <p className="font-semibold">Our venue</p>
                <p className="text-gray-400">
                  Pure Heaven Arena
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl bg-white p-8 shadow"
          >
            <h2 className="text-2xl font-bold">Send us a message</h2>

            {submitted && (
              <p
                role="status"
                className="rounded-lg bg-green-100 p-3 text-sm text-green-800"
              >
                 submitted successfully. message was sent.
              </p>
            )}

            <input
              required
              placeholder="Your full name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="w-full rounded-lg border p-3 outline-none focus:border-red-500"
            />

            <input
              required
              type="email"
              placeholder="Your email address"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full rounded-lg border p-3 outline-none focus:border-red-500"
            />

            <textarea
              required
              rows="5"
              placeholder="How can we help you?"
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full resize-y rounded-lg border p-3 outline-none focus:border-red-500"
            />

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              Send Message <Send size={17} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
