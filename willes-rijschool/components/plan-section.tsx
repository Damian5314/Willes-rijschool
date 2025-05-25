import Image from "next/image"
import Link from "next/link"

export function PlanSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64">
              <Image src="/badge.png" alt="De VerkeersAcademie Badge" fill className="object-contain" />
            </div>
          </div>

          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Plan uw rijlessen bij ons</h2>
            <p className="text-gray-700 mb-6">
              Je rijbewijs halen bij Willes-Rijschool is comfortabel en professioneel. Altijd veilig en vertrouwd. Wij
              kijken goed naar de persoon, wat je capaciteiten zijn, we leveren rijlessen op maat en stemmen deze op
              jouw of op basis daarvan bekijken wij jouw verbeterpunten om succesvol te slagen. Met onze app Plan and Go
              voorbereiden we jouw op wat gaan komen en garanderen dat je het gaat halen.
            </p>

            <ul className="space-y-2 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>€ 20 korting per rijles van 90 min.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>GRATIS theorie online</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>GRATIS herexamen als je zakt</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Betalen in termijnen mogelijk</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Meerdere rijlessen per week</span>
              </li>
            </ul>

            <Link
              href="/tarieven"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-colors inline-block"
            >
              BEKIJK PAKKETTEN
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
