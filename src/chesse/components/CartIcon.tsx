import { useAppSelector } from "@/auth/hooks/hooks";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router";
export const CartIcon = () => {
    const navigate = useNavigate();
    const { cartList } = useAppSelector((state) => state.cart);
    const totalItems = cartList.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className="relative inline-block mr-2 md:mr-0">
            <ShoppingBagIcon
                onClick={() => navigate('/cart')}
                className="h-12 w-12 p-2 bg-orange-50 border border-gray-300 rounded-md 
                           hover:bg-strongyellow hover:cursor-pointer hover:opacity-90"
            />
            {totalItems > 0 && (
                <span
                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs 
                               font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md"
                >
                    {totalItems}
                </span>
            )}
        </div>
    );
};
