import React from 'react';
import { Images } from '../../src/assets';

const ChooseUs: React.FC = () => {
    const steps = [
        {
            "id": 1,
            "icon": Images.choose,
            "title": "Eco-friendly Process",
            "description": "We use environmentally friendly detergents and machines.",
            "highlight": "energy-efficient"
        },
        {
            "id": 2,
            "icon": Images.choose,
            "title": "Affordable Pricing",
            "description": "Competitive rates with subscription plans to save you even more.",
            "highlight": null
        },
        {
            "id": 3,
            "icon": Images.choose,
            "title": "Real-time Tracking",
            "description": "Monitor your laundry's status from pick-up to delivery in real-time.",
            "highlight": null
        },
        {
            "id": 4,
            "icon": Images.choose,
            "title": "Professional Staff",
            "description": "Trained professionals who handle your clothes with utmost care.",
            "highlight": null
        }
    ]

    return (
        <section className="w-full">
            <div className="flex flex-col gap-[64px]">
                {/* Header Section */}
                <div className="flex flex-col gap-4 items-center text-center">
                    <h1 className="text-[30px] font-bold text-[#2B2B2B]">
                        Why Choose Us
                    </h1>
                    <p className="text-[16px] text-[#4B5563] leading-[28px] lg:w-[574px]">
                        We're committed to providing the highest quality laundry service with convenience and care.
                    </p>
                </div>

                {/* Steps Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[32px]">
                    {steps.map((step, index) => (
                        <div key={index} className="why_choose flex flex-col gap-4">
                            <div>
                                <img src={step.icon} alt="" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-[#2B2B2B] text-[17px] font-bold'>{step.title}</h2>
                                <p className='text-[#4B5563] text-sm'>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;