import { cheeses } from "@/data/CheeseList"
import { PurchaseCard } from "../components/PurchaseCard"

export const PurchasesPage = () => {
    return (
        <div className="flex flex-col gap-5 md:mt-10 justify-center items-center md:justify-start md:items-start">
            <h1 className="font-bold text-3xl">Purchases</h1>
            <h2 className="text-gray-600 font-medium">Buy cheese products</h2>
            {/* Grid para las cards de los productos */}
            <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4">
                {
                    cheeses.map((cheeseItem) => <PurchaseCard key={cheeseItem.id} {...cheeseItem} />)
                }
            </div>
        </div>
    )
}
