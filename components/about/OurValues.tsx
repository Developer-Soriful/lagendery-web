import React from 'react';
import { Images } from '../../src/assets';

const OurValues: React.FC = () => {
    const steps = [
        {
            "id": 1,
            "icon": Images.choose,
            "title": "Trust",
            "description": "We build lasting relationships through honesty and transparency in all our dealings.",
            "highlight": "energy-efficient"
        },
        {
            "id": 2,
            "icon": Images.choose,
            "title": "Quality",
            "description": "We maintain the highest standards in our cleaning processes and service delivery.",
            "highlight": null
        },
        {
            "id": 3,
            "icon": Images.choose,
            "title": "Punctuality",
            "description": "We respect your time and ensure timely pick-up and delivery of your laundry.",
            "highlight": null
        },
        {
            "id": 4,
            "icon": Images.choose,
            "title": "Customer Focus",
            "description": "We put our customers first and strive to exceed your expectations with every order.",
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
                        <div key={index} className="why_choose3 flex flex-col gap-4">
                            <div className='flex justify-center items-center gap-2'>
                                <div>
                                    <img src={step.icon} alt="" />
                                </div>
                                <h2 className='text-[#2B2B2B] text-[17px] font-bold'>{step.title}</h2>
                            </div>
                            <p className='text-[#4B5563] text-sm'>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurValues;