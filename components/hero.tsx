import Link from "next/link"

export function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-black/40 z-0"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Willes-rijschool</h1>
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-medium mb-12">Waar jij je rijbewijs haalt</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/lespakketen"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            LESPAKKETEN
          </Link>
          <Link
            href="/inschrijven"
            className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-8 rounded-full transition-colors"
          >
            INSCHRIJVEN
          </Link>
        </div>
      </div>
    </section>
  )
}
