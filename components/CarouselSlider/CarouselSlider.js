"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./splide-custom.css";

const CarouselSlider = ({ imagedetail }) => {
  return (
    <motion.div
      className="container my-10 px-4 lg:px-0"
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.8, type: "keyframes" }}
    >
      <Splide
        options={{
          rewind: true,
          autoplay: true,
          type: "loop",
          pauseOnHover: true,
          autoHeight: true,
        }}
        aria-label="Portfolio"
        className="border-2 border-neutral-700 rounded-[28px]"
      >
        {imagedetail.map((image) => (
          <SplideSlide key={image.alt}>
            <Image
              width={1920}
              height={1080}
              src={image.link}
              className="rounded-[24px]"
              alt={image.alt}
            />
          </SplideSlide>
        ))}
      </Splide>
    </motion.div>
  );
};

export default CarouselSlider;
