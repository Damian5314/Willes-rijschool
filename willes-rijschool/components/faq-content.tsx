"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FaqItemProps {
  question: string
  answer: string
}

function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-medium text-gray-800 hover:text-blue-600 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className="flex-shrink-0 ml-2" /> : <ChevronDown className="flex-shrink-0 ml-2" />}
      </button>
      {isOpen && <div className="mt-2 text-gray-600">{answer}</div>}
    </div>
  )
}

export function FaqContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Rijlessen Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Rijlessen</h2>
          <div className="max-w-3xl mx-auto">
            <FaqItem
              question="Hoe lang duurt een rijles?"
              answer="Een rijles duurt 45 minuten. Wij hanteren blokuren, wat betekent dat je altijd 2 lessen van 45 minuten achter elkaar krijgt (totaal 90 minuten)."
            />
            <FaqItem
              question="Hoeveel rijlessen heb ik nodig?"
              answer="Het aantal benodigde rijlessen verschilt per persoon. Gemiddeld hebben leerlingen tussen de 30-40 lessen nodig om het rijbewijs te halen. Tijdens je eerste lessen kan de instructeur een betere inschatting maken."
            />
            <FaqItem
              question="Kan ik in een automaat of handgeschakelde auto lessen?"
              answer="Ja, bij ons kun je kiezen of je in een automaat of handgeschakelde auto wilt lessen. Let wel op dat met een automaatrijbewijs je later geen handgeschakelde auto mag besturen."
            />
            <FaqItem
              question="Hoe snel kan ik beginnen met lessen?"
              answer="Meestal kunnen we binnen 1-2 weken starten met de rijlessen, afhankelijk van onze planning en jouw beschikbaarheid."
            />
            <FaqItem
              question="Wat moet ik meenemen naar mijn eerste rijles?"
              answer="Voor je eerste rijles heb je alleen je identiteitsbewijs nodig. Zorg dat je comfortabele schoenen draagt die geschikt zijn om auto te rijden."
            />
          </div>
        </div>

        {/* Betaalmogelijkheden Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Betaalmogelijkheden</h2>
          <div className="max-w-3xl mx-auto">
            <FaqItem
              question="Kan ik in termijnen betalen?"
              answer="Ja, bij de pakketten B, C en D is het mogelijk om in termijnen te betalen. We maken hiervoor een betalingsregeling op maat."
            />
            <FaqItem
              question="Welke betaalmethoden accepteren jullie?"
              answer="Je kunt betalen via bankoverschrijving. Na je aanmelding ontvang je een factuur met betalingsinstructies."
            />
            <FaqItem
              question="Wanneer moet ik betalen voor mijn rijlessen?"
              answer="Bij losse lessen betaal je per les. Bij een pakket betaal je het volledige bedrag vooraf of volgens de afgesproken termijnen."
            />
            <FaqItem
              question="Krijg ik geld terug als ik minder lessen nodig heb dan mijn pakket?"
              answer="Als je minder lessen nodig hebt dan in je pakket zitten, krijg je het bedrag voor de niet-gebruikte lessen terug."
            />
            <FaqItem
              question="Zijn er extra kosten naast de lespakketten?"
              answer="In onze pakketten is het praktijkexamen inbegrepen. Eventuele herexamens of extra lessen worden apart in rekening gebracht."
            />
          </div>
        </div>
      </div>
    </section>
  )
}
