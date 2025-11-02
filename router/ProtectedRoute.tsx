import React, { PropsWithChildren, ReactNode } from 'react'
import { useAuth } from '../authentication/UseAuth'
import { Navigate } from 'react-router'

const ProtectedRoute: React.FC<PropsWithChildren> = ({ children }) => {
    const { user } = useAuth()
    if (!user) {
        return <Navigate to={'/sign-in'} replace />
    }
    return <>{children}</>
}

export default ProtectedRoute
