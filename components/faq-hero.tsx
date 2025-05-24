import React from "react";


export function FaqHero() {
    return (
      <section className="relative h-[300px] flex items-center justify-center">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-black/50 z-0"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          }}
        />
  
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">FAQ</h1>
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto">
            Wil je meer informatie? Of heb je vragen? Neem dan contact op met onze rijschool.
          </p>
        </div>
      </section>
    )
  }
  