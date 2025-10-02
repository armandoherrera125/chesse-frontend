import { Navigate, Route, Routes } from "react-router"
import { ChesseHomePage } from "../pages/ChesseHomePage"
import { DashboardHomePage } from "../pages/DashboardHomePage"
import { InventoryPage } from "../pages/InventoryPage"
import { PurchasesPage } from "../pages/PurchasesPage"
import { SalesPage } from "../pages/SalesPage"

export const ChesseRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<ChesseHomePage />}>
                <Route index element={<DashboardHomePage />} />
                <Route path="/inventory" element={<InventoryPage />} />
                <Route path="/purchases" element={<PurchasesPage />} />
                <Route path="/sales" element={<SalesPage />} />
                <Route path="*" element={<Navigate to='/' />} />
            </Route>
        </Routes>
    )
}
