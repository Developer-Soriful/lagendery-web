import React from 'react';
import { Images } from '../../src/assets';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      image: Images.how1,
      title: "Schedule Pick-Up",
      description: "Book a convenient time slot through our website or app. We’ll come to your doorstep to collect your laundry."
    },
    {
      image: Images.how2,
      title: "We Wash & Iron",
      description: "Our professional team carefully washes, irons, and folds your clothes using friendly products."
    },
    {
      image: Images.how3,
      title: "Deliver Fresh Laundry",
      description: "We deliver your clean, fresh-smelling laundry back to your doorstep at your selected time."
    }
  ];

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
          {steps.map((step, index) => (
            <div key={index} className="how_it_work_card w-full flex gap-[26px] justify-center items-center flex-col text-center p-[32px]">
              {/* Step Number */}
              <div className="stepImg">
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

export default HowItWorks;