import React from 'react'
import FAQSection from './FAQSection'

const Frequently: React.FC = () => {
    return (
        <div>
            {/* this is for Frequently heading */}
            <section className='card_style bg-[#006C76] flex flex-col gap-5'>
                <h2 className='text-[40px] font-bold text-[#FFFFFF]'>Frequently Asked Questions</h2>
                <p className='text-[#FFFFFF] text-[17px]'>Have questions or need assistance? We're here to help. Reach out to our team using any of the methods below.</p>
            </section>
            {/* this is for Frequently boday part */}
            <section>
                <FAQSection />
            </section>
        </div>
    )
}

export default Frequently
