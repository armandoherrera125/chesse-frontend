import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowTrendingUpIcon, CalendarIcon, CurrencyDollarIcon, ShoppingBagIcon } from "@heroicons/react/24/outline"
import { useNavigate } from "react-router";
import { CartIcon } from "../components/CartIcon";
import { useGetSalesQuery } from "../services/sale";


interface Sale {
    id: number;
    quantity: number;
    total: number;
    product: string;
    date: string;
}

export const SalesPage = () => {
    const navigate = useNavigate();
    const { data: salesData, isLoading } = useGetSalesQuery(null);
    return (
        isLoading
            ?
            'Cargando'
            :

            <div className="flex flex-col gap-5 md:mt-10 justify-center items-center md:justify-start md:items-start">

                <div className="flex flex-row justify-between p-3 w-full">
                    <div className="flex flex-col gap-3">
                        <h1 className="font-bold text-3xl">Sales</h1>
                        <h2 className="text-gray-600 font-medium">Track your sales performance</h2>
                    </div>
                    <div className="p-4 hidden md:block">
                        <CartIcon />
                    </div>
                </div>

                <Separator className="my-4 w-full border border-gray-300" />


                <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-3">
                    <div className="bg-white w-full min-h-[200px] rounded-md shadow-md overflow-hidden p-5 flex flex-col gap-4">
                        <div className="flex flex-row justify-between items-center w-full">
                            <h5 className="text-gray-600 font-medium">Total Revenue</h5>
                            <CurrencyDollarIcon className="h-6 w-6 text-strongyellow" />
                        </div>
                        <h1 className="font-bold text-2xl">${salesData.revenue}</h1>
                    </div>


                    <div className="bg-white w-full min-h-[200px] rounded-md shadow-md overflow-hidden p-5 flex flex-col gap-4">
                        <div className="flex flex-row justify-between items-center w-full">
                            <h5 className="text-gray-600 font-medium">Transactions</h5>
                            <ArrowTrendingUpIcon className="h-6 w-6 text-strongyellow" />
                        </div>
                        <h1 className="font-bold text-2xl">{salesData.transactions}</h1>
                    </div>


                    <div className="bg-white w-full min-h-[200px] rounded-md shadow-md overflow-hidden p-5 flex flex-col gap-4">
                        <div className="flex flex-row justify-between items-center w-full">
                            <h5 className="text-gray-600 font-medium">Avg. Transaction</h5>
                            <CalendarIcon className="h-6 w-6 text-strongyellow" />
                        </div>
                        <h1 className="font-bold text-2xl">${salesData.avg}</h1>
                    </div>

                </div>



                <div className="w-full bg-white p-10 rounded-md shadow-md">
                    <h1 className="mb-5 font-bold text-2xl">Recent Transactions</h1>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="text-gray-600 font-medium">Date</TableHead>
                                <TableHead className="text-gray-600 font-medium">Product</TableHead>
                                <TableHead className="text-gray-600 font-medium">Quantity</TableHead>
                                <TableHead className="text-right text-gray-600 font-medium">Total</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {salesData.sales.map((sale: Sale) => (
                                <TableRow key={sale.id}>
                                    <TableCell className="font-medium">{sale.date}</TableCell>
                                    <TableCell>{sale.product}</TableCell>
                                    <TableCell>{sale.quantity}</TableCell>
                                    <TableCell className="text-right text-strongyellow">{sale.total}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
    )
}
