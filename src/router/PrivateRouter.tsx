interface PrivateRouterProps {
    children: React.ReactNode
}

export const PrivateRouter = ({ children }: PrivateRouterProps) => {
    return (
        <div>{children}</div>
    )
}
