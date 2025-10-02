import { Route, Routes } from "react-router"
import { PublicRouter } from "./PublicRouter"
import { PrivateRouter } from "./PrivateRouter"
import { AuthRouter } from "../auth/router/AuthRouter"
import { ChesseRouter } from "../chesse/router/ChesseRouter"

export const ChesseAppRouter = () => {
    return (
        <Routes>
            <Route path="auth/*" element={
                <PublicRouter>
                    <AuthRouter />
                </PublicRouter>
            }>
            </Route>
            <Route path="/*" element={
                <PrivateRouter>
                    <ChesseRouter />
                </PrivateRouter>
            }>
            </Route>
        </Routes>
    )
}
