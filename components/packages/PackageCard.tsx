import React, { useState } from 'react';
import { BiCheck } from 'react-icons/bi';
import { IoMdArrowRoundForward } from 'react-icons/io';
// NOTE: Make sure the actual file names for the modals match these imports.
import FinalConfirmationModal from './FinalConfirmationModal ';
import ConfirmationModal from './ConfirmationModal';

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
    // Renamed state: showModal (first selection) -> showSizeSelectionModal
    const [showSizeSelectionModal, setShowSizeSelectionModal] = useState(false);
    // New state: showBookingModal to control the first step (date/time/address)
    const [showBookingModal, setShowBookingModal] = useState(false);
    // Kept for the final confirmation step
    const [showFinalConfirmationModal, setShowFinalConfirmationModal] = useState(false);
    const [selectedSize, setSelectedSize] = useState<string>('');

    // State for FinalConfirmationModal props
    const [pickupDate, setPickupDate] = useState<Date | null>(null);
    const [pickupTime, setPickupTime] = useState<string>('');
    const [deliveryDate, setDeliveryDate] = useState<Date | null>(null);
    const [deliveryTimeSlot, setDeliveryTimeSlot] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [selectedPayment, setSelectedPayment] = useState<string>('');

    // --- Modal Handler Functions ---

    // 1. Handles confirmation from the size selection modal (opens Booking Modal)
    const handleConfirmSelection = () => {
        if (!selectedSize) {
            alert('Please select a package size before confirming.');
            return;
        }
        setShowSizeSelectionModal(false); // Close the size selection modal
        setShowBookingModal(true); // Open the new Booking/Confirmation Modal
    };

    // 2. Handles confirmation from the Booking Modal (opens Final Confirmation Modal)
    const handleConfirmBooking = () => {
        // You would typically validate date, time, and address here
        setShowBookingModal(false); // Close the Booking Modal
        setShowFinalConfirmationModal(true); // Open the Final Confirmation Modal
    }

    // Find the selected price for display in the subsequent modals
    const selectedPriceOption = priceOptions.find(option => option.size === selectedSize);
    const selectedPrice = selectedPriceOption ? selectedPriceOption.amount : 0;


    return (
        <>
            <div className="packageCardContainer">
                <div className="packageCard">
                    {/* ... (Existing Package Card JSX) ... */}
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
                                    priceOptions.map((data: PriceOption, index: number) => {
                                        return <div key={index} className='pricing_card flex flex-col justify-center items-center w-full'>
                                            <h4 className='text-[#6B7280] text-[12px]'>{data.size}</h4>
                                            <p className='text-[#2B2B2B] font-bold'>${data.amount}</p>
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
                                onClick={() => setShowSizeSelectionModal(true)}
                                className="w-full py-3 rounded-md text-white font-semibold hover:opacity-90 transition-opacity"
                                style={{ backgroundColor: BUTTON_BG }}
                            >
                                Select Package
                            </button>

                        </div>
                    </div>
                </div>

                {/* --- Size Selection Modal (Your original 'showModal') --- */}
                {showSizeSelectionModal && (
                    <div
                        className="fixed inset-0 bg-black/50 flex justify-center items-center z-[999]"
                        onClick={() => setShowSizeSelectionModal(false)}
                    >
                        <div className="lg:w-[40%] w-[90%]" onClick={(e) => e.stopPropagation()}>
                            <div className="bg-white rounded-[25px] shadow-xl overflow-hidden">
                                {/* ... Modal Content (Image, Details, Price Options, Features) ... */}
                                <div className=''>
                                    {/* Package Image */}
                                    <div className="relative h-[200px] flex items-center justify-center w-full mb-4 overflow-hidden">
                                        <img
                                            src={imageSrc}
                                            alt={altText}
                                            className="w-full h-full object-cover"
                                        />
                                        {/* this is for modal close icon */}
                                        <div className='absolute right-4 top-3 bg-[#fff] rounded-full w-10 h-10 flex items-center justify-center text-black p-1'>
                                            <button
                                                onClick={() => setShowSizeSelectionModal(false)}
                                                className="cursor-pointer text-3xl leading-none z-10"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    </div>

                                    {/* Package Details */}
                                    <div className="mb-6 px-6">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
                                        <p className="text-sm text-gray-600 mb-4">{description}</p>

                                        {/* Delivery Time */}
                                        <p className="text-sm text-gray-600 mb-4">
                                            <span className="font-medium">Delivery Time:</span> {deliveryTime}
                                        </p>
                                    </div>

                                    {/* Price Options */}
                                    <div className="mb-6 px-6">
                                        <h4 className="text-md font-semibold text-gray-800 mb-3">Choose Size:</h4>
                                        <div className="flex flex-col gap-4">
                                            {priceOptions.map((option, index) => (
                                                <div className='flex items-center gap-3' key={index}>
                                                    <input
                                                        type="radio"
                                                        name="packageSize"
                                                        id={`size-${index}`}
                                                        value={option.size}
                                                        checked={selectedSize === option.size}
                                                        onChange={() => setSelectedSize(option.size)}
                                                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                                    />
                                                    <label htmlFor={`size-${index}`} className="text-gray-700 cursor-pointer">
                                                        {option.size} - <span className="font-semibold">${option.amount}</span>
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* this is for Features */}
                                    <div className="mb-6 px-6">
                                        <h4 className="text-md font-semibold text-gray-800 mb-3">Features:</h4>
                                        <div className="flex flex-col gap-4">
                                            <div className='flex items-center gap-2'>
                                                <BiCheck color='#006C76' />
                                                <p>Laundry Service</p>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <BiCheck color='#006C76' />
                                                <p>Ironing Service</p>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <BiCheck color='#006C76' />
                                                <p>Delivery Service</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Action Buttons */}
                                    <div className="flex gap-3 p-6">
                                        <button
                                            onClick={handleConfirmSelection} // Opens the Booking Modal
                                            className={`flex-1 flex items-center gap-2 justify-center py-3 rounded-[25px] text-white font-semibold transition-opacity ${selectedSize ? 'hover:opacity-90' : 'opacity-50 cursor-not-allowed'
                                                }`}
                                            style={{ backgroundColor: BUTTON_BG }}
                                            disabled={!selectedSize}
                                        >
                                            <span className="text-white">Confirm Selection</span>
                                            <IoMdArrowRoundForward className="text-white" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- Booking/Schedule Modal (Your original 'ConfirmationModal') --- */}
                {showBookingModal && (
                    <ConfirmationModal
                        isOpen={showBookingModal}
                        // Close handler that only closes the booking modal
                        onClose={() => setShowBookingModal(false)}
                        // Handler to advance to the next step
                        onConfirm={handleConfirmBooking}
                        packageName={title}
                        packagePrice={`$${selectedPrice.toFixed(2)}`}
                        selectedSize={selectedSize}
                    />
                )}

                {/* --- Final Confirmation Modal (Your original 'FinalConfirmationModal') --- */}
                {
                    showFinalConfirmationModal && (
                        // NOTE: You are currently importing this as FinalConfirmationModal. 
                        // If it's the component named FinalConfirmationModal, use it directly.
                        <FinalConfirmationModal
                            isOpen={showFinalConfirmationModal}
                            onClose={() => setShowFinalConfirmationModal(false)}
                            packageName={title}
                            packagePrice={`$${selectedPrice.toFixed(2)}`}
                            selectedSize={selectedSize}
                            pickupDate={pickupDate}
                            pickupTime={pickupTime}
                            deliveryDate={deliveryDate}
                            deliveryTime={deliveryTimeSlot}
                            address={address}
                            selected={selectedPayment}
                        />
                    )
                }
            </div>
        </>
    );
};

export default PackageCard;