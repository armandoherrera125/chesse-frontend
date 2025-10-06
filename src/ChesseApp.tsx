import { BrowserRouter } from "react-router"
import { ChesseAppRouter } from "./router/ChesseAppRouter"
import { Provider } from "react-redux"
import { store } from "./store/store"
import { Toaster } from "./components/ui/sonner"


export const ChesseApp = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ChesseAppRouter />
                <Toaster richColors />
            </BrowserRouter>
        </Provider>
    )
}
