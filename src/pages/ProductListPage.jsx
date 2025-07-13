import React from "react";
import { useParams, Link } from "react-router-dom";

// Yardımcı slugify fonksiyonu
const slugify = (text) =>
    text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

const productData = {
    livingroom: {
        sofa: [
            { id: 1, name: "Luxury Sofa 1", price: "₺8.999", image: "/images/sofa1.jpg" },
            { id: 2, name: "Luxury Sofa 2", price: "₺7.499", image: "/images/sofa2.jpg" },
            { id: 3, name: "Luxury Sofa 3", price: "₺3.499", image: "/images/sofa3.jpg" },
            { id: 4, name: "Luxury Sofa 4", price: "₺2.325", image: "/images/sofa4.jpg" },
            { id: 5, name: "Luxury Sofa 5", price: "₺4.409", image: "/images/sofa5.jpg" },
            { id: 6, name: "Luxury Sofa 6", price: "₺2.685", image: "/images/sofa6.jpg" },
            { id: 7, name: "Luxury Sofa 7", price: "₺1.499", image: "/images/sofa7.jpg" },
            { id: 8, name: "Luxury Sofa 8", price: "₺4.499", image: "/images/sofa8.jpg" },
            { id: 9, name: "Luxury Sofa 9", price: "₺3.999", image: "/images/sofa9.jpg" },
            { id: 10, name: "Luxury Sofa 10", price: "₺2.199", image: "/images/sofa10.jpg" },
            { id: 11, name: "Luxury Sofa 11", price: "₺2.687", image: "/images/sofa11.jpg" },
            { id: 12, name: "Luxury Sofa 12", price: "₺3.499", image: "/images/sofa12.jpg" },
        ],
        armchair: [
            { id: 3, name: "Comfort Armchair", price: "₺3.200", image: "/images/armchair1.jpg" },
        ],
        coffeetable: [
            { id: 4, name: "Modern Coffee Table", price: "₺2.100", image: "/images/coffeetable1.jpg" },
        ],
    },
};

const ProductListPage = ({ onAddToCart }) => {
    const { category, group } = useParams();

    const groups = productData?.[category];
    if (!groups) {
        return <div className="text-center mt-10 text-red-600">Category not found.</div>;
    }

    // Slugify karşılaştırması ile gerçek key’i bul
    const actualGroupKey = Object.keys(groups).find(
        (key) => slugify(key) === group
    );

    const products = groups?.[actualGroupKey];

    if (!products) {
        return <div className="text-center mt-10 text-red-600">No products found for this group.</div>;
    }

    return (
        <section className="px-4 py-10 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 capitalize">{actualGroupKey} Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white shadow rounded overflow-hidden hover:shadow-md transition">
                        <Link to={`/shop/${category}/${group}/${product.id}`}>
                            <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
                        </Link>
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-700">{product.name}</h2>
                            <p className="text-green-600 font-bold mb-2">{product.price}</p>
                            <button
                                onClick={() => onAddToCart(product)}
                                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductListPage;
