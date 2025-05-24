import React from "react";
import Image from "next/image"

export function AboutContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg mb-8">
            Autoschool Willes is opgericht in 2020. Bij ons kan je op je gemak je rijbewijs halen in een automaat of
            handgeschakeld auto.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Onze missie</h2>
              <p className="text-gray-700">
                Wij streven ernaar om rijlessen toegankelijk, persoonlijk en effectief te maken. Onze missie is om elke
                leerling met vertrouwen en vaardigheid de weg op te laten gaan. We geloven in een ontspannen
                leeromgeving waarin je op je eigen tempo kunt leren.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Onze aanpak</h2>
              <p className="text-gray-700">
                Bij Willes-Rijschool krijg je persoonlijke aandacht en een op maat gemaakt lesprogramma. We passen onze
                lesmethode aan op jouw leerstijl en behoeften. Zo zorgen we ervoor dat je niet alleen slaagt voor je
                examen, maar ook een zelfverzekerde en veilige bestuurder wordt.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Onze instructeurs</h2>
            <p className="text-gray-700 mb-4">
              Onze instructeurs zijn gecertificeerd en hebben jarenlange ervaring in het geven van rijlessen. Ze zijn
              geduldig, vriendelijk en weten precies hoe ze jou kunnen helpen om een goede chauffeur te worden.
            </p>
            <p className="text-gray-700">
              We zijn trots op onze hoge slagingspercentages en de positieve feedback die we van onze leerlingen
              ontvangen. Veel van onze nieuwe leerlingen komen bij ons via aanbevelingen van tevreden klanten.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Onze voertuigen</h2>
            <p className="text-gray-700 mb-4">
              We rijden met moderne, goed onderhouden voertuigen die voorzien zijn van alle benodigde
              veiligheidsvoorzieningen. Je kunt bij ons kiezen tussen lessen in een automaat of een handgeschakelde
              auto, afhankelijk van jouw voorkeur.
            </p>
            <div className="relative h-64 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Willes-Rijschool lesauto"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
