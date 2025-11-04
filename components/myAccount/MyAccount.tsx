// src/components/MyAccount.tsx

import React from 'react';
import { MdEdit, MdLogout, MdAdd } from 'react-icons/md';
import { useAuth } from '../../authentication/UseAuth';

// --- TYPE DEFINITIONS ---
type OrderStatus = 'Delivered' | 'In Progress' | 'Scheduled';

interface Order {
    id: string;
    serviceType: string;
    status: OrderStatus;
    amount: number;
    date: string;
}

interface User {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    activePackage: string;
}
// --- MOCK DATA ---
const mockUser: User = {
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(123) 456-7890',
    address: '456 Clean Street, Laundryville, LV 67890',
    activePackage: 'Wash & Iron - Medium',
};

const mockOrders: Order[] = [
    { id: 'ORD-12345', serviceType: 'Basic Wash', status: 'Delivered', amount: 14.99, date: '2023-10-15' },
    { id: 'ORD-12346', serviceType: 'Wash & Iron', status: 'In Progress', amount: 19.99, date: '2023-10-22' },
    { id: 'ORD-12347', serviceType: 'Premium Care', status: 'Scheduled', amount: 24.99, date: '2023-10-29' },
];

// --- STYLING CONSTANTS (Pixel Perfect Colors) ---
const PRIMARY_TEAL = '#036666';
const ACCENT_TEAL = '#06b6d4';
const CARD_BG_LIGHT = '#F3F8F4';
const CARD_BORDER = '#E0E0E0';

// Helper function for status pills
const getStatusClasses = (status: OrderStatus) => {
    switch (status) {
        case 'Delivered':
            return 'bg-green-100 text-green-700';
        case 'In Progress':
            return 'bg-blue-100 text-blue-700';
        case 'Scheduled':
            return 'bg-yellow-100 text-yellow-700';
        default:
            return 'bg-gray-100 text-gray-700';
    }
};

const MyAccount: React.FC = () => {
    const { logout } = useAuth()
    // this is for handle logout function
    function handleLogout() {
        logout()
    }
    return (
        <div className="card_style2" style={{ backgroundColor: CARD_BG_LIGHT }}>
            <div className="w-full">

                {/* --- 1. Header and Navigation --- */}
                <header className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-6 mb-10">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">Welcome, {mockUser.fullName}</h1>
                        <p className="text-gray-600 mt-1">Manage your laundry orders and account details</p>
                    </div>
                    <div className="flex justify-between gap-4 max-md:w-full">
                        <button
                            className="py-2.5 px-6 rounded-lg text-white font-semibold flex items-center space-x-2 transition-opacity hover:opacity-90"
                            style={{ backgroundColor: PRIMARY_TEAL }}
                        >
                            <MdAdd size={20} />
                            <span>Book New Order</span>
                        </button>
                        <button
                            onClick={handleLogout}
                            className="py-2.5 px-4 rounded-lg text-gray-700 border border-gray-300 font-semibold flex items-center space-x-2 bg-white transition-colors hover:bg-gray-50"
                        >
                            <MdLogout size={20} />
                            <span>Logout</span>
                        </button>
                    </div>
                </header>

                {/* --- 2. Main Content Grid (Personal Info & Active Package) --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">

                    {/* Personal Information Card (2/3 width) */}
                    <div
                        className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md"
                        style={{ border: `1px solid ${CARD_BORDER}` }}
                    >
                        <div className="flex justify-between items-center mb-5">
                            <h2 className="text-xl font-bold text-gray-800">Personal Information</h2>
                            <button className="text-blue-500 font-medium flex items-center space-x-1 hover:underline">
                                <MdEdit size={18} />
                                <span>Edit Profile</span>
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 text-sm">
                            <div className="flex flex-col">
                                <span className="text-gray-500 font-medium mb-1">Full Name</span>
                                <span className="text-gray-800">{mockUser.fullName}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-500 font-medium mb-1">Email</span>
                                <span className="text-gray-800">{mockUser.email}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-500 font-medium mb-1">Phone</span>
                                <span className="text-gray-800">{mockUser.phone}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-500 font-medium mb-1">Address</span>
                                <span className="text-gray-800">{mockUser.address}</span>
                            </div>
                        </div>
                    </div>

                    {/* Active Package Card (1/3 width) */}
                    <div
                        className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md flex flex-col items-start"
                        style={{ border: `1px solid ${CARD_BORDER}` }}
                    >
                        <h2 className="text-xl font-bold text-gray-800 mb-5">Active Package</h2>

                        <div className="w-full p-3 mb-4 rounded-lg font-semibold text-gray-800" style={{ backgroundColor: CARD_BG_LIGHT }}>
                            {mockUser.activePackage}
                        </div>

                        <button
                            className="w-full py-2.5 px-6 rounded-lg text-white font-semibold transition-opacity hover:opacity-90 mt-auto" // mt-auto pushes button to bottom
                            style={{ backgroundColor: ACCENT_TEAL }}
                        >
                            Change Package
                        </button>
                    </div>
                </div>

                {/* --- 3. Recent Orders Table --- */}
                <div
                    className="bg-white p-6 rounded-lg shadow-md"
                    style={{ border: `1px solid ${CARD_BORDER}` }}
                >
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Orders</h2>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-white">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service Type</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100">
                                {mockOrders.map((order) => (
                                    <tr key={order.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{order.serviceType}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span
                                                className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClasses(order.status)}`}
                                            >
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${order.amount.toFixed(2)}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{order.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyAccount;