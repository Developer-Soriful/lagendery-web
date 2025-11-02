import React from 'react';

// --- TYPE DEFINITIONS ---
interface FAQItem {
    question: string;
    answer: string;
}
// ------------------------

// --- MOCK DATA ---
const faqData: FAQItem[] = [
    {
        question: 'How do I determine my load size?',
        answer:
            'Small loads are typically up to 10 lbs (4-5 kg) and fit in a standard laundry basket. Medium loads are between 10-20 lbs and usually fill two baskets. Large loads are 20-30 lbs and are suitable for large families or multiple weeks of laundry.',
    },
    {
        question: "What's the difference between the packages?",
        answer:
            'Our Basic Wash includes washing and folding, while Wash & Iron adds professional ironing. Premium Care includes special treatments for stains and delicate fabrics. Dry Cleaning is specifically for items that can\'t be washed with water.',
    },
    {
        question: 'How does the subscription plan work?',
        answer:
            'With a subscription, you pre-pay for a certain number of loads per month at a discounted rate. You can schedule pick-ups at your convenience throughout the month until you\'ve used your allotted loads.',
    },
    {
        question: 'Can I mix different types of items in one load?',
        answer:
            'Yes, you can mix different clothing items in one load. However, we recommend separating whites, colors, and delicates. For special items requiring dry cleaning, those must be processed separately.',
    },
];

const FAQSection: React.FC = () => {
    return (
        <section className="card_style flex-col">
            <div className="max-w-3xl mx-auto">

                {/* Main Heading */}
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
                    Frequently Asked Questions
                </h2>
            </div>

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {faqData.map((faq, index) => (
                    <div key={index} className="py-8 text-left border-b border-[#E5E7EB]">
                        {/* Question */}
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            {faq.question}
                        </h3>
                        {/* Answer */}
                        <p className="text-base text-gray-600 leading-relaxed">
                            {faq.answer}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQSection;