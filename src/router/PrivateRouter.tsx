import { Navigate } from "react-router";
import { useAppSelector } from "../auth/hooks/hooks"

interface PrivateRouterProps {
    children: React.ReactNode
}

export const PrivateRouter = ({ children }: PrivateRouterProps) => {
    const { status } = useAppSelector((state) => state.auth);
    console.log(status);
    return status === 'authenticated' ? children : <Navigate to='/auth/login' replace />
}
