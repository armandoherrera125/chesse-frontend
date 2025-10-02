import { BrowserRouter } from "react-router"
import { ChesseAppRouter } from "./router/ChesseAppRouter"

export const ChesseApp = () => {
    return (
        <BrowserRouter>
            <ChesseAppRouter />
        </BrowserRouter>
    )
}
