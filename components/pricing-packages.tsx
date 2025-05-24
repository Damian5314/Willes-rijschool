import React from "react";

import Link from "next/link"

export function PricingPackages() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gray-800 text-lg mb-4">
            Hieronder ziet u de tarieven staan voor onze lespakketen, losse rijlessen, examen en BNOR.
          </p>
          <p className="text-blue-600 font-medium">
            Alle lessen worden gehanteerd in blokuren.
            <br />
            <span className="text-gray-600">(2 lessen van 45 min. achter elkaar)</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Package A */}
          <div className="bg-orange-500 rounded-lg overflow-hidden shadow-lg">
            <div className="p-6">
              <h3 className="text-white text-2xl font-bold mb-2 text-center">Pakket A</h3>
              <div className="border-t border-b border-white/30 my-4 py-2"></div>
              <div className="text-white space-y-3 mb-6">
                <p className="text-center">10 Lessen van 45 Min.</p>
                <p className="text-center">* incl. Praktijkexamen à €330,-</p>
              </div>
              <div className="text-center">
                <p className="text-white text-3xl font-bold">€830,-</p>
              </div>
            </div>
            <div className="px-6 pb-6">
              <Link
                href="/contact"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-md transition-colors font-medium"
              >
                PAKKET AANVRAGEN
              </Link>
            </div>
          </div>

          {/* Package B */}
          <div className="bg-orange-500 rounded-lg overflow-hidden shadow-lg">
            <div className="p-6">
              <h3 className="text-white text-2xl font-bold mb-2 text-center">Pakket B</h3>
              <div className="border-t border-b border-white/30 my-4 py-2"></div>
              <div className="text-white space-y-3 mb-6">
                <p className="text-center">20 Lessen van 45 Min.</p>
                <p className="text-center">Betalen in termijnen mogelijk</p>
                <p className="text-center">* incl. Praktijkexamen à €330,-</p>
              </div>
              <div className="text-center">
                <p className="text-white text-3xl font-bold">€1.330,-</p>
              </div>
            </div>
            <div className="px-6 pb-6">
              <Link
                href="/contact"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-md transition-colors font-medium"
              >
                PAKKET AANVRAGEN
              </Link>
            </div>
          </div>

          {/* Package C */}
          <div className="bg-orange-500 rounded-lg overflow-hidden shadow-lg relative">
            <div className="absolute top-0 left-0 right-0 bg-blue-800 text-white text-center py-1 text-sm">
              Meest gekozen pakket
            </div>
            <div className="p-6 pt-10">
              <h3 className="text-white text-2xl font-bold mb-2 text-center">Pakket C</h3>
              <div className="border-t border-b border-white/30 my-4 py-2"></div>
              <div className="text-white space-y-3 mb-6">
                <p className="text-center">35 Lessen van 45 Min.</p>
                <p className="text-center">Gratis proefles</p>
                <p className="text-center">Incl. Theorie online</p>
                <p className="text-center">Incl. Praktijk online</p>
                <p className="text-center">Betalen in termijnen mogelijk</p>
                <p className="text-center">* Incl. Praktijkexamen à €330,-</p>
              </div>
              <div className="text-center">
                <p className="text-white text-3xl font-bold">€2.080,-</p>
              </div>
            </div>
            <div className="px-6 pb-6">
              <Link
                href="/contact"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-md transition-colors font-medium"
              >
                PAKKET AANVRAGEN
              </Link>
            </div>
          </div>

          {/* Package D */}
          <div className="bg-orange-500 rounded-lg overflow-hidden shadow-lg">
            <div className="p-6">
              <h3 className="text-white text-2xl font-bold mb-2 text-center">Pakket D</h3>
              <div className="border-t border-b border-white/30 my-4 py-2"></div>
              <div className="text-white space-y-3 mb-6">
                <p className="text-center">40 Lessen van 45 Min.</p>
                <p className="text-center">Gratis proefles</p>
                <p className="text-center">Incl. Theorie online</p>
                <p className="text-center">Incl. Praktijk online</p>
                <p className="text-center">Betalen in termijnen mogelijk</p>
                <p className="text-center">* Incl. Praktijkexamen à €330,-</p>
              </div>
              <div className="text-center">
                <p className="text-white text-3xl font-bold">€2.330,-</p>
              </div>
            </div>
            <div className="px-6 pb-6">
              <Link
                href="/contact"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-md transition-colors font-medium"
              >
                PAKKET AANVRAGEN
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Rates Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* CBR Rates */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Tarieven CBR</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <span>Praktijkexamen CBR €330,-</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <span>Tussentijdse toets €330,- * optioneel</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <span>Theorie-examen €48,75</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <span>CBR medische verklaring €45,25</span>
              </li>
            </ul>
          </div>

          {/* Driving School Rates */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Tarieven Rijschool</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <span>Losse rijles €55,-</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <span>Proefles €45,- *Gratis bij pakket C & D.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <span>Theorie online cursus €50,-</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <span>Praktijk online cursus €40,-</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
