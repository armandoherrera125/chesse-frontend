interface PublicRouterProps {
    children: React.ReactNode
}

export const PublicRouter = ({ children }: PublicRouterProps) => {
    return (
        <div>{children}</div>
    )
}
