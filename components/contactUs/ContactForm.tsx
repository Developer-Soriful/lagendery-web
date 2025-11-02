
import React, { useState, FormEvent } from 'react';
import { MdLocationOn, MdSend } from 'react-icons/md';
import ConnectWithUsSection from './ConnectWithUsSection';

// Tailwind Custom Colors (approximations from the image)
const SECTION_BG_LIGHT = '#F3F8F4';
const PANEL_BG_WHITE = '#FFFFFF';
const BORDER_LIGHT_GREY = '#E0E0E0';
const BUTTON_BG_TEAL = '#036666';

const ContactSection: React.FC = () => {
    // State for form inputs
    const [fullName, setFullName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log({
            fullName,
            email,
            phoneNumber,
            message,
        });
        alert('Message sent successfully! (Check console for data)');
        // Optionally clear form fields
        setFullName('');
        setEmail('');
        setPhoneNumber('');
        setMessage('');
    };

    return (
        <section className="" style={{ backgroundColor: SECTION_BG_LIGHT }}>
            <div className="w-full card_style2">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">

                    {/* Left Panel: Send Us a Message (Form) */}
                    <div
                        className="contact_form p-8 sm:p-10 flex flex-col w-full"
                        style={{ backgroundColor: PANEL_BG_WHITE, border: `1px solid ${BORDER_LIGHT_GREY}` }}
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-8">Send Us a Message</h2>

                        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-[18px]">
                            {/* Full Name */}
                            <div>
                                <label htmlFor="fullName" className="block text-gray-700 text-sm font-medium mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-800"
                                    style={{ borderColor: BORDER_LIGHT_GREY }}
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Email Address */}
                            <div>
                                <label htmlFor="emailAddress" className="block text-gray-700 text-sm font-medium mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="emailAddress"
                                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-800"
                                    style={{ borderColor: BORDER_LIGHT_GREY }}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-medium mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel" // Use type="tel" for phone numbers
                                    id="phoneNumber"
                                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-800"
                                    style={{ borderColor: BORDER_LIGHT_GREY }}
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={6} // Approx row count from image
                                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-800 resize-y" // resize-y allows vertical resizing
                                    style={{ borderColor: BORDER_LIGHT_GREY }}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                ></textarea>
                            </div>

                            {/* Send Message Button */}
                            <button
                                type="submit"
                                className="contact_sent  hover:opacity-90 transition-opacity"
                                style={{ backgroundColor: BUTTON_BG_TEAL }}
                            >
                                <span>Send Message</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <g clipPath="url(#clip0_278_929)">
                                            <path d="M10.9019 16.2645C10.9303 16.3356 10.9799 16.3962 11.0438 16.4382C11.1077 16.4802 11.183 16.5017 11.2595 16.4998C11.336 16.4978 11.41 16.4725 11.4717 16.4272C11.5334 16.382 11.5798 16.3189 11.6046 16.2465L16.4796 1.99654C16.5036 1.93009 16.5082 1.85817 16.4928 1.78921C16.4774 1.72024 16.4427 1.65709 16.3928 1.60713C16.3428 1.55716 16.2797 1.52246 16.2107 1.50709C16.1417 1.49171 16.0698 1.49629 16.0034 1.52029L1.75335 6.39529C1.68098 6.42011 1.61792 6.46648 1.57266 6.52817C1.52739 6.58986 1.50208 6.66392 1.50012 6.74041C1.49816 6.8169 1.51965 6.89216 1.5617 6.95609C1.60375 7.02001 1.66434 7.06955 1.73535 7.09804L7.68285 9.48304C7.87087 9.55832 8.04169 9.67089 8.18503 9.81396C8.32836 9.95704 8.44124 10.1277 8.51685 10.3155L10.9019 16.2645Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M16.3905 1.61023L8.18555 9.81448" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_278_929">
                                                <rect width="18" height="18" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                            </button>
                        </form>
                    </div>

                    {/* Right Panel: Our Service Area */}
                    <div
                        className="contact_form p-8 sm:p-10 flex flex-col w-full"
                        style={{ backgroundColor: PANEL_BG_WHITE, border: `1px solid ${BORDER_LIGHT_GREY}` }}
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-8">Our Service Area</h2>

                        {/* Map Placeholder */}
                        <div
                            className="flex-grow flex flex-col gap-[18px] items-center justify-center rounded-md text-gray-500 text-center p-8 mb-6"
                            style={{ backgroundColor: "#F3F4F6" }} // Use the light green background for the map area
                        >
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                    <path d="M40 20C40 29.986 28.922 40.386 25.202 43.598C24.8554 43.8586 24.4336 43.9995 24 43.9995C23.5664 43.9995 23.1446 43.8586 22.798 43.598C19.078 40.386 8 29.986 8 20C8 15.7565 9.68571 11.6869 12.6863 8.68629C15.6869 5.68571 19.7565 4 24 4C28.2435 4 32.3131 5.68571 35.3137 8.68629C38.3143 11.6869 40 15.7565 40 20Z" stroke="#006C76" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M24 26C27.3137 26 30 23.3137 30 20C30 16.6863 27.3137 14 24 14C20.6863 14 18 16.6863 18 20C18 23.3137 20.6863 26 24 26Z" stroke="#006C76" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <div className='flex flex-col gap-3'>
                                <p className="text-[#374151] text-sm ">We service the entire Clean City area</p>
                                <p className="text-[12px] text-[#6B7280]">Map would be displayed here in production</p>
                            </div>
                        </div>

                        {/* Service Area Description */}
                        <p className="text-gray-600 text-base">
                            We currently service all neighborhoods in Clean City and surrounding
                            areas within a 15-mile radius.
                        </p>
                    </div>

                </div>
            </div>
            {/* this is for  ConnectWithUsSection*/}
            <div>
                <ConnectWithUsSection />
            </div>
        </section>
    );
};

export default ContactSection;