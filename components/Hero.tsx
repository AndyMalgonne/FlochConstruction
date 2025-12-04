import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-[#f8f3ef] to-white pt-24 sm:pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#5C4033] leading-tight">
            Maçonnerie & <br className="hidden sm:block" />
            <span className="text-[#b38b6d]">Carrelage d'Excellence</span>
          </h1>
          <p className="text-base sm:text-lg text-[#7b6053] leading-relaxed max-w-lg mx-auto lg:mx-0">
            Artisan expert en maçonnerie et carrelage dans le Golfe de Saint-Tropez. Plus de 18 ans d'expérience au service de vos projets.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#portfolio" className="inline-flex items-center justify-center gap-3 bg-[#b38b6d] text-white px-6 py-3 rounded-lg shadow hover:bg-[#a07b62] transition">
              Voir nos réalisations
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-3 border border-[#d9c6b8] text-[#7b6053] px-6 py-3 rounded-lg hover:bg-[#f6efe9] transition">
              Devis gratuit
            </a>
          </div>

          <div className="flex justify-center lg:justify-start gap-6 sm:gap-8 text-sm text-[#7b6053] pt-4">
            <div>
              <div className="text-xl sm:text-2xl font-bold">15+</div>
              <div className="text-xs">Années d'expérience</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold">300+</div>
              <div className="text-xs">Projets réalisés</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold">100%</div>
              <div className="text-xs">Clients satisfaits</div>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md lg:max-w-lg">
          <div className="w-full rounded-2xl shadow-2xl overflow-hidden ring-1 ring-[#efe7e2]">
            <Image
              src="/voiture.png"
              alt="Maison en pierre"
              width={920}
              height={560}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}