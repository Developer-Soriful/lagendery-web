import { NavLink } from "react-router";
import { Images } from "../../src/assets";
import { useState } from "react";

const NavBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navData = [
        {
            "id": 1,
            "label": "Home",
            "href": "/"
        },
        {
            "id": 2,
            "label": "About Us",
            "href": "/about"
        },
        {
            "id": 3,
            "label": "Packages",
            "href": "/packages"
        },
        {
            "id": 4,
            "label": "FAQ",
            "href": "/faq"
        },
        {
            "id": 5,
            "label": "ContactUs",
            "href": "/contact-us"
        },
        {
            "id": 6,
            "image": Images.user,
            "label": "My Account",
            "href": "/my-account"
        }
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="bg-[#F3F8F4] relative">
            <div className="flex justify-between items-center h-[64px] px-4 md:px-[62.5px] py-4">
                {/* Brand */}
                <div>
                    <img className="w-[100] h-[34px]" src={Images.logo2} alt="" />
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex gap-[32px] text-sm text-[#2B2B2B]">
                    {
                        navData.map((data: any) => {
                            return (
                                <div key={data.id} className="flex justify-center items-center gap-2">
                                    {data.image && (
                                        <div>
                                            <img src={data.image} alt="" />
                                        </div>
                                    )}
                                    <NavLink
                                        to={data.href}
                                        className={({ isActive }) =>
                                            isActive ? 'text-[#006C76]' : ''
                                        }
                                    >
                                        {data.label}
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-[#2B2B2B] z-50"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div
                className={`md:hidden absolute top-[64px] left-0 w-full bg-[#F3F8F4] shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="flex flex-col px-4 py-4 gap-4 text-sm text-[#2B2B2B]">
                    {
                        navData.map((data: any) => {
                            return (
                                <div key={data.id} className="flex items-center gap-2 py-2">
                                    {data.image && (
                                        <div>
                                            <img src={data.image} alt="" />
                                        </div>
                                    )}
                                    <NavLink
                                        to={data.href}
                                        onClick={closeMenu}
                                        className={({ isActive }) =>
                                            isActive ? 'text-[#006C76]' : ''
                                        }
                                    >
                                        {data.label}
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;