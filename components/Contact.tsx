"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSuccessMessage(
      "Thank you, your message has been sent. I will get back to you."
    );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="bg-[#f7f7f7] py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* TITLE */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">CONTACT</h2>
          <div className="w-16 h-1 bg-violet-600 mx-auto mt-4"></div>

          <p className="mt-6 text-gray-700 max-w-3xl mx-auto text-lg">
            If you have any questions, you can use the contact details below or
            fill out the form. I will get back to you as soon as possible.
          </p>
        </div>

        {/* MAP */}
        <div className="mb-12">
          <div className="overflow-hidden rounded-lg shadow-sm border border-gray-200">
            <iframe
              title="Map"
              src="https://www.google.com/maps?q=M%C3%BClheim%20an%20der%20Ruhr,%20Germany&z=13&output=embed"
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 text-xl">
                📍
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Location:
                </h3>
                <p className="text-gray-700 mt-2 leading-7">
                  Mülheim an der Ruhr,
                  <br />
                  Germany
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 text-xl">
                ✉️
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Email:</h3>
                <p className="text-gray-700 mt-2">remybate@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 text-xl">
                📞
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Call:</h3>
                <p className="text-gray-700 mt-2">+49 1520 8520081</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                spellCheck={false}
                className="w-full border border-gray-300 rounded-lg px-4 py-4
                outline-none bg-white text-gray-900 placeholder-gray-500
                focus:ring-2 focus:ring-violet-600 focus:border-violet-600 transition"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                spellCheck={false}
                className="w-full border border-gray-300 rounded-lg px-4 py-4
                outline-none bg-white text-gray-900 placeholder-gray-500
                focus:ring-2 focus:ring-violet-600 focus:border-violet-600 transition"
              />
            </div>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              spellCheck={false}
              className="w-full border border-gray-300 rounded-lg px-4 py-4
              outline-none bg-white text-gray-900 placeholder-gray-500
              focus:ring-2 focus:ring-violet-600 focus:border-violet-600 transition"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={6}
              spellCheck={false}
              className="w-full border border-gray-300 rounded-lg px-4 py-4
              outline-none bg-white text-gray-900 placeholder-gray-500
              focus:ring-2 focus:ring-violet-600 focus:border-violet-600 transition resize-none"
            ></textarea>

            <div className="pt-4 flex justify-center md:justify-start">
              <button
                type="submit"
                className="bg-gradient-to-r from-violet-600 to-purple-600
                hover:from-violet-700 hover:to-purple-700
                text-white font-semibold px-10 py-4 rounded-full transition shadow-md"
              >
                Send Message
              </button>
            </div>

            {successMessage && (
              <p className="text-green-600 font-medium pt-2">
                {successMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}