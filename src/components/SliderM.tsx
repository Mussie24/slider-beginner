"use client";
import { useState } from "react";
import Image from "next/image";
import { SliderProps } from "@/lib/types";
import { motion, AnimatePresence } from "framer-motion";

export function SliderM({ sliderPages }: { sliderPages: SliderProps }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = sliderPages.slides.length;

  const currentSlide = sliderPages.slides[currentIndex];
  const { image1, image2 } = currentSlide;

  const nextSlide = () => {
    if (currentIndex < totalSlides - 1) setCurrentIndex(currentIndex + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className="bg-pink-200 mx-20 my-20 min-h-screen px-12 py-16 font-sans text-black relative overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
      >
        <h1 className="text-6xl font-extrabold uppercase">Haus of Honey</h1>
        <p className="text-xl tracking-widest uppercase mt-4 md:mt-0">
          Discover the Families
        </p>
      </motion.div>

      {/* Images */}
      <div className="flex flex-row justify-center items-center gap-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="flex gap-10"
          >
            {image1?.url && (
              <div className="bg-black p-1">
                <Image
                  src={image1.url}
                  alt="Shoe 1"
                  width={image1.width || 300}
                  height={image1.height || 400}
                  className="object-cover"
                />
              </div>
            )}
            {image2?.url && (
              <div className="bg-blue-300 p-1">
                <Image
                  src={image2.url}
                  alt="Shoe 2"
                  width={image2.width || 300}
                  height={image2.height || 400}
                  className="object-cover"
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex justify-between items-end mt-12"
      >
        <div>
          <p className="text-md max-w-sm">
            The Haus of Honey line is a revolution in the imaginative world of heels.
          </p>
          <p className="text-2xl font-extrabold mt-2 uppercase">
            Honey Bubble
          </p>
        </div>
        <div className="text-lg tracking-wide">
          {String(currentIndex + 1).padStart(2, "0")} – {String(totalSlides).padStart(2, "0")}
        </div>
      </motion.div>

      {/* Navigation Arrows */}
      {currentIndex > 0 && (
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 text-4xl"
        >
          ←
        </button>
      )}
      {currentIndex < totalSlides - 1 && (
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 text-4xl"
        >
          →
        </button>
      )}
    </div>
  );
}
