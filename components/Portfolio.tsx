"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const images = [
  "/img/piscine1.jpeg",
  "/img/piscine2.jpeg",
  "/img/piscine5.jpeg",
  "/img/sdb1.jpeg",
  "/img/toit2.jpeg",
  "/img/toit3.jpeg",
];

const SWIPE_THRESHOLD = 50;

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState<number>(0);

  const touchStartX = useRef<number | null>(null);
  const touchCurrentX = useRef<number | null>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "ArrowRight") setCurrent((c) => (c + 1) % images.length);
      if (e.key === "ArrowLeft") setCurrent((c) => (c - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = isOpen ? "hidden" : prev;
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const openViewer = (i: number) => {
    setCurrent(i);
    setIsOpen(true);
  };

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchCurrentX.current = touchStartX.current;
    isDragging.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || touchStartX.current === null) return;
    touchCurrentX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isDragging.current || touchStartX.current === null || touchCurrentX.current === null) {
      touchStartX.current = null;
      touchCurrentX.current = null;
      isDragging.current = false;
      return;
    }

    const dx = touchCurrentX.current - touchStartX.current;
    if (dx > SWIPE_THRESHOLD) {
      prev();
    } else if (dx < -SWIPE_THRESHOLD) {
      next();
    }
    touchStartX.current = null;
    touchCurrentX.current = null;
    isDragging.current = false;
  };

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
            <div
              key={i}
              className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              role="button"
              tabIndex={0}
              onClick={() => openViewer(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") openViewer(i);
              }}
            >
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
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative max-w-5xl w-full mx-auto"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsOpen(false);
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Fermer"
              className="absolute top-4 right-4 z-50 bg-white/90 text-[#5C4033] rounded-full p-2 shadow hover:bg-white"
            >
              ✕
            </button>

            <div className="flex items-center justify-center">
              <button
                onClick={prev}
                aria-label="Précédent"
                className="hidden sm:flex items-center justify-center h-12 w-12 bg-white/80 rounded-full mr-4 hover:bg-white"
              >
                ‹
              </button>

              <div
                className="w-full"
                style={{ touchAction: "pan-y" }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div className="relative w-full flex items-center justify-center">
                  <Image
                    src={images[current]}
                    alt={`project-large-${current}`}
                    width={1600}
                    height={1000}
                    className="object-contain max-h-[80vh] mx-auto"
                  />
                </div>
                <p className="text-center text-sm text-white/90 mt-2">
                  {current + 1} / {images.length}
                </p>
              </div>

              <button
                onClick={next}
                aria-label="Suivant"
                className="hidden sm:flex items-center justify-center h-12 w-12 bg-white/80 rounded-full ml-4 hover:bg-white"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;