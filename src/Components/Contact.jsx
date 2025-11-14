import React from "react";

function Contact() {
  return (
    <footer
      id="contact"
      className="bg-slate-900 text-white py-20 px-6 border-t border-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        {/* Contact Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Contact Us
        </h2>

        {/* Contact Form */}
        <form className="mt-10 max-w-2xl mx-auto space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
          ></textarea>

          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 bg-orange-500 text-black font-semibold rounded-md hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form>

        {/* Footer Section */}
        <div className="mt-16 text-center border-t border-slate-800 pt-6">
          <p className="text-gray-400">
            © {new Date().getFullYear()} VyomGarud. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
