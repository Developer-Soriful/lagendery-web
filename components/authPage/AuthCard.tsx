// src/components/AuthCard.tsx
import React, { useState } from 'react';
import type { FormEvent } from 'react';
import { useAuth } from '../../authentication/UseAuth';
import { useNavigate } from 'react-router';

// --- STYLING CONSTANTS (Pixel Perfect Colors) ---
const PRIMARY_TEAL = '#006C76'; // Dark Teal (Active button BG, main button BG)
const SECTION_BG_LIGHT = '#F8FAF8'; // Light greenish background for the page/container
const BORDER_LIGHT_GREY = '#F3F4F6'; // Light grey border/inactive background

// --- TYPE DEFINITIONS ---
type AuthMode = 'login' | 'register';

const AuthCard: React.FC = () => {
    const [mode, setMode] = useState<AuthMode>('login'); // Default to Login view

    // --- Login Form State ---
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    // --- Register Form State ---
    const [registerName, setRegisterName] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPhone, setRegisterPhone] = useState('');
    const [registerAddress, setRegisterAddress] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');
    // this is from auth provider
    const { login } = useAuth()
    // this is for navigate 
    const navigate = useNavigate()
    // --- Handlers ---
    const handleLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login(loginEmail, loginPassword)
        console.log('Login attempt:', { loginEmail, loginPassword, rememberMe });
        alert('Login Successfull!');
        navigate('/')
    };

    const handleRegisterSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (registerPassword !== registerConfirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log('Register attempt:', { registerName, registerEmail, registerPhone, registerAddress });
        alert('Registration functionality here!');
    };

    // --- Helper for shared input structure ---
    const renderInput = (label: string, id: string, type: string, value: string, setValue: (v: string) => void, placeholder: string, required: boolean = true) => (
        <div>
            <label htmlFor={id} className="block text-gray-700 text-sm font-medium mb-1">
                {label}
            </label>
            <input
                type={type}
                id={id}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300 text-gray-800"
                style={{ borderColor: BORDER_LIGHT_GREY }}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
                required={required}
            />
        </div>
    );

    // --- Conditional Form Rendering ---
    const renderFormContent = () => {
        if (mode === 'login') {
            return (
                <form onSubmit={handleLoginSubmit} className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Welcome Back</h2>

                    {renderInput('Email', 'login-email', 'email', loginEmail, setLoginEmail, 'Your email')}
                    {renderInput('Password', 'login-password', 'password', loginPassword, setLoginPassword, 'Your password')}

                    {/* Remember Me / Forgot Password */}
                    <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 mr-2"
                                style={{ accentColor: PRIMARY_TEAL }} // Use accentColor for checkbox style
                            />
                            <label htmlFor="rememberMe" className="text-gray-700">Remember me</label>
                        </div>
                        <a href="#" className="text-[12px] text-[#006C76] hover:underline">
                            Forgot Password?
                        </a>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full py-3 rounded-md text-white font-semibold transition-opacity hover:opacity-90 mt-4"
                        style={{ backgroundColor: PRIMARY_TEAL }}
                    >
                        Login
                    </button>
                </form>
            );
        }

        // Register Mode
        return (
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Create an Account</h2>

                {renderInput('Full Name', 'reg-name', 'text', registerName, setRegisterName, 'Your full name')}
                {renderInput('Email', 'reg-email', 'email', registerEmail, setRegisterEmail, 'Your email')}
                {renderInput('Phone', 'reg-phone', 'tel', registerPhone, setRegisterPhone, 'Your phone number', false)}
                {renderInput('Address', 'reg-address', 'text', registerAddress, setRegisterAddress, 'Your address', false)}

                <div className="pt-2"> {/* Extra spacing before password fields */}
                    {renderInput('Password', 'reg-password', 'password', registerPassword, setRegisterPassword, 'Create a password')}
                    {renderInput('Confirm Password', 'reg-confirm-password', 'password', registerConfirmPassword, setRegisterConfirmPassword, 'Confirm your password')}
                </div>

                {/* Register Button */}
                <button
                    type="submit"
                    className="w-full py-3 rounded-md text-white font-semibold transition-opacity hover:opacity-90 mt-6"
                    style={{ backgroundColor: PRIMARY_TEAL }}
                >
                    Create Account
                </button>
            </form>
        );
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-4" style={{ backgroundColor: SECTION_BG_LIGHT }}>
            <div
                className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden"
                style={{ border: `1px solid ${BORDER_LIGHT_GREY}` }}
            >
                {/* --- Toggle Buttons (Login/Register) --- */}
                <div className="flex rounded-t-lg overflow-hidden border-b border-gray-200">
                    <button
                        onClick={() => setMode('login')}
                        className={`
              flex-1 py-3 text-lg font-semibold transition-colors duration-300
              ${mode === 'login'
                                ? 'text-white'
                                : 'text-gray-700 hover:bg-gray-100'
                            }
            `}
                        style={{
                            backgroundColor: mode === 'login' ? PRIMARY_TEAL : BORDER_LIGHT_GREY,
                            color: mode === 'login' ? 'white' : 'inherit',
                            // Force the border to match the picture where Login is fully colored
                            borderRight: mode === 'login' ? 'none' : `1px solid ${BORDER_LIGHT_GREY}`
                        }}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => setMode('register')}
                        className={`
              flex-1 py-3 text-lg font-semibold transition-colors duration-300
              ${mode === 'register'
                                ? 'text-white'
                                : 'text-gray-700 hover:bg-gray-100'
                            }
            `}
                        style={{
                            backgroundColor: mode === 'register' ? PRIMARY_TEAL : BORDER_LIGHT_GREY,
                            color: mode === 'register' ? 'white' : 'inherit',
                            // Force the border to match the picture where Register is fully colored
                            borderLeft: mode === 'register' ? 'none' : `1px solid ${BORDER_LIGHT_GREY}`
                        }}
                    >
                        Register
                    </button>
                </div>

                {/* --- Form Content --- */}
                <div className="p-8">
                    {renderFormContent()}
                </div>

            </div>
        </div>
    );
};

export default AuthCard;