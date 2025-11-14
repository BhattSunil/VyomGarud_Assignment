import React from "react";

function Highlights() {
  return (
    <section
      id="highlights"
      className="bg-slate-900 text-white py-16 px-6 border-t border-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Why Choose VyomGarud?
        </h2>

        {/* 3 Highlights */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Bullet 1 */}
          <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">
              Military-Grade Reliability
            </h3>
            <p className="text-gray-300">
              Engineered for high-risk, mission-critical operations.
            </p>
          </div>

          {/* Bullet 2 */}
          <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">
              Autonomous Intelligence
            </h3>
            <p className="text-gray-300">
              Advanced onboard AI for navigation and real-time decision-making.
            </p>
          </div>

          {/* Bullet 3 */}
          <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">
              Precision Engineering
            </h3>
            <p className="text-gray-300">
              High-performance UAV systems built with accuracy and control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
