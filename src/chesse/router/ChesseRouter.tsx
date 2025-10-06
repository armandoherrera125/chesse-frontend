import { Navigate, Route, Routes } from "react-router"
import { ChesseHomePage } from "../pages/ChesseHomePage"
import { DashboardHomePage } from "../pages/DashboardHomePage"
import { InventoryPage } from "../pages/InventoryPage"
import { PurchasesPage } from "../pages/PurchasesPage"
import { SalesPage } from "../pages/SalesPage"
import { CheckoutPage } from "../pages/CheckoutPage"
import { AddProduct } from "../pages/AddProduct"
import { EditProduct } from "../pages/EditProduct"
import { DeleteProduct } from "../pages/DeleteProduct"

export const ChesseRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<ChesseHomePage />}>
                <Route index element={<DashboardHomePage />} />
                <Route path="/inventory" element={<InventoryPage />} />
                <Route path="/inventory/add" element={<AddProduct />} />
                <Route path="/inventory/edit/:slug" element={<EditProduct />} />
                <Route path="/inventory/delete/:slug" element={<DeleteProduct />} />
                <Route path="/purchases" element={<PurchasesPage />} />
                <Route path="/purchases/checkout/:slug" element={<CheckoutPage />} />
                <Route path="/sales" element={<SalesPage />} />
                <Route path="*" element={<Navigate to='/' />} />
            </Route>
        </Routes>
    )
}
