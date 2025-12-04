import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#5C4033] text-center mb-4 sm:mb-6">
          Nos Services
        </h2>
        <p className="text-center text-[#6b5a53] max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base px-4">
          Une expertise complète pour tous vos projets de construction et rénovation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

          <div className="bg-white border rounded-lg p-6 shadow-sm flex flex-col h-full">
            <div className="mb-3 text-[#b38b6d]">🏠</div>
            <h3 className="font-semibold mb-2">Maçonnerie Générale & Piscine</h3>
            <p className="text-sm text-[#7b6053]">
              Construction générale, ouvrages maçonnés et réalisation de piscines.
            </p>
          </div>

          <div className="bg-white border rounded-lg p-6 shadow-sm flex flex-col h-full">
            <div className="mb-3 text-[#b38b6d]">🧱</div>
            <h3 className="font-semibold mb-2">Carrelage Tous Types de Formats</h3>
            <p className="text-sm text-[#7b6053]">
              Pose de carrelage petit, moyen et grand format, intérieur et extérieur.
            </p>
          </div>

          <div className="bg-white border rounded-lg p-6 shadow-sm flex flex-col h-full">
            <div className="mb-3 text-[#b38b6d]">🏗️</div>
            <h3 className="font-semibold mb-2">Charpentes & Couverture</h3>
            <p className="text-sm text-[#7b6053]">
              Travaux de charpente, toitures, zinguerie et rénovation de couvertures.
            </p>
          </div>

          <div className="bg-white border rounded-lg p-6 shadow-sm flex flex-col h-full">
            <div className="mb-3 text-[#b38b6d]">⛰️</div>
            <h3 className="font-semibold mb-2">
              Pose de Pierre Naturelle & Plaquage en Pierre
            </h3>
            <p className="text-sm text-[#7b6053]">
              Dallage, parement, murs en pierre naturelle et habillages décoratifs.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;