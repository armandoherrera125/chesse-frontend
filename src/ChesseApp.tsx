import { BrowserRouter } from "react-router"
import { ChesseAppRouter } from "./router/ChesseAppRouter"
import { Provider } from "react-redux"
import { store } from "./store/store"


export const ChesseApp = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ChesseAppRouter />
            </BrowserRouter>
        </Provider>
    )
}
