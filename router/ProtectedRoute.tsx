import React from 'react';
import type { PropsWithChildren } from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '../authentication/UseAuth';

const ProtectedRoute: React.FC<PropsWithChildren> = ({ children }) => {
    const authContext = useAuth();

    if (!authContext || !authContext.user) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;