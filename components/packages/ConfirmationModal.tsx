import { useState } from 'react'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { BsCreditCard2Back, BsWallet2 } from 'react-icons/bs'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';

interface ConfirmationModalProps {
    isOpen: boolean
    onClose: () => void // Closes this modal only
    // New handler to transition to the FinalConfirmationModal
    onConfirm: () => void
    packageName: string
    packagePrice: string // e.g., "$15.00"
    selectedSize: string
    // Removed: showFinalConfirmationModal
}

// Renamed locally to match the mental model (BookingModal)
export default function ConfirmationModal({
    isOpen,
    onClose,
    onConfirm, // Use this for the final button click
    packageName,
    packagePrice,
    selectedSize,
}: ConfirmationModalProps) {
    if (!isOpen) return null

    // NOTE: Hardcoded total price is incorrect; it should be calculated dynamically.
    const totalPayable = "$17.00"; // Placeholder for demonstration

    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const [selected, setSelected] = useState<string>("stripe");

    const options = [
        {
            id: "stripe",
            label: "Payment Stripe",
            icon: <BsCreditCard2Back size={22} className="text-[#006C76]" />,
        },
        {
            id: "cash",
            label: "Hand Cash",
            icon: <BsWallet2 size={22} className="text-[#006C76]" />,
        },
    ];

    // this is for handle back
    const handleBack = () => {
        onClose(); // This now simply closes the current modal
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl w-full max-w-[700px] mx-4 transform transition-all p-6 flex flex-col gap-6">
                <div>
                    <button onClick={handleBack} className='confirmation_modal'>
                        ← Back to Packages
                    </button>
                </div>
                {/* this is for Schedule Pickup & Delivery */}
                <div className='flex flex-col gap-4'>
                    <h2 className='schedule_pickup'>
                        Schedule Pickup & Delivery
                    </h2>
                    <p className='text-[16px] text-[#6B7280]'>Choose your convenient time slots</p>
                </div>
                {/* this is for confirm order card  Selected Package*/}
                <div className='confirm_order_card'>
                    <h1 className='text-[#1F2937] font-bold text-[16px]'>Selected Package</h1>
                    <p className='text-[#6B7280] text-[16px]'>
                        {packageName} ({selectedSize})
                    </p>
                    <p className='text-[#006C76] font-bold text-[16px]'>
                        {packagePrice}
                    </p>
                </div>
                {/* this is for  confirm order card Booking Summary*/}
                <div className='confirm_order_card'>
                    <h1 className='text-[#1F2937] font-medium text-[16px]'>Booking Summary</h1>
                    <div className='flex justify-between items-center w-full'>
                        <p className='text-[#101828] text-[12px] '>Price per bag</p>
                        <p className='text-[#101828] font-medium text-[16px]'>{packagePrice}</p>
                    </div>
                    <div className='flex justify-between items-center w-full'>
                        <p className='text-[#101828] text-[12px] '>Number of bag</p>
                        <p className='text-[#101828] font-medium text-[16px]'>1</p>
                    </div>
                    <div className='flex justify-between items-center w-full'>
                        <p className='text-[#101828] text-[12px] '>Service fee</p>
                        <p className='text-[#101828] font-medium text-[16px]'>+$2.00</p>
                    </div>
                    <div className='flex justify-between items-center w-full'>
                        <p className='text-[#1F2937] font-medium text-[16px]'>Total Payable</p>
                        {/* Using the placeholder for now */}
                        <p className='text-[#1F2937] font-medium text-[16px]'>{totalPayable}</p>
                    </div>
                </div>
                {/* this is for pickup details */}
                <div className='confirm_order_card flex flex-col gap-6'>
                    <div className='flex justify-start items-center gap-[10px]'>
                        <span>
                            {/* SVG for Calendar */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M19 4H17V3C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2C15.7348 2 15.4804 2.10536 15.2929 2.29289C15.1054 2.48043 15 2.73478 15 3V4H9V3C9 2.73478 8.89464 2.48043 8.70711 2.29289C8.51957 2.10536 8.26522 2 8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3V4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM20 19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V12H20V19ZM20 10H4V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H7V7C7 7.26522 7.10536 7.51957 7.29289 7.70711C7.48043 7.89464 7.73478 8 8 8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V6H15V7C15 7.26522 15.1054 7.51957 15.2929 7.70711C15.4804 7.89464 15.7348 8 16 8C16.2652 8 16.5196 7.89464 16.7071 7.70711C16.8946 7.51957 17 7.26522 17 7V6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7V10Z" fill="#006C76" />
                            </svg>
                        </span>
                        <p className='text-[#1F2937] font-bold text-xl'>Pickup Details</p>
                    </div>
                    <div className='flex justify-between items-center w-full gap-6'>
                        <div className='flex flex-col gap-4 w-full'>
                            <h1 className='text-[#4B5563] text-sm font-bold'>Pickup Date</h1>
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date: Date | null) => setSelectedDate(date)}
                                className="w-full border-[2px] border-[#D1D5DB] px-6 py-[10px] rounded-[25px] focus:outline-none text-[#9CA3AF]"
                            />
                        </div>
                        <div className='flex flex-col gap-4 w-full'>
                            <h1 className='text-[#4B5563] text-sm font-bold'>Pickup Time</h1>
                            <select className='w-full border-[2px] border-[#D1D5DB] px-6 py-[10px] rounded-[25px] focus:outline-none text-[#9CA3AF]' name="" id="">
                                <option value="">Select Time</option>
                                <option value="">Select Time</option>
                                <option value="">Select Time</option>
                                <option value="">Select Time</option>
                                <option value="">Select Time</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* this is for delivery details */}
                <div className='confirm_order_card flex flex-col gap-6'>
                    <div className='flex justify-start items-center gap-[10px]'>
                        <span>
                            {/* SVG for Clock */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C6.47 22 2 17.5 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2ZM12.5 7V12.25L17 14.92L16.25 16.15L11 13V7H12.5Z" fill="#006C76" />
                            </svg>
                        </span>
                        <p className='text-[#1F2937] font-bold text-xl'>Delivery Details</p>
                    </div>
                    <div className='flex justify-between items-center w-full gap-6'>
                        <div className='flex flex-col gap-4 w-full'>
                            <h1 className='text-[#4B5563] text-sm font-bold'>Delivery Date</h1>
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date: Date | null) => setSelectedDate(date)}
                                className="w-full border-[2px] border-[#D1D5DB] px-6 py-[10px] rounded-[25px] focus:outline-none text-[#9CA3AF]"
                            />
                        </div>
                        <div className='flex flex-col gap-4 w-full'>
                            <h1 className='text-[#4B5563] text-sm font-bold'>Delivery Time</h1>
                            <select className='w-full border-[2px] border-[#D1D5DB] px-6 py-[10px] rounded-[25px] focus:outline-none text-[#9CA3AF]' name="" id="">
                                <option value="">Select Time</option>
                                <option value="">Select Time</option>
                                <option value="">Select Time</option>
                                <option value="">Select Time</option>
                                <option value="">Select Time</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* this is for Address */}
                <div className='confirm_order_card flex flex-col gap-6'>
                    <div className='flex justify-start items-center gap-[10px]'>
                        <span>
                            {/* SVG for Location */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5ZM12 2C13.8565 2 15.637 2.7375 16.9497 4.05025C18.2625 5.36301 19 7.14348 19 9C19 14.25 12 22 12 22C12 22 5 14.25 5 9C5 7.14348 5.7375 5.36301 7.05025 4.05025C8.36301 2.7375 10.1435 2 12 2ZM12 4C10.6739 4 9.40215 4.52678 8.46447 5.46447C7.52678 6.40215 7 7.67392 7 9C7 10 7 12 12 18.71C17 12 17 10 17 9C17 7.67392 16.4732 6.40215 15.5355 5.46447C14.5979 4.52678 13.3261 4 12 4Z" fill="#006C76" />
                            </svg>
                        </span>
                        <p className='text-[#1F2937] font-bold text-xl'>Address</p>
                    </div>
                    <div className='flex justify-between items-center w-full gap-6'>
                        <div className='flex flex-col gap-4 w-full'>
                            <input placeholder='Enter your complete address...' type="text" className='w-full px-6 pb-10 pt-[10px] border-[2px] border-[#D1D5DB] rounded-[12px] focus:outline-none text-[#9CA3AF]' />
                        </div>
                    </div>
                </div>
                {/* this is for payment method */}
                <div className='confirm_order_card'>
                    <div className='w-full flex flex-col gap-2'>
                        {options.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setSelected(item.id)}
                                className="
                                w-full p-4 flex justify-between items-center w-full border-[2px] border-[#D1D5DB] rounded-[12px] focus:outline-none text-[#9CA3AF]
                            "
                            >
                                {/* Left Side */}
                                <div className="flex items-center gap-3">
                                    {item.icon}
                                    <span className="text-[16px] text-[#101828] font-medium">
                                        {item.label}
                                    </span>
                                </div>

                                {/* Right Side Radio */}
                                <div
                                    className={`
                                        w-[20px] h-[20px] rounded-full border-2
                                        flex items-center justify-center
                                        ${selected === item.id
                                            ? "border-[#006C76]"
                                            : "border-[#B0BEC5]"
                                        }
                                `}
                                >
                                    {selected === item.id && (
                                        <div className="w-[10px] h-[10px] bg-[#006C76] rounded-full" />
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
                {/* this is the confirm booking button */}
                <div>
                    <button
                        onClick={onConfirm} // *** MODIFIED HERE ***: Calls the function passed from PackageCard
                        style={{ backgroundColor: '#006C76' }}
                        className="flex-1 w-full flex items-center gap-2 justify-center py-3 rounded-[25px] text-white font-semibold hover:opacity-90 transition-opacity"
                    >
                        <span className="text-white">Confirm Booking</span>
                        <IoMdArrowRoundForward className="text-white" />
                    </button>
                </div>
            </div>
        </div>
    )
}