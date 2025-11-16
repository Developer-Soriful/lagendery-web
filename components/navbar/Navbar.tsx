import { Images } from "../../src/assets";
import { useState } from "react";
import { useAuth } from "../../authentication/UseAuth";
import { LuUserRound } from "react-icons/lu";
import { NavLink } from "react-router";
import AuthCard from "../authPage/AuthCard";

const NavBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const { user } = useAuth() || {};

    const navData = [
        { id: 1, label: "Home", href: "/" },
        { id: 2, label: "About Us", href: "/about" },
        { id: 3, label: "Packages", href: "/packages" },
        { id: 4, label: "FAQ", href: "/faq" },
        { id: 5, label: "ContactUs", href: "/contact-us" },
        { id: 6, image: Images.user, label: "My Account", href: "/my-account" },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const handleOpenModal = () => {
        closeMenu();
        setOpenModal(true);
    };

    return (
        <div className="bg-[#F3F8F4] relative z-30">
            {/* Desktop & Mobile Menu Button */}
            <div className="flex justify-between items-center h-[64px] px-4 md:px-[62.5px] py-4">
                <div>
                    <img className="w-[100] h-[34px]" src={Images.logo2} alt="Logo" />
                </div>

                {/* Desktop */}
                <div className="hidden md:flex gap-[32px] text-sm text-[#2B2B2B]">
                    {navData.map((data) => {
                        if (data.label === "My Account" && !user) return null;
                        return (
                            <NavLink
                                key={data.id}
                                to={data.href}
                                className={({ isActive }) =>
                                    isActive ? "text-[#006C76] flex items-center gap-2" : "flex items-center gap-2"
                                }
                            >
                                {data.image && <LuUserRound />}
                                {data.label}
                            </NavLink>
                        );
                    })}
                    {!user && (
                        <button onClick={handleOpenModal} className="login_sign_btn">
                            Login/Signup
                        </button>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-[#2B2B2B] z-50"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-[64px] left-0 w-full bg-[#F3F8F4] shadow-lg z-40">
                    <div className="flex flex-col px-4 py-4 gap-4 text-sm text-[#2B2B2B]">
                        {navData.map((data) => {
                            if (data.label === "My Account") {
                                if (!user) return null;
                                return (
                                    <button
                                        key={data.id}
                                        onClick={handleOpenModal}
                                        className="flex items-center gap-2 py-2 w-full text-left"
                                    >
                                        {data.image && <img src={data.image} alt="" />}
                                        {data.label}
                                    </button>
                                );
                            }
                        })}
                        {!user && (
                            <button onClick={handleOpenModal} className="login_sign_btn">
                                Login/Signup
                            </button>
                        )}
                    </div>
                </div>
            )}

            {/* Modal */}
            {openModal && (
                <div
                    className="fixed inset-0 bg-black/50 flex justify-center items-center z-[999]"
                    onClick={() => setOpenModal(false)}
                >
                    <div className="lg:w-[30%]" onClick={(e) => e.stopPropagation()}>
                        <AuthCard setOpenModal={setOpenModal} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavBar;