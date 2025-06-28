import React from "react";
import { Link } from "react-router-dom";

export default function CategoryCard({ title, image, link }) {
    return (
        <Link to={link} className="block rounded overflow-hidden shadow hover:shadow-lg transition-shadow mb-6">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-3 bg-white text-center font-semibold text-lg">{title}</div>
        </Link>
    );
}