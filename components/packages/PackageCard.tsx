type LoadSize = 'Small' | 'Medium' | 'Large';

interface PriceOption {
    size: LoadSize;
    amount: number;
}

interface PackageCardProps {
    id: string;
    imageSrc: string;
    altText: string;
    title: string;
    description: string;
    priceOptions: PriceOption[];
    deliveryTime: string;
}
// ------------------------

const BUTTON_BG = '#006C76';

const PackageCard: React.FC<PackageCardProps> = ({
    imageSrc,
    altText,
    title,
    description,
    deliveryTime,
    priceOptions
}) => {

    return (
        <div className="packageCard">
            {/* Image Container */}
            <div className="h-48 bg-gray-50 flex items-center justify-center w-full">
                <img
                    src={imageSrc}
                    alt={altText}
                    className="w-full h-full object-cover rounded-tl-[12px] rounded-tr-[12px]"
                />
            </div>

            <div className="p-6 flex flex-col flex-grow w-full justify-between">
                <div>
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4 flex-grow">{description}</p>
                </div>
                <div>
                    {/* Pricing Label */}
                    <p className="text-gray-700 text-sm font-medium mb-2">Pricing:</p>
                    <div className='flex items-center gap-2'>
                        {
                            priceOptions.map((data: any, index: number) => {
                                return <div key={index} className='pricing_card flex flex-col justify-center items-center w-full'>
                                    <h4 className='text-[#6B7280] text-[12px]'>{data.size}</h4>
                                    <p className='text-[#2B2B2B] font-bold'>{data.amount}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div>
                    {/* Delivery Time */}
                    <p className="text-sm text-gray-600 mb-6">
                        Delivery Time: <span className="font-semibold">{deliveryTime}</span>
                    </p>

                    {/* Select Package Button */}
                    <button
                        className="w-full py-3 rounded-md text-white font-semibold hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: BUTTON_BG }}
                    >
                        Select Package
                    </button>

                </div>
            </div>
        </div>
    );
};

export default PackageCard;