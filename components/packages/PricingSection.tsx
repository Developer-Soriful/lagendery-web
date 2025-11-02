import React from 'react';
import PackageCard from './PackageCard';
import { Images } from '../../src/assets';

type LoadSize = 'Small' | 'Medium' | 'Large';


interface LaundryPackage {
    id: string;
    imageSrc: string;
    altText: string;
    title: string;
    description: string;
    priceOptions: { size: LoadSize; amount: number; }[];
    deliveryTime: string;
}

const laundryPackages: LaundryPackage[] = [
    {
        id: 'basic-wash',
        imageSrc: Images.package_card1,
        altText: 'Pile of clothes in a laundry basket',
        title: 'Basic Wash',
        priceOptions: [
            { size: 'Small', amount: 9.99 },
            { size: 'Medium', amount: 14.99 },
            { size: 'Large', amount: 19.99 },
        ],
        description: 'Simple wash and dry for your everyday laundry needs',
        deliveryTime: '24 Hours',
    },
    {
        id: 'wash-iron',
        imageSrc: Images.package_card2,
        altText: 'Ironing clothes',
        title: 'Wash & Iron',
        priceOptions: [
            { size: 'Small', amount: 14.99 },
            { size: 'Medium', amount: 19.99 },
            { size: 'Large', amount: 24.99 },
        ],
        description: 'Complete wash, dry, and professional ironing service.',
        deliveryTime: '48 Hours',
    },
    {
        id: 'premium-care',
        imageSrc: Images.package_card1,
        altText: 'Folded sweaters being held',
        title: 'Premium Care',
        priceOptions: [
            { size: 'Small', amount: 19.99 },
            { size: 'Medium', amount: 24.99 },
            { size: 'Large', amount: 29.99 },
        ],
        description: 'Delicate treatment for your special garments with stain removal',
        deliveryTime: '72 Hours',
    },
];

const PricingSection: React.FC = () => {
    return (
        <section className="">
            <div className="card_style2 ">

                {/* Grid Container for Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {laundryPackages.map((pkg) => (
                        <PackageCard
                            key={pkg.id}
                            id={pkg.id}
                            imageSrc={pkg.imageSrc}
                            altText={pkg.altText}
                            title={pkg.title}
                            description={pkg.description}
                            priceOptions={pkg.priceOptions} // This prop is now correctly typed
                            deliveryTime={pkg.deliveryTime}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;