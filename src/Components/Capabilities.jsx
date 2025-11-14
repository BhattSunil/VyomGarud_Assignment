import React from "react";

function Capabilities() {
  return (
    <section id="capabilities" className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">Our Capabilities</h2>
        <p className="text-gray-400 mt-3 mb-10 max-w-2xl mx-auto">
          VyomGarud designs and develops high-performance UAV systems for
          defense, surveillance, and autonomous mission operations.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-slate-800 border border-slate-700 p-8 rounded-xl hover:-translate-y-2 transition transform shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Tactical Recon UAV</h3>
            <p className="text-gray-300">
              Long-endurance reconnaissance drones with encrypted communication
              and advanced sensor integration.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-800 border border-slate-700 p-8 rounded-xl hover:-translate-y-2 transition transform shadow-lg">
            <h3 className="text-xl font-semibold mb-3">
              Autonomous Swarm System
            </h3>
            <p className="text-gray-300">
              Multi-UAV cooperative autonomy for coordinated surveillance,
              search, and strategic missions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-800 border border-slate-700 p-8 rounded-xl hover:-translate-y-2 transition transform shadow-lg">
            <h3 className="text-xl font-semibold mb-3">
              Loitering Munition Platform
            </h3>
            <p className="text-gray-300">
              Precision-guided systems with real-time targeting and high-impact
              mission effectiveness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Capabilities;
