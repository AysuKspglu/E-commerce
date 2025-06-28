import React, { useState } from "react";
import { Menu, Search, } from "lucide-react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* Üst Navbar */}
            <div className="hidden md:flex justify-between items-center bg-green-600 text-white text-xs px-4 py-2">
                <div className="flex gap-4">
                    <span> (0232) 231 46 18 </span>
                    <span> minthome@gmail.com </span>
                </div>
                <div className="text-center font-semibold">
                    Follow us and get a chance to win 80% off
                </div>
                <div className="flex gap-2">
                    <span>Follow Us: </span>

                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter"></i>
                </div>
            </div>
            {/* Ana Navbar */}
            <header className="flex justify-between items-center px-4 py-3 border-b shadow-sm bg-white">
                <div className="text-xl font-bold text-gray-900">Mint Home </div>

                {/*Masaüstü Menü*/}
                <nav className="hidden md:flex gap-6 text-sm text-gray-600 font-medium">

                    <a href="#">Home</a>
                    <a href="#">Shop</a>
                    <a href="#">About</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact</a>
                    <a href="#">Pages</a>

                </nav>

                <div className="flex items-center gap-4">
                    <Search className="w-5 h-5 text-gray-600" />
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        <Menu className="w-6 h-6 text-gray-600" />
                    </button>
                </div>
            </header>

            {/* Mobil Menü */}
            {menuOpen && (
                <nav className=" flex flex-col gap-4 px-4 py-3 bg-white border-b text-gray-800 text-sm font-medium md:hidden">

                    <a href="#">Home</a>
                    <a href="#">Shop</a>
                    <a href="#">About</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact</a>
                    <a href="#">Pages</a>

                </nav >
            )}
        </>
    );
};

export default Header;