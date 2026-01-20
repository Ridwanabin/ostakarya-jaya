"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const phoneNumber = "6285536661166"; 
  // ⚠️ GANTI dengan nomor WhatsApp kamu (format internasional, tanpa +)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `
Halo Ostakarya Jaya,

Nama: ${name}
Email: ${email}

Pesan:
${message}
    `;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
                    <p className="text-center text-yellow-500 font-semibold tracking-widest mb-4">
              ABOUT US
            </p>
        <Reveal>
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-4">
            Contact Us
          </h2>
        </Reveal>

        <Reveal>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Let’s discuss your project. Contact our team directly via WhatsApp.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* INFO */}
          <Reveal>
            <div className="space-y-8">
              
              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 text-blue-800" />
                <div>
                  <h4 className="text-lg font-semibold text-blue-900">
                    Office Address
                  </h4>
                  <p className="text-gray-600">
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-8 h-8 text-blue-800" />
                <div>
                  <h4 className="text-lg font-semibold text-blue-900">
                    WhatsApp
                  </h4>
                  <p className="text-gray-600">
                    +628161871888
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-8 h-8 text-blue-800" />
                <div>
                  <h4 className="text-lg font-semibold text-blue-900">
                    Email
                  </h4>
                  <p className="text-gray-600">
                    priratri@gmail.com
                  </p>
                </div>
              </div>

            </div>
          </Reveal>

          {/* FORM */}
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="bg-white p-10 rounded-2xl shadow-lg space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-700 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-700 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-700 outline-none"
                />
              </div>

              <button
                type="submit"
                className="
                  w-full bg-green-600 text-white py-4 rounded-lg 
                  font-semibold flex items-center justify-center gap-2
                  hover:bg-green-700 transition
                "
              >
                Send via WhatsApp
                <Send className="w-5 h-5" />
              </button>
            </form>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
