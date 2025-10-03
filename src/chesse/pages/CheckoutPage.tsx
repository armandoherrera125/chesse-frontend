import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeftIcon, ShoppingCartIcon } from "@heroicons/react/24/outline"
import { useNavigate } from "react-router"

export const CheckoutPage = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col gap-5 md:mt-10 justify-center items-center md:justify-start md:items-start">
            <h1 className="font-bold text-3xl">Checkout</h1>
            <h2 className="text-gray-600 font-medium">Complete your purchase</h2>
            <ArrowLeftIcon onClick={() => navigate(-1)} className="h-6 w-6 text-black hover:bg-strongyellow rounded" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
                <div className="bg-white w-full p-5 rounded-2xl shadow flex flex-col gap-3">
                    <h1 className="text-xl md:text-2xl font-medium ">Customer Information</h1>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Full Name</label>
                        <input className="w-full bg-orange-50 p-2 rounded-md border border-orange-100" placeholder="John Doe" type="text" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Email</label>
                        <input className="w-full bg-orange-50 p-2 rounded-md border border-orange-100" placeholder="john@example.com" type="text" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Phone number</label>
                        <input className="w-full bg-orange-50 p-2 rounded-md border border-orange-100" placeholder="+503 0000-0000" type="text" />
                    </div>
                </div>
                <div className="bg-white w-full p-5 rounded-2xl shadow flex flex-col gap-3">
                    <h1 className="text-xl md:text-2xl font-medium ">Order Summary</h1>
                    <div className="flex flex-row gap-3">
                        <img className="w-[125px] h-[125px] rounded-2xl" src="/cheese-blue.jpg" alt="" />
                        <div className="flex flex-col gap-3">
                            <h1 className="font-medium text-black">Aged Cheddar</h1>
                            <h1 className="text-gray-600 font-medium">Hard Cheese</h1>
                            <h1 className="font-bold text-strongyellow">$45.99</h1>
                        </div>
                    </div>
                    <Separator className=" bg-gray-300" />
                    <h2 className="font-medium">Quantity</h2>
                    <div className="flex flex-row justify-start gap-10 items-center">
                        <Button variant='productamount'>-</Button>
                        <h1 className="text-lg font-medium">1</h1>
                        <Button variant='productamount'>+</Button>
                        <h2 className="font-medium">(24 available)</h2>
                    </div>
                    <Separator className=" bg-gray-300" />
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row justify-between">
                            <h2 className="font-medium">Subtotal</h2>
                            <h2 className="font-medium">$45.99</h2>
                        </div>
                        <div className="flex flex-row justify-between">
                            <h2 className="font-medium">Tax (10%)</h2>
                            <h2 className="font-medium">$4.60</h2>
                        </div>
                    </div>
                    <Separator className=" bg-gray-300" />
                    <div className="flex flex-row justify-between">
                        <h2 className="font-medium">Total</h2>
                        <h2 className="font-bold text-strongyellow">$50.59</h2>
                    </div>
                    <button className="flex flex-row justify-center items-center gap-5 w-full rounded-md p-2 bg-strongyellow cursor-pointer">
                        <ShoppingCartIcon className="w-6 h-6 text-black" />
                        Complete Purchase
                    </button>
                    <button className="flex flex-row justify-center items-center gap-5 w-full rounded-md p-2 bg-orange-50 cursor-pointer">
                        Cancel
                    </button>
                </div>

            </div>
        </div>
    )
}
