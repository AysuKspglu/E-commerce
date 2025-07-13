import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const slides = [
    {
        image: "images/Slider-1.jpg",
        title: "Refresh Your Home",
        subtitle: "Refresh your living space with stylish and functional designs",
    },
    {
        image: "images/Slider-2.jpg",
        title: "Elevate Your Kitchen Experience",
        subtitle: "Elevate every recipe with a touch of elegance",
    },
    {
        image: "images/Slider-3.jpg",
        title: "Indulge in Elegance",
        subtitle: "Create a sanctuary of relaxation and style",
    },
    {
        image: "images/Slider-4.jpg",
        title: "Serenity Starts Here",
        subtitle: "Elevate your sleep with soft textures and calming designs.",
    },
];

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow"
            >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow"
            >
                <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Slider Content */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                >
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-start p-6 sm:p-12 lg:p-16">
                        <div
                            className="text-white max-w-xl"
                            data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                        >
                            <h2 className="text-3xl sm:text-5xl font-bold mb-3 leading-tight">
                                {slide.title}
                            </h2>
                            <p className="text-base sm:text-lg mb-5">{slide.subtitle}</p>
                            <Link
                                to="/shop"
                                className="inline-flex items-center gap-2 bg-white text-green-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 hover:scale-105 transition-transform duration-300"
                            >
                                <ShoppingBag className="w-5 h-5" />
                                Shop Now
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HeroSlider;
