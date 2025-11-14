import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-slate-900 text-white shadow-md px-6 py-4 border-b md:fixed md:top-0 md:left-0 md:right-0 md:z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <h2 className="text-3xl font-bold tracking-wide">VyomGarud</h2>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10 text-lg">
            <li>
              <a href="#about" className="hover:text-orange-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-orange-400">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-orange-400">
                Pricing
              </a>
            </li>
            <li>
              <button className="bg-orange-500 px-4 py-2 rounded-md hover:bg-orange-600 transition">
                Get in Touch
              </button>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden bg-slate-800 mt-3 rounded-md py-4 px-4">
            <ul className="flex flex-col space-y-4 text-lg">
              <li>
                <a href="#about" className="hover:text-orange-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-orange-400">
                  Pricing
                </a>
              </li>
              <li>
                <button className="bg-orange-500 w-full px-4 py-2 rounded-md hover:bg-orange-600 transition">
                  Get in Touch
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
