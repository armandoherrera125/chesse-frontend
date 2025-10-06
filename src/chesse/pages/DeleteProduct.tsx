import { ArrowLeftIcon, ExclamationTriangleIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router"

export const DeleteProduct = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col gap-5 md:mt-10 justify-center items-center md:justify-start md:items-start">
            <h1 className="font-bold text-3xl">Remove Product</h1>
            <h2 className="text-gray-600 font-medium">Confirm product removal</h2>
            <ArrowLeftIcon onClick={() => navigate(-1)} className="h-6 w-6 text-black hover:bg-strongyellow rounded" />
            <div className="grid grid-cols-1 w-full gap-3">
                <div className="border border-red-500 rounded-2xl shadow p-4 w-full md:w-1/2 bg-white flex flex-col gap-5">
                    <h1 className="flex flex-row gap-0.5 md:gap-3 text-2xl font-medium justify-center items-center text-center">
                        <ExclamationTriangleIcon className="w-10 h-10 text-red-500" />
                        Are you sure you want to remove this product?
                    </h1>
                    <h2 className="text-gray-600 font-medium">This action cannot be undone. This will permanently remove the product from your inventory.</h2>
                    <div className="flex flex-row gap-3 bg-orange-50 rounded-2xl p-3">
                        <img className="w-[125px] h-[125px] rounded-2xl" src="/cheese-blue.jpg" alt="" />
                        <div className="flex flex-col gap-3">
                            <h1 className="font-medium text-black">Aged Cheddar</h1>
                            <h1 className="text-gray-600 font-medium">Hard Cheese</h1>
                            <h1 className="font-bold text-strongyellow">$45.99</h1>
                        </div>
                    </div>
                    <div className="flex flex-row gap-3">
                        <button onClick={() => navigate('/inventory')} className="mt-5 w-5/6 flex flex-row justify-center items-center gap-5 hover:cursor-pointer rounded-md p-2 text-white bg-red-500 hover:opacity-95">
                            <TrashIcon className="w-6 h-6 text-white" />
                            Yes, Remove Product
                        </button>
                        <button onClick={() => navigate('/inventory')} className="mt-5 w-1/6 flex flex-row justify-center items-center gap-5 hover:cursor-pointer rounded-md p-2 text-black bg-orange-50 opacity-95">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
