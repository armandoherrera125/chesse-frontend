import { Navigate } from "react-router";
import { useAppSelector } from "../auth/hooks/hooks"

interface PublicRouterProps {
    children: React.ReactNode
}

export const PublicRouter = ({ children }: PublicRouterProps) => {
    const { status } = useAppSelector((state) => state.auth);
    console.log(status);
    return status === 'not-authenticated' ? children : <Navigate to='/' replace />
}
