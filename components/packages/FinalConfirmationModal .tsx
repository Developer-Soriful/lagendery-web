import { BiCheck } from "react-icons/bi";
interface FinalConfirmationModalProps {
    packageName: string;
    pickupDate: Date | null;
    pickupTime: string;
    deliveryDate: Date | null;
    deliveryTime: string;
    address: string;
    selected: string;
    packagePrice: string;
    onClose: () => void;
    isOpen: boolean;
    selectedSize: string;
}
const FinalConfirmationModal: React.FC<FinalConfirmationModalProps> = ({
    packageName,
    pickupDate,
    pickupTime,
    deliveryDate,
    deliveryTime,
    address,
    selected,
    packagePrice,
    onClose,
    isOpen,
    selectedSize
}) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[100]">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-8">

                <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-full bg-[#006C76] flex items-center justify-center">
                        <BiCheck className="text-white" size={36} />
                    </div>

                    <h1 className="text-2xl font-bold text-[#1F2937]">
                        Booking Confirmed!
                    </h1>

                    <p className="text-gray-500 text-sm">
                        Your laundry service has been scheduled successfully
                    </p>
                </div>

                <div className="border border-[#006C76] rounded-xl mt-6 p-6 text-sm">
                    <p className="font-bold text-gray-600">Package</p>
                    <p className="text-[#006C76] font-semibold">{packageName}</p>

                    <div className="mt-4">
                        <p className="font-bold text-gray-600">Pickup</p>
                        <p>{pickupDate?.toDateString()}</p>
                        <p>{pickupTime}</p>
                    </div>

                    <div className="mt-4">
                        <p className="font-bold text-gray-600">Delivery</p>
                        <p>{deliveryDate?.toDateString()}</p>
                        <p>{deliveryTime}</p>
                    </div>

                    <div className="mt-4">
                        <p className="font-bold text-gray-600">Address</p>
                        <p>{address}</p>
                    </div>

                    <div className="mt-4">
                        <p className="font-bold text-gray-600">Payment Method</p>
                        <p>{selected === "stripe" ? "Stripe" : "Hand Cash"}</p>
                    </div>

                    <div className="mt-4">
                        <p className="font-bold text-gray-600">Total Amount</p>
                        <p className="text-[#006C76] text-lg font-bold">
                            {packagePrice}
                        </p>
                    </div>
                </div>

                <button
                    onClick={onClose}
                    className="w-full mt-6 bg-[#006C76] text-white py-3 rounded-xl font-semibold"
                >
                    Book Another Service →
                </button>

                <p className="text-center text-gray-400 text-xs mt-3">
                    A confirmation email has been sent to your registered email address.
                </p>
            </div>
        </div>
    );
};

export default FinalConfirmationModal;