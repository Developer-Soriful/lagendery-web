import React, { type PropsWithChildren, useState } from 'react';
import { AuthContext, type AuthContextType } from './AuthContext';

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
        // Check if email & password exist in localStorage to determine login state
        return localStorage.getItem('email') !== null && localStorage.getItem('password') !== null;
    });

    const login = (email: string, password: string) => {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        setIsLoggedIn(true);
    };

    const logout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        setIsLoggedIn(false);
    };

    const getUser = () => {
        const email = localStorage.getItem("email");
        const password = localStorage.getItem("password");

        if (email && password) {
            return { email, password };
        }

        return null;
    };

    const user = getUser();

    const info: AuthContextType = {
        isLoggedIn,
        login,
        logout,
        user
    };

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;