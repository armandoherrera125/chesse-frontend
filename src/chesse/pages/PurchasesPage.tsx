import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { PurchaseCard } from "../components/PurchaseCard"
import { useAppSelector } from "@/auth/hooks/hooks"
import { useNavigate } from "react-router";
import { Separator } from "@/components/ui/separator";
import { CartIcon } from "../components/CartIcon";

export const PurchasesPage = () => {
    const { productList } = useAppSelector((state) => state.product);
    const navigate = useNavigate();
    return (
        <div className="flex flex-col gap-5 md:mt-10 justify-center items-center md:justify-start md:items-start">
            <div className="flex flex-row justify-between p-3 w-full">
                <div className="flex flex-col gap-3">
                    <h1 className="font-bold text-3xl">Purchases</h1>
                    <h2 className="text-gray-600 font-medium">Buy cheese products</h2>
                </div>
                <div className="p-4 hidden md:block">
                    <CartIcon />
                </div>
            </div>

            <Separator className="my-4 w-full border border-gray-300" />
            {/* Grid para las cards de los productos */}
            <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4">
                {
                    productList.map((cheeseItem) => <PurchaseCard key={cheeseItem.id} {...cheeseItem} />)
                }
            </div>
        </div>
    )
}
