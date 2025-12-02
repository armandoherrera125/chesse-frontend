import {
    BellAlertIcon,
    CurrencyDollarIcon,
    InboxStackIcon,
    ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router";
import { CartIcon } from "../components/CartIcon";
import { useGetDashBoardQuery } from "../services/dashboard";
import { Badge } from "@/components/ui/badge";

export const DashboardHomePage = () => {
    const navigate = useNavigate();
    const { data } = useGetDashBoardQuery(null);

    return (
        <>
            {data ? (
                <div className="flex flex-col gap-5 md:mt-10 justify-center items-center md:justify-start md:items-start w-full">
                    <div className="flex flex-row justify-between p-3 w-full">
                        <div className="flex flex-col gap-3">
                            <h1 className="font-bold text-3xl">Dashboard</h1>
                            <h2 className="text-gray-600 font-medium">
                                Overview of your cheese shop
                            </h2>
                        </div>
                        <div className="p-4 hidden md:block">
                            <CartIcon />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
                        <div className="bg-white w-full min-h-[200px] rounded-md shadow-md overflow-hidden p-5 flex flex-col gap-4">
                            <div className="flex flex-row justify-between items-center w-full">
                                <h5 className="text-gray-600 font-medium">Total Revenue</h5>
                                <CurrencyDollarIcon className="h-6 w-6 text-strongyellow" />
                            </div>
                            <h1 className="font-bold text-2xl">${data.revenue}</h1>
                        </div>

                        <div className="bg-white w-full min-h-[200px] rounded-md shadow-md overflow-hidden p-5 flex flex-col gap-4">
                            <div className="flex flex-row justify-between items-center w-full">
                                <h5 className="text-gray-600 font-medium">Total Sales</h5>
                                <ShoppingCartIcon className="h-6 w-6 text-strongyellow" />
                            </div>
                            <h1 className="font-bold text-2xl">{data.transactions}</h1>
                        </div>

                        <div className="bg-white w-full min-h-[200px] rounded-md shadow-md overflow-hidden p-5 flex flex-col gap-4">
                            <div className="flex flex-row justify-between items-center w-full">
                                <h5 className="text-gray-600 font-medium">Inventory Items</h5>
                                <InboxStackIcon className="h-6 w-6 text-strongyellow" />
                            </div>
                            <h1 className="font-bold text-2xl">{data.inventory}</h1>
                        </div>

                        <div className="bg-white w-full min-h-[200px] rounded-md shadow-md overflow-hidden p-5 flex flex-col gap-4">
                            <div className="flex flex-row justify-between items-center w-full">
                                <h5 className="text-gray-600 font-medium">Low Stock Alerts</h5>
                                <BellAlertIcon className="h-6 w-6 text-red-500" />
                            </div>
                            <h1 className="font-bold text-2xl">{data.lowStockALertsCounter}</h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 w-full gap-3">
                        <div className="bg-white w-full rounded-md shadow-md min-h-[200px] p-5 flex flex-col justify-between">
                            <div>
                                <h5 className="text-gray-900 font-medium text-2xl">
                                    Low Stock Alerts
                                </h5>
                                <h5 className="text-gray-500 font-medium text-md">
                                    Items that need restocking
                                </h5>
                            </div>

                            <div className="mt-5">
                                {data.lowStockALertsList.length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {data.lowStockALertsList.map((item: any) => (
                                            <div
                                                key={item.id}
                                                className="flex items-center justify-between p-4 border rounded-2xl shadow-sm hover:shadow-md transition"
                                            >
                                                <div className="flex flex-col gap-2">
                                                    <h1 className="font-bold text-lg">{item.name}</h1>
                                                    <h1 className="font-medium text-lg text-gray-700">
                                                        {item.type}
                                                    </h1>
                                                    <h1 className="font-bold text-strongyellow text-lg">
                                                        ${item.price}
                                                    </h1>
                                                </div>
                                                <div className="flex flex-col gap-5 text-center justify-center items-center">

                                                    <Badge variant="destructive">{item.unitsAvailable}</Badge>
                                                    <img
                                                        className="w-[100px] h-[100px] rounded-2xl object-cover"
                                                        src={`/${item.image}`}
                                                        alt={item.name}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <h1 className="text-gray-500 font-medium text-md">
                                        All items are well stocked!
                                    </h1>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (

                <div className="flex flex-col gap-5 md:mt-10 justify-center items-center md:justify-start md:items-start">
                    <div className="flex flex-row justify-between p-3 w-full">
                        <div className="flex flex-col gap-3">
                            <h1 className="font-bold text-3xl">Dashboard</h1>
                            <h2 className="text-gray-600 font-medium">
                                Overview of your cheese shop
                            </h2>
                        </div>
                        <div className="p-4 hidden md:block">
                            <CartIcon />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
                        <div className="bg-white w-full min-h-[200px] rounded-md shadow-md overflow-hidden p-5 flex flex-col gap-4">
                            <div className="flex flex-row justify-between items-center w-full">
                                <h5 className="text-gray-600 font-medium">Total Revenue</h5>
                                <CurrencyDollarIcon className="h-6 w-6 text-strongyellow" />
                            </div>
                            <h1 className="font-bold text-2xl">$25.00</h1>
                        </div>
                        <div className="bg-white w-full min-h-[200px] rounded-md shadow-md overflow-hidden p-5 flex flex-col gap-4">
                            <div className="flex flex-row justify-between items-center w-full">
                                <h5 className="text-gray-600 font-medium">Total Sales</h5>
                                <ShoppingCartIcon className="h-6 w-6 text-strongyellow" />
                            </div>
                            <h1 className="font-bold text-2xl">1</h1>
                        </div>
                        <div className="bg-white w-full min-h-[200px] rounded-md shadow-md overflow-hidden p-5 flex flex-col gap-4">
                            <div className="flex flex-row justify-between items-center w-full">
                                <h5 className="text-gray-600 font-medium">Inventory Items</h5>
                                <InboxStackIcon className="h-6 w-6 text-strongyellow" />
                            </div>
                            <h1 className="font-bold text-2xl">128</h1>
                        </div>
                        <div className="bg-white w-full min-h-[200px] rounded-md shadow-md overflow-hidden p-5 flex flex-col gap-4">
                            <div className="flex flex-row justify-between items-center w-full">
                                <h5 className="text-gray-600 font-medium">Low Stock Alerts</h5>
                                <BellAlertIcon className="h-6 w-6 text-red-500" />
                            </div>
                            <h1 className="font-bold text-2xl">0</h1>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3">
                        <div className="bg-white w-full rounded-md shadow-md min-h-[200px] p-5 flex flex-col justify-between">
                            <div>
                                <h5 className="text-gray-900 font-medium text-2xl">
                                    Low Stock Alerts
                                </h5>
                                <h5 className="text-gray-500 font-medium text-md">
                                    Items that need restocking
                                </h5>
                            </div>
                            <div>
                                <h1 className="text-gray-500 font-medium text-md">
                                    All items are well stocked!
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
