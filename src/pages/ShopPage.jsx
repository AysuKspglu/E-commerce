import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const categories = [
    {
        id: "livingroom",
        name: "Living Room",
        image: "/images/livingroom.jpg",
        groups: [
            "Armchair",
            "Sofa",
            "Bookcase",
            "Chair",
            "Coffee Table",
            "Chest of Drawers",
        ],
    },
    {
        id: "bedroom",
        name: "Bedroom",
        image: "/images/bedroom.jpg",
        groups: ["Bed", "Wardrobe", "Nightstand"],
    },
    {
        id: "kitchen",
        name: "Kitchen",
        image: "/images/kitchen.jpg",
        groups: ["Dining Table", "Cabinet", "Chair"],
    },
    {
        id: "bathroom",
        name: "Bathroom",
        image: "/images/bathroom.jpg",
        groups: ["Mirror", "Cabinet", "Laundry Basket"],
    },
];

const ShopPage = () => {
    const [expanded, setExpanded] = useState(null);
    const history = useHistory(); // ✅ küçük harfle ve doğru isim

    const toggleCategory = (id) => {
        setExpanded(expanded === id ? null : id);
    };

    return (
        <section className="w-full px-4 py-10 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Shop by Category</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categories.map((cat) => (
                        <div key={cat.id}>
                            <div
                                onClick={() => toggleCategory(cat.id)}
                                className="bg-white shadow hover:shadow-lg rounded overflow-hidden cursor-pointer transition"
                            >
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 text-center">
                                    <h2 className="text-lg font-semibold text-gray-700">{cat.name}</h2>
                                </div>
                            </div>

                            {/* Alt gruplar */}
                            {expanded === cat.id && (
                                <div className="mt-4 ml-2">
                                    {cat.groups.map((group) => (
                                        <div
                                            key={group}
                                            onClick={() =>
                                                history.push(
                                                    `/shop/${cat.id}/${group
                                                        .toLowerCase()
                                                        .replace(/\s+/g, "-")}`
                                                )
                                            }
                                            className="cursor-pointer text-sm text-blue-600 hover:underline mb-1"
                                        >
                                            {group}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShopPage;
