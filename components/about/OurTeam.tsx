import React from 'react';
import { Images } from '../../src/assets';

const OurTeam: React.FC = () => {
    const steps = [
        {
            image: Images.user,
            title: "John Smith",
            position: "Founder & CEO",
            description: "Quality service is our top priority."
        },
        {
            image: Images.user,
            title: "Sarah Johnson",
            position: "Operations Manager",
            description: "We treat your clothes like our own."
        },
        {
            image: Images.user,
            title: "Robert Lee",
            position: "Customer Service Manager",
            description: "Your satisfaction is our success."
        }
    ];

    return (
        <section className="w-full">
            <div className="flex flex-col gap-[64px]">
                {/* Header Section */}
                <div className="flex flex-col gap-4 items-center text-center">
                    <h1 className="text-[30px] font-bold text-[#2B2B2B]">
                        Our Team
                    </h1>
                </div>

                {/* Steps Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
                    {steps.map((step, index) => (
                        <div key={index} className="how_it_work_card w-full flex gap-[26px] justify-center items-center flex-col text-center p-[32px]">
                            {/* Step Number */}
                            <div className="stepImg2">
                                <img src={step.image} alt="" />
                            </div>
                            <div className='flex flex-col gap-4'>
                                {/* Step Title */}
                                <h3 className="text-[20px] font-semibold text-[#2B2B2B]  tracking-[-0.2px]">
                                    {step.title}
                                </h3>

                                {/* Step Description */}
                                <p className="text-[#666666] text-[15px]">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;