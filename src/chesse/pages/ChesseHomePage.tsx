import { useState } from "react"
import {
    InboxStackIcon,
    CurrencyDollarIcon,
    EqualsIcon,
    ShoppingCartIcon,
    PuzzlePieceIcon,
    ArrowRightStartOnRectangleIcon,
    ShoppingBagIcon
} from "@heroicons/react/24/outline"
import { NavLink, Outlet, useNavigate } from "react-router"
import { useAppDispatch } from "@/auth/hooks/hooks"
import { logout } from "@/auth/features/authSlice"
import { setInitialProducts } from "../features/productSlice"
import { CartIcon } from "../components/CartIcon"

export const ChesseHomePage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const handleLogout = () => {
        localStorage.removeItem('auth');
        localStorage.removeItem('product');
        localStorage.removeItem('token');
        dispatch(logout());
        dispatch(setInitialProducts());
        navigate("/auth/login");
    }

    return (
        <div className="min-h-screen flex">
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* Sidebar */}
            <div
                className={`fixed md:static z-50 bg-white border-r border-gray-200 w-64 h-screen flex flex-col justify-between transform 
                ${isOpen ? "translate-x-0" : "-translate-x-full"} 
                md:translate-x-0 transition-transform duration-300`}
            >
                {/* Sidebar content */}
                <div>
                    <div className="flex items-center justify-between p-3 md:hidden">
                        <h1 className="text-black text-xl">🧀 CheeseFlow</h1>
                        <button onClick={() => setIsOpen(false)}>✖️</button>
                    </div>
                    <h1 className="hidden md:block text-black text-2xl md:text-4xl text-center p-5">🧀 CheeseFlow</h1>
                    <hr className="hidden md:block border border-gray-200" />

                    <h4 className="text-left text-gray-500 p-3">Menu</h4>
                    <div className="flex flex-col gap-3 p-3">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `${isActive ? "text-strongyellow" : "text-black"} flex gap-2 p-2 rounded-md transition-all duration-200 hover:scale-105 hover:bg-gray-50`
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            <PuzzlePieceIcon className="h-6 w-6" />
                            Dashboard
                        </NavLink>

                        <NavLink
                            to="/inventory"
                            className={({ isActive }) =>
                                `${isActive ? "text-strongyellow" : "text-black"} flex gap-2 p-2 rounded-md transition-all duration-200 hover:scale-105 hover:bg-gray-50`
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            <InboxStackIcon className="h-6 w-6" />
                            Inventory
                        </NavLink>

                        <NavLink
                            to="/purchases"
                            className={({ isActive }) =>
                                `${isActive ? "text-strongyellow" : "text-black"} flex gap-2 p-2 rounded-md transition-all duration-200 hover:scale-105 hover:bg-gray-50`
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            <ShoppingCartIcon className="h-6 w-6" />
                            Purchases
                        </NavLink>

                        <NavLink
                            to="/sales"
                            className={({ isActive }) =>
                                `${isActive ? "text-strongyellow" : "text-black"} flex gap-2 p-2 rounded-md transition-all duration-200 hover:scale-105 hover:bg-gray-50`
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            <CurrencyDollarIcon className="h-6 w-6" />
                            Sales
                        </NavLink>
                    </div>
                </div>

                {/* Logout button */}
                <div className="p-3 border-t border-gray-200">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2 p-2 rounded-md text-red-600 hover:bg-red-50 transition-all duration-200"
                    >
                        <ArrowRightStartOnRectangleIcon className="h-6 w-6" />
                        Log out
                    </button>
                </div>
            </div>

            {/* Main content */}
            <div className="flex-1 bg-orange-50 min-h-screen">
                <div className="md:hidden flex justify-between items-center border-b border-gray-200">
                    <div className="flex p-4 items-center gap-2 ">
                        <button onClick={() => setIsOpen(true)}>
                            <EqualsIcon className="h-8 w-8 text-gray-700" />
                        </button>
                        <h1 className="text-lg font-semibold">🧀 CheeseFlow</h1>
                    </div>
                    <CartIcon />
                </div>
                <div className="p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}