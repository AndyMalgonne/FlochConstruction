import React from "react";
import Image from "next/image";

export default function Hero() {
	return (
		<section id="hero" className="relative bg-[#f8f3ef] pt-24 sm:pt-28 overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
				<div className="space-y-6 text-center lg:text-left">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#5C4033] leading-tight">
						Maçonnerie & <br className="hidden sm:block" />
						<span className="text-[#b38b6d]">Carrelage d'Excellence</span>
					</h1>
					<p className="text-base sm:text-lg text-[#7b6053] leading-relaxed max-w-lg mx-auto lg:mx-0">
						Artisans expert en maçonnerie et carrelage dans le Golfe de Saint-Tropez et ses alentours. Plus de 18 ans d'expérience au service de vos projets. Contactez-nous au :{" "}
						<a href="tel:+33601322997" className="text-[#b38b6d] font-semibold hover:underline">
							06 01 32 29 97
						</a>
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
							<div className="text-xl sm:text-2xl font-bold">18+</div>
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
						<div>
							<div className="text-xl sm:text-2xl font-bold">40 km</div>
							<div className="text-xs">Périmetre d'intervention</div>
						</div>
					</div>
				</div>

				<div className="mx-auto w-full max-w-md lg:max-w-lg mt-8 lg:mt-0">
					<div className="relative w-full h-64 sm:h-80 lg:h-[560px]">
						<div className="absolute top-0 left-0 w-2/3 sm:w-3/5 lg:w-3/5 h-2/3 rounded-3xl overflow-hidden shadow-md ring-1 ring-white lg:-translate-x-6 lg:-translate-y-6 lg:-rotate-2 bg-white">
							<div className="w-full h-full relative">
								<Image
									src="/img/toit6.jpeg"
									alt="Piscine en pierre - projet"
									fill
									className="object-cover"
									priority
								/>
								<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00000006] mix-blend-overlay" />
							</div>
						</div>
						<div className="absolute bottom-0 right-0 w-2/3 sm:w-3/5 lg:w-3/5 h-2/3 rounded-3xl overflow-hidden z-20 lg:rotate-1">
							<div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl ring-2 ring-[#b38b6d]/10">
								<Image
									src="/img/piscine4.jpeg"
									alt="Projet réalisé - détail"
									fill
									className="object-cover"
									priority
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}