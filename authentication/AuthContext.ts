import { createContext } from 'react';

// Define the type for user
interface User {
    email: string;
    password: string;
}

// Define the AuthContext type
export interface AuthContextType {
    isLoggedIn: boolean;
    login: (email: string, password: string) => void;
    logout: () => void;
    user: User | null;
}

// Create context with proper type
export const AuthContext = createContext<AuthContextType | null>(null);