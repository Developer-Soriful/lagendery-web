import React from 'react';
import { Images } from '../../src/assets';

const OurProcess: React.FC = () => {
    const OurProcessData = [
        {
            "id": 1,
            "icon": Images.process1,
            "title": "Eco-friendly Process",
            "description": "We use environmentally friendly detergents and machines.",
            "highlight": "energy-efficient"
        },
        {
            "id": 2,
            "icon": Images.process2,
            "title": "Affordable Pricing",
            "description": "Competitive rates with subscription plans to save you even more.",
            "highlight": null
        },
        {
            "id": 3,
            "icon": Images.process3,
            "title": "Real-time Tracking",
            "description": "Monitor your laundry's status from pick-up to delivery in real-time.",
            "highlight": null
        },
        {
            "id": 4,
            "icon": Images.process4,
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
                        How It Works
                    </h1>
                    <p className="text-[16px] text-[#4B5563] leading-[28px] lg:w-[574px]">
                        Our simple process makes laundry day a breeze. Just three easy steps and your laundry worries are gone.
                    </p>
                </div>

                {/* Steps Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px]">
                    {OurProcessData.map((data, index) => (
                        <div key={index} className="how_it_work_card2 w-full flex gap-[26px] justify-center items-center flex-col text-center p-[32px]">
                            {/* Step Number */}
                            <div className="stepImg">
                                <img src={data.icon} alt="" />
                            </div>
                            <div className='flex flex-col gap-4'>
                                {/* Step Title */}
                                <h3 className="text-[20px] font-semibold text-[#2B2B2B]  tracking-[-0.2px]">
                                    {data.title}
                                </h3>

                                {/* Step Description */}
                                <p className="text-[#666666] text-[15px]">
                                    {data.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurProcess;