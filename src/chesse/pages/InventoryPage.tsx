import { PlusIcon, ShoppingBagIcon } from "@heroicons/react/24/outline"
import { InventoryCard } from "../components/InventoryCard"
import { useNavigate } from "react-router"
import { useAppSelector } from "@/auth/hooks/hooks";
import { Separator } from '@/components/ui/separator';
import { CartIcon } from "../components/CartIcon";

export const InventoryPage = () => {
    const navigate = useNavigate();
    const { productList } = useAppSelector((state) => state.product);

    return (
        <div className="flex flex-col gap-5 md:mt-10 justify-center items-center md:justify-start md:items-start relative">
            {/* Header */}
            <div className="flex flex-row justify-between p-3 w-full">
                <div className="flex flex-col gap-3">
                    <h1 className="font-bold text-3xl">Inventory</h1>
                    <h2 className="text-gray-600 font-medium">Manage your cheese products</h2>
                </div>
                <div className="p-4 hidden md:block">
                    <CartIcon />
                </div>
            </div>

            <Separator className="my-4 w-full border border-gray-300" />

            {/* Button (mobile fixed / md static) */}
            <button
                onClick={() => navigate('/inventory/add')}
                className="
                    bg-strongyellow hover:opacity-90 flex items-center gap-3 cursor-pointer transition-colors duration-300
                    md:static md:mt-0 md:px-5 md:py-3 md:rounded-md md:shadow-none
                    fixed bottom-6 right-6 rounded-full p-4 shadow-lg
                "
            >
                <PlusIcon className="h-6 w-6 text-black" />
                <span className="hidden md:inline text-black font-medium">Add Product</span>
            </button>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4">
                {productList.map((item) => (
                    <InventoryCard key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};
