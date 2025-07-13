import React from "react";
import { Link, useParams } from "react-router-dom";

const groupData = {
    livingroom: [
        { id: "armchair", name: "Armchair", image: "/images/armchair.jpg" },
        { id: "sofa", name: "Sofa", image: "/images/sofa.jpg" },
        { id: "bookcase", name: "Bookcase", image: "/images/bookcase.jpg" },
        { id: "chair", name: "Chair", image: "/images/chair.jpg" },
        { id: "coffeetable", name: "Coffee Table", image: "/images/coffeetable.jpg" },
        { id: "chestofdrawers", name: "Chest of Drawers", image: "/images/chestofdrawers.jpg" },
    ],
    // İleride diğer kategoriler de buraya eklenebilir (kitchen, bedroom vs.)
};

const ProductGroupPage = () => {
    const { category } = useParams(); // örneğin: livingroom

    const groups = groupData[category];

    if (!groups) {
        return <div className="text-center mt-10 text-red-600">Category not found.</div>;
    }

    return (
        <section className="px-4 py-10 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 capitalize">{category} Groups</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {groups.map((group) => (
                    <Link to={`/shop/${category}/${group.id}`} key={group.id}>
                        <div className="bg-white shadow hover:shadow-lg rounded overflow-hidden transition cursor-pointer">
                            <img src={group.image} alt={group.name} className="w-full h-48 object-cover" />
                            <div className="p-4 text-center">
                                <h2 className="text-lg font-semibold text-gray-700">{group.name}</h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default ProductGroupPage;