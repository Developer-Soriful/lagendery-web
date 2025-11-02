import React from 'react'
import SelectLoadSize from "./SelectLoadSize"
import PackageCard from "./PricingSection"
const Packages: React.FC = () => {
    return (
        <div>
            {/* this is heading part of Packages */}
            <section className='card_style bg-[#006C76] flex flex-col gap-5'>
                <h2 className='text-[40px] font-bold text-[#FFFFFF]'>Choose the Perfect Laundry Package for You</h2>
                <p className='text-[#FFFFFF] text-[17px]'>Flexible options for every household or business. Select the package that best fits your needs.</p>
            </section>
            {/* this is for Select Your Load Size */}
            <section className='card_style'>
                <SelectLoadSize />
            </section>
            {/* this is for package card */}
            <section>
                <PackageCard />
            </section>
        </div>
    )
}

export default Packages
