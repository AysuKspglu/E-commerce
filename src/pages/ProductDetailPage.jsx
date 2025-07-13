import React from "react";
import { useParams } from "react-router-dom";

// Slugify yardımcı fonksiyon
const slugify = (text) =>
    text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

const productData = {
    livingroom: {
        sofa: [
            {
                id: 1,
                name: "Luxury Sofa 1",
                price: "₺8.999",
                image: "/images/sofa1.jpg",
                description: "High-quality luxury sofa."
            },
            {
                id: 2,
                name: "Luxury Sofa 2",
                price: "₺7.499",
                image: "/images/sofa2.jpg",
                description: "Stylish and modern."
            },
            {
                id: 3,
                name: "Luxury Sofa 3",
                price: "₺7.499",
                image: "/images/sofa3.jpg",
                description: "Stylish and modern."
            },
        ],
        // Diğer gruplar eklenebilir
    },
};

const ProductDetailPage = () => {
    const { category, group, productId } = useParams();

    const groups = productData?.[category];
    if (!groups) return <div className="text-center mt-10 text-red-600">Category not found.</div>;

    // URL'den gelen slugify edilmiş group adını gerçek key’e eşleştir
    const actualGroupKey = Object.keys(groups).find(
        (key) => slugify(key) === group
    );

    const productGroup = groups?.[actualGroupKey] || [];
    const product = productGroup.find((p) => p.id === Number(productId));

    if (!product) {
        return <div className="text-center mt-10 text-red-600">Product not found.</div>;
    }

    return (
        <section className="max-w-4xl mx-auto px-4 py-10">
            <div className="flex flex-col md:flex-row gap-8">
                <img src={product.image} alt={product.name} className="w-full md:w-1/2 rounded" />
                <div className="flex-1">
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <p className="text-xl text-green-600 font-semibold mb-4">{product.price}</p>
                    <p className="text-gray-700 mb-6">{product.description}</p>
                    <button className="bg-green-600 text-white py-3 px-6 rounded hover:bg-green-700">
                        Add to Cart
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductDetailPage;
