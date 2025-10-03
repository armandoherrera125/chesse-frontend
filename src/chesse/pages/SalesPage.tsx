import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowTrendingUpIcon, CalendarIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline"


const salesData = [
    { id: 1, date: "2024-10-02", product: "Aged Cheddar", quantity: 3, total: 137.97 },
    { id: 2, date: "2024-10-03", product: "Brie", quantity: 5, total: 210.50 },
    { id: 3, date: "2024-10-04", product: "Blue Cheese", quantity: 2, total: 95.30 },
    { id: 4, date: "2024-10-05", product: "Goat Cheese", quantity: 7, total: 312.25 },
    { id: 5, date: "2024-10-06", product: "Parmesan", quantity: 4, total: 185.60 },
    { id: 6, date: "2024-10-07", product: "Mozzarella", quantity: 6, total: 142.80 },
    { id: 7, date: "2024-10-08", product: "Gouda", quantity: 8, total: 256.00 },
    { id: 8, date: "2024-10-09", product: "Feta", quantity: 3, total: 78.45 },
    { id: 9, date: "2024-10-10", product: "Swiss Cheese", quantity: 5, total: 199.95 },
    { id: 10, date: "2024-10-11", product: "Ricotta", quantity: 9, total: 175.50 },
    { id: 11, date: "2024-10-12", product: "Camembert", quantity: 2, total: 89.40 },
    { id: 12, date: "2024-10-13", product: "Havarti", quantity: 4, total: 144.00 },
    { id: 13, date: "2024-10-14", product: "Colby", quantity: 6, total: 162.60 },
    { id: 14, date: "2024-10-15", product: "Provolone", quantity: 3, total: 120.75 },
    { id: 15, date: "2024-10-16", product: "Cream Cheese", quantity: 10, total: 95.00 },
    { id: 16, date: "2024-10-17", product: "Pepper Jack", quantity: 4, total: 152.40 },
    { id: 17, date: "2024-10-18", product: "Manchego", quantity: 3, total: 132.00 },
    { id: 18, date: "2024-10-19", product: "Cotija", quantity: 5, total: 118.75 },
    { id: 19, date: "2024-10-20", product: "Queso Fresco", quantity: 7, total: 133.00 },
    { id: 20, date: "2024-10-21", product: "Halloumi", quantity: 2, total: 77.60 },
    { id: 21, date: "2024-10-22", product: "Gruyère", quantity: 4, total: 200.00 },
    { id: 22, date: "2024-10-23", product: "Roquefort", quantity: 2, total: 110.40 },
    { id: 23, date: "2024-10-24", product: "Monterey Jack", quantity: 6, total: 156.00 },
    { id: 24, date: "2024-10-25", product: "Cheddar", quantity: 5, total: 175.00 },
    { id: 25, date: "2024-10-26", product: "Mascarpone", quantity: 3, total: 90.00 }
];






export const SalesPage = () => {
    return (
        <div className="flex flex-col gap-5 md:mt-10 justify-center items-center md:justify-start md:items-start">
            <h1 className="font-bold text-3xl">Sales</h1>
            <h2>Track your sales performance</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-3">
                <div className="bg-white w-full min-h-[200px] rounded-md shadow-md overflow-hidden p-5 flex flex-col gap-4">
                    <div className="flex flex-row justify-between items-center w-full">
                        <h5 className="text-gray-600 font-medium">Total Revenue</h5>
                        <CurrencyDollarIcon className="h-6 w-6 text-strongyellow" />
                    </div>
                    <h1 className="font-bold text-2xl">$25.00</h1>
                </div>


                <div className="bg-white w-full min-h-[200px] rounded-md shadow-md overflow-hidden p-5 flex flex-col gap-4">
                    <div className="flex flex-row justify-between items-center w-full">
                        <h5 className="text-gray-600 font-medium">Transactions</h5>
                        <ArrowTrendingUpIcon className="h-6 w-6 text-strongyellow" />
                    </div>
                    <h1 className="font-bold text-2xl">8</h1>
                </div>


                <div className="bg-white w-full min-h-[200px] rounded-md shadow-md overflow-hidden p-5 flex flex-col gap-4">
                    <div className="flex flex-row justify-between items-center w-full">
                        <h5 className="text-gray-600 font-medium">Avg. Transaction</h5>
                        <CalendarIcon className="h-6 w-6 text-strongyellow" />
                    </div>
                    <h1 className="font-bold text-2xl">$97.39</h1>
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
                        {salesData.map((sale) => (
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
