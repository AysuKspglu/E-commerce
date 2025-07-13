import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSlider from "../components/HeroSlider"; // Slider bileşeni

const imageList = [
    {
        src: "images/kitchen1.jpg",
        title: "Kitchen",
        span: "md:col-span-2 md:row-span-2",
    },
    {
        src: "images/livingroom.jpg",
        title: "Living Room",
        span: "",
    },
    {
        src: "images/bedroom.jpg",
        title: "Bedroom",
        span: "",
    },
    {
        src: "images/bathroom.jpg",
        title: "Bathroom",
        span: "md:col-span-2",
    },
];

const HomePage = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <div>
            {/* Hero Slider */}
            <HeroSlider />

            {/* Ürün Kartları */}
            <section className="w-full bg-white px-0 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[300px] md:auto-rows-[250px] lg:auto-rows-[300px] px-4 md:px-8">
                    {imageList.map((item, index) => (
                        <div
                            key={index}
                            className={`relative group overflow-hidden rounded-xl ${item.span}`}
                            data-aos="fade-up"
                        >
                            {/* Arka plan görseli */}
                            <img
                                src={item.src}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />

                            {/* Karanlık overlay */}
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300" />

                            {/* Yazılar */}
                            <div className="absolute top-4 left-4 z-10 text-white">
                                <span className="bg-green-600 px-2 py-1 text-xs rounded uppercase tracking-wider">
                                    5 Items
                                </span>
                                <h2 className="text-xl md:text-2xl font-semibold mt-2">
                                    {item.title}
                                </h2>
                                <a
                                    href="#"
                                    className="underline text-sm text-white hover:text-gray-200"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomePage;