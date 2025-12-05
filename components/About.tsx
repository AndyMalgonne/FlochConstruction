import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-serif font-bold text-[#5C4033] mb-4">À Propos de Nous</h2>
          <p className="text-[#6b5a53] mb-4">Artisan maçon et carreleur avec plus de 18 ans d'expérience dans le Golfe de Saint-Tropez et ses alentours. Nous réalisons des travaux de qualité, du choix des matériaux à la finition.</p>
          <p className="text-[#6b5a53] mb-4">Nous intervenons dans un rayon d'environ 40 km autour de Saint‑Tropez pour vos chantiers résidentiels et professionnels.</p>
          <ul className="list-disc ml-5 text-[#7b6053] space-y-2">
            <li>Devis gratuit et visite technique</li>
            <li>Matériaux locaux et durables</li>
            <li>Garantie décennale</li>
          </ul>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg">
            <Image src="/Alan1.jpeg" alt="artisan" width={600} height={500} className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;