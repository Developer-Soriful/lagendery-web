

import React from 'react';
import { Images } from '../../src/assets';
import OurProcess from "./OurProcess"
import OurValues from "./OurValues"
const About: React.FC = () => {
    return (
        <div>
            <section className="bg-white py-16 sm:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
                        About Our Laundry Service
                    </h2>

                    {/* Description Paragraph */}
                    <p className="text-lg text-gray-600 leading-relaxed mb-12">
                        Our laundry pick-up and delivery service brings convenience right to your doorstep. With
                        just a few clicks, you can schedule, track, and manage your laundry from home. We use
                        eco-friendly detergents, modern machines, and trained professionals to ensure your
                        clothes receive the care they deserve.
                    </p>

                    {/* Image */}
                    <div>
                        <img src={Images.about} alt="" />
                    </div>

                </div>
            </section>
            {/* this for our mission and vission section */}
            <div className='grid grid-cols-1 gap-[48px] md:grid-cols-2 lg:gap-12 bg-[#F3F8F4] py-[80px] px-[62.5px]'>
                {/* Card 1: Our Mission */}
                <div className="why_choose2 flex fleco gap-6 flex-col">
                    <div className='stepImg'>
                        {/* Set a size for the icon/image */}
                        <img src={Images.misson} alt="Mission icon" className="w-16 h-16 object-contain" />
                    </div>
                    <div className='flex flex-col gap-4'>
                        {/* Using standard Tailwind text colors and sizes */}
                        <h2 className='text-xl text-gray-800 font-bold'>Our Mission</h2>
                        <p className='text-base text-gray-600'>
                            To simplify your laundry experience with reliable, affordable, and quality service. We aim to give you back your time by taking care of one of life's most necessary but time-consuming chores.
                        </p>
                    </div>
                </div>

                <div className="why_choose2 flex fleco gap-6 flex-col">
                    <div className='stepImg2'>
                        {/* Set a size for the icon/image */}
                        <img src={Images.vission} alt="Vision icon" className="w-16 h-16 object-contain" />
                    </div>
                    <div className='flex flex-col gap-4'>
                        {/* Using standard Tailwind text colors and sizes */}
                        <h2 className='text-xl text-gray-800 font-bold'>Our Vision</h2>
                        <p className='text-base text-gray-600'>
                            To be the leading eco-friendly laundry service provider, setting the standard for quality, sustainability, and customer satisfaction in every community we serve.
                        </p>
                    </div>
                </div>

            </div>


            {/* this is for Our process part */}
            <div className='card_style'>
                <OurProcess />
            </div>
            {/* this is for our values section */}
            <div className='card_style2'>
                <OurValues />
            </div>
        </div>
    );
};

export default About