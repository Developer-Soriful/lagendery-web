// src/components/Footer.tsx

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';

// Tailwind color guess: dark teal background, light teal for the button
const DARK_TEAL = '#006C76';
const LIGHT_TEAL = '#00AFAA';

// --- Data for Links/Contacts ---
const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Packages', href: '#' },
    { name: 'Contact Us', href: '#' },
];

const socialLinks = [
    { icon: FaFacebookF, href: '#' },
    { icon: FaTwitter, href: '#' },
    { icon: FaInstagram, href: '#' },
    { icon: FaEnvelope, href: '#' },
];


const Footer: React.FC = () => {
    return (
        <footer className="card_style bg-dark-teal text-white" style={{ backgroundColor: DARK_TEAL }}>
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Column 1: LaundryGo Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">LaundryGo</h3>
                        <p className="text-sm opacity-90 mb-4 pr-10">
                            Your reliable laundry pick-up and delivery service. We make laundry day stress-free.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((Link, index) => (
                                <a key={index} href={Link.href} className="text-white hover:opacity-80 transition-opacity">
                                    <Link.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="hover:underline opacity-90">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Us */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center space-x-2 opacity-90">
                                <MdPhone size={16} />
                                <span>(123) 456-7890</span>
                            </div>
                            <div className="flex items-center space-x-2 opacity-90">
                                <MdEmail size={16} />
                                <span>info@laundrygo.com</span>
                            </div>
                            <div className="flex items-start space-x-2 opacity-90">
                                <MdLocationOn size={16} className="mt-1" />
                                <address className="not-italic">
                                    123 Laundry Lane, Cleanville, CL 12345
                                </address>
                            </div>
                            <div className="flex items-center space-x-2 pt-1 opacity-90">
                                <span role="img" aria-label="Clock">🕒</span>
                                <span>Mon-Sat: 8AM - 8PM</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
                        <p className="text-sm opacity-90 mb-3">
                            Subscribe for updates and offers
                        </p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full p-3 text-sm bg-[#fff] text-[#CCCCCC] rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                                aria-label="Email subscription input"
                            />
                            <button
                                type="submit"
                                className="w-full p-3 text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
                                style={{ backgroundColor: LIGHT_TEAL, color: 'white' }}
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>

                {/* --- Divider and Copyright --- */}
                <hr className="my-8 border-t border-white border-opacity-30" />

                <div className="text-center text-xs opacity-80">
                    &copy; 2025 LaundryGo. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;