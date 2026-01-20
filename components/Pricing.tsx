export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

         <p className="text-center text-yellow-500 font-semibold tracking-widest mb-3">
            PRICE RANGE
          </p>

        <h2 className="text-4xl font-bold text-blue-900 text-center mb-6">
          Estimated Pricing
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
          Transparent pricing estimates to help you plan your interior
          and construction projects.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* CARD 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Residential
            </h3>
            <p className="text-gray-600 mb-6">
              Interior rumah, apartemen, dan private residence.
            </p>
            <p className="text-3xl font-bold text-blue-900">
              Rp 3 – 6 jt
            </p>
            <p className="text-sm text-gray-500 mt-2">per m²</p>
          </div>

          {/* CARD 2 */}
          <div className="bg-blue-900 text-white rounded-xl shadow-lg p-8 scale-105">
            <h3 className="text-xl font-semibold mb-4">
              Commercial
            </h3>
            <p className="opacity-90 mb-6">
              Kantor, retail, showroom, dan fasilitas bisnis.
            </p>
            <p className="text-3xl font-bold">
              Rp 4 – 8 jt
            </p>
            <p className="text-sm opacity-80 mt-2">per m²</p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Hospitality
            </h3>
            <p className="text-gray-600 mb-6">
              Hotel, restaurant, lounge, dan public space.
            </p>
            <p className="text-3xl font-bold text-blue-900">
              Rp 6 – 12 jt
            </p>
            <p className="text-sm text-gray-500 mt-2">per m²</p>
          </div>

        </div>

      </div>
    </section>
  );
}
