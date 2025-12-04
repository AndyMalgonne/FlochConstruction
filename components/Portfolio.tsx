import React from "react";
import Image from "next/image";

const images = [
  "/1.jpeg",
  "/2.jpeg",
  "/3.jpeg",
  "/4.jpeg",
  "/5.jpeg",
  "/6.jpeg",
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20 bg-[#f8f3ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#5C4033] text-center mb-4 sm:mb-6">
          Nos Réalisations
        </h2>
        <p className="text-center text-[#6b5a53] max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base px-4">
          Découvrez quelques-unes de nos plus belles réalisations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {images.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Image
                src={src}
                alt={`project-${i}`}
                width={800}
                height={560}
                className="object-cover w-full h-48 sm:h-56 lg:h-64 hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <a href="#contact" className="inline-block bg-[#b38b6d] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg shadow hover:bg-[#a07b62] transition text-sm sm:text-base">
            Voir nos projets
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;