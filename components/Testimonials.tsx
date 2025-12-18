"use client";

import React, { useEffect, useState, useMemo, useRef } from "react";
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
  const [itemsPerSlide, setItemsPerSlide] = useState(2);
  const [slideVisible, setSlideVisible] = useState(true);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 50;
  const slideTimeoutRef = useRef<number | null>(null);

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

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 639px)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      setItemsPerSlide(e.matches ? 1 : 2);
    };
    handler(mq);
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerSlide, testimonials.length]);

  useEffect(() => {
    return () => {
      if (slideTimeoutRef.current) window.clearTimeout(slideTimeoutRef.current);
    };
  }, []);

  const slides: Testimonial[][] = useMemo(() => {
    const s: Testimonial[][] = [];
    for (let i = 0; i < testimonials.length; i += itemsPerSlide) {
      s.push(testimonials.slice(i, i + itemsPerSlide));
    }
    return s;
  }, [testimonials, itemsPerSlide]);

  if (!testimonials.length) return null;

  const safeIndex = Math.min(currentIndex, Math.max(0, slides.length - 1));
  const currentSlide = slides[safeIndex] || [];

  const changeSlide = (newIndex: number) => {
    if (slideTimeoutRef.current) window.clearTimeout(slideTimeoutRef.current);
    setSlideVisible(false);
    slideTimeoutRef.current = window.setTimeout(() => {
      setCurrentIndex(newIndex);
      setSlideVisible(true);
      slideTimeoutRef.current = null;
    }, 180);
  };

  const prev = () => {
    changeSlide(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const next = () => {
    changeSlide(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    if (itemsPerSlide !== 1) return;
    touchEndX.current = null;
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (itemsPerSlide !== 1) return;
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    if (itemsPerSlide !== 1) return;
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) next();
      else prev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
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

        <div
          className="relative"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-6 min-h-[220px] transform transition-all duration-200 ease-in-out ${
              slideVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          >
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
              const key = t._id || `${t.name}-${t.place}`;

              return (
                <article
                  key={key}
                  className="border border-[#efe7e2] rounded-lg p-6 shadow-sm flex flex-col bg-white"
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
          <div className="hidden sm:flex absolute inset-y-0 -left-12 z-20 items-center">
            <button
              onClick={prev}
              aria-label="Précédent"
              className="pointer-events-auto bg-white/90 backdrop-blur-sm hover:bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg ring-1 ring-[#e9dcd1] text-[#5C4033] transition-transform duration-150 transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          </div>

          <div className="hidden sm:flex absolute inset-y-0 -right-12 z-20 items-center">
            <button
              onClick={next}
              aria-label="Suivant"
              className="pointer-events-auto bg-white/90 backdrop-blur-sm hover:bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg ring-1 ring-[#e9dcd1] text-[#5C4033] transition-transform duration-150 transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

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
