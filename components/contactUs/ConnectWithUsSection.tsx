import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { MdCall, MdEmail } from 'react-icons/md';

const SECTION_BG_WHITE = '#FFFFFF';
const ICON_BG_TEAL = '#036666';
const ICON_SIZE = 20;

const ConnectWithUsSection: React.FC = () => {
    // Array of social links
    const socialLinks = [
        { icon: FaFacebookF, href: 'https://facebook.com/laundrygo', label: 'Facebook' },
        { icon: FaInstagram, href: 'https://instagram.com/laundrygo', label: 'Instagram' },
        { icon: FaTwitter, href: 'https://twitter.com/laundrygo', label: 'Twitter' },
        { icon: MdCall, href: 'tel:+11234567890', label: 'Call Us' },
        { icon: MdEmail, href: 'mailto:info@laundrygo.com', label: 'Email Us' },
    ];

    return (
        <section className="py-16 sm:py-24" style={{ backgroundColor: SECTION_BG_WHITE }}>
            <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
                    Connect With Us
                </h2>

                {/* Social Icons Container */}
                <div className="flex justify-center space-x-4 sm:space-x-6">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            aria-label={link.label}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-colors duration-200 hover:bg-opacity-80"
                            style={{ backgroundColor: ICON_BG_TEAL }}
                        >
                            <link.icon size={ICON_SIZE} />
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ConnectWithUsSection;