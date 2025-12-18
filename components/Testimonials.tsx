"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "../sanity/lib/client";
import { urlFor } from "../sanity/lib/image";

type Testimonial = {
  _id?: string;
  name: string;
  place?: string;
  quote: string;
  img?: any;
};

export default function TestimonialsCarousel() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let mounted = true;

    client
      .fetch(
        `*[_type == "testimonial"] | order(_createdAt desc){_id, name, place, quote, img}`
      )
      .then((res: Testimonial[]) => {
        if (!mounted) return;

        const limited = res.slice(0, 8);
        setTestimonials(limited);
      })
      .catch((err) => console.error("Error fetching testimonials:", err));

    return () => {
      mounted = false;
    };
  }, []);

  if (!testimonials.length) return null;

  // Créer les slides 2 par 2
  const slides: Testimonial[][] = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    slides.push(testimonials.slice(i, i + 2));
  }

  const safeIndex = Math.min(currentIndex, slides.length - 1);
  const currentSlide = slides[safeIndex] || [];

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#5C4033] mb-2">
          Témoignages Clients
        </h2>
        <p className="text-[#6b5a53] mb-8 text-sm sm:text-base">
          Découvrez ce que nos clients pensent de notre travail
        </p>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {currentSlide.map((t) => {
              const hasImage = Boolean(t.img);
              let imageUrl: string | null = null;

              if (t.img) {
                const imgAny = t.img as any;
                const hasAssetRef =
                  Boolean(imgAny?.asset?._ref) ||
                  Boolean(imgAny?._ref) ||
                  Boolean(imgAny?.asset?._id);

                if (hasAssetRef) {
                  try {
                    const builder = urlFor(imgAny);
                    if (builder && typeof builder.width === "function") {
                      imageUrl = builder.width(160).height(160).url();
                    }
                  } catch {
                    imageUrl = null;
                  }
                }
              }

              const cardBg = hasImage ? "bg-white" : "bg-[#efe7e2]";
              const key = t._id || `${t.name}-${t.place}`;

              return (
                <article
                  key={key}
                  className={`${cardBg} border border-[#efe7e2] rounded-lg p-6 shadow-sm flex flex-col`}
                  aria-label={`Témoignage de ${t.name}`}
                >
                  <div>
                    <div className="mb-3 text-[#b38b6d] text-lg" aria-hidden>
                      ★★★★★
                    </div>
                    <p className="text-[#7b6053] leading-relaxed mb-4">
                      “{t.quote}”
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden ring-1 ring-[#efe7e2]">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={t.name}
                          width={48}
                          height={48}
                          className="object-cover"
                          unoptimized
                        />
                      ) : (
                        <div className="w-full h-full bg-[#efe7e2]" />
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-[#5C4033]">{t.name}</div>
                      <div className="text-sm text-[#9b8578]">{t.place}</div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-8 z-10">
            <button
              onClick={prev}
              className="bg-[#b38b6d] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#a3734f]"
            >
              ‹
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-8 z-10">
            <button
              onClick={next}
              className="bg-[#b38b6d] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#a3734f]"
            >
              ›
            </button>
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === safeIndex ? "bg-[#b38b6d]" : "bg-[#d9cfc6]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
