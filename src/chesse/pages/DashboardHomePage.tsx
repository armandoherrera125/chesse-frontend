import { BellAlertIcon, CurrencyDollarIcon, InboxStackIcon, ShoppingCartIcon } from "@heroicons/react/24/outline"

export const DashboardHomePage = () => {
    return (
        <div className="flex flex-col gap-5 md:mt-10 justify-center items-center md:justify-start md:items-start">
            <h1 className="font-bold text-3xl">Dashboard</h1>
            <h2>Overview of your cheese shop</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
                <div className="bg-white w-full min-h-[200px] rounded-md shadow-md overflow-hidden p-5 flex flex-col gap-4">
                    <div className="flex flex-row justify-between items-center w-full">
                        <h5 className="text-gray-600 font-medium">Total Revenue</h5>
                        <CurrencyDollarIcon className="h-6 w-6 text-orange-500" />
                    </div>
                    <h1 className="font-bold text-2xl">$25.00</h1>
                </div>
                <div className="bg-white w-full min-h-[200px] rounded-md shadow-md overflow-hidden p-5 flex flex-col gap-4">
                    <div className="flex flex-row justify-between items-center w-full">
                        <h5 className="text-gray-600 font-medium">Total Sales</h5>
                        <ShoppingCartIcon className="h-6 w-6 text-orange-500" />
                    </div>
                    <h1 className="font-bold text-2xl">1</h1>
                </div>
                <div className="bg-white w-full min-h-[200px] rounded-md shadow-md overflow-hidden p-5 flex flex-col gap-4">
                    <div className="flex flex-row justify-between items-center w-full">
                        <h5 className="text-gray-600 font-medium">Inventory Items
                        </h5>
                        <InboxStackIcon className="h-6 w-6 text-orange-500" />
                    </div>
                    <h1 className="font-bold text-2xl">128</h1>
                </div>
                <div className="bg-white w-full min-h-[200px] rounded-md shadow-md overflow-hidden p-5 flex flex-col gap-4">
                    <div className="flex flex-row justify-between items-center w-full">
                        <h5 className="text-gray-600 font-medium">Low Stock Alerts
                        </h5>
                        <BellAlertIcon className="h-6 w-6 text-red-500" />
                    </div>
                    <h1 className="font-bold text-2xl">0</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3">
                <div className="bg-white w-full rounded-md shadow-md min-h-[200px] p-5 flex flex-col justify-between">
                    <div>
                        <h5 className="text-gray-900 font-medium text-2xl">Low Stock Alerts</h5>
                        <h5 className="text-gray-500 font-medium text-md">Items that need restocking</h5>
                    </div>
                    <div><h1 className="text-gray-500 font-medium text-md">All items are well stocked!</h1></div>
                </div>

                <div className="bg-white w-full rounded-md shadow-md min-h-[200px] p-5 flex flex-col justify-between">
                    <div>
                        <h5 className="text-gray-900 font-medium text-2xl">Recent Purchases</h5>
                        <h5 className="text-gray-500 font-medium text-md">Latest transactions</h5>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-md shadow-md w-full min-h-[60px]">
                        <div className="flex flex-row justify-between w-full">
                            <div>
                                <h1 className="text-gray-600 font-medium">John Doe</h1>
                                <h1 className="text-gray-500 font-medium text-md">3/10/2025</h1>
                            </div>
                            <div className="flex justify-center items-center font-bold text-xl">$25.00</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
