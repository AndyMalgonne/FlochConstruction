import React from "react";
import Image from "next/image";

const testimonials = [
	{
		quote:
		"Nous tenons à vous remercier chaleureusement  Mr FLOCH  pour la réalisation du \
		carrelage de notre terrasse ainsi que notre salle de bain ( compliqué je vous l'accorde.) \
		Le chantier a été  réalisé avec un grand professionnalisme,  un soin remarquable,\
		 et un soucis du détail que nous avons particulièrement apprécié.\
		Le résultat est impeccable,  propre et conforme à nos attentes.\
		Merci pour votre sérieux, votre ponctualité,  et votre savoir-faire.",
		name: "Gérard B.",
		place: "Saint-Maxime",
		img: "/testimonials/valerie.png",
	},
	{
	  quote:
		"J’ai connu Floch Construction par le biais d’un ami, \
		  Alan a été réactif pour m’envoyer le devis et s’est adapté au \
		  mieux pour assurer les travaux le plus rapidement possible. Nous souhaitions \
		  refaire tout le carrelage en travertin de notre maison, et faire une ouverture \
		  entre la cuisine et le salon. Nous sommes ravis du résultat ! Et avons recommandé \
		  Alan à notre cercle d’amis.",
	  name: "Marine B-M.",
	  place: "Cogolin",
	  img: "/testimonials/marine.jpeg",
	},
	{
	  quote:
		"Travail impeccable ! Carreleur rapide, soigné et très professionnel. \
		Résultat parfait sur notre carrelage de salle de bain, je recommande vivement.",
	  name: "Agathe G.",
	  place: "Croix Valmer",
	  img: "/testimonials/agathe.jpeg",
	},
	{
		quote:
		"Travail réalisé avec précision. Très satisfaite du résultat.  Et une fois le travail terminé ils ont tout nettoyés . Un Grand Merci.",
		name: "Valerie G.",
		place: "Fréjus",
		img: "/testimonials/valerie.png",
	},
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#5C4033] text-center mb-2">
          Témoignages Clients
        </h2>
        <p className="text-center text-[#6b5a53] max-w-2xl mx-auto mb-8 text-sm sm:text-base px-4">
          Découvrez ce que nos clients pensent de notre travail
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-start">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="bg-white border border-[#efe7e2] rounded-lg p-6 shadow-sm flex flex-col"
              aria-label={`Témoignage de ${t.name}`}
            >
              <div>
                <div className="mb-3 text-[#b38b6d] text-lg" aria-hidden>
                  ★★★★★
                </div>
                <p className="text-[#7b6053] leading-relaxed mb-4">“{t.quote}”</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-1 ring-[#efe7e2]">
                  <Image src={t.img} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-[#5C4033]">{t.name}</div>
                  <div className="text-sm text-[#9b8578]">{t.place}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}