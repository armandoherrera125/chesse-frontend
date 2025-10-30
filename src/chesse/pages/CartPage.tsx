import { useAppDispatch, useAppSelector } from "@/auth/hooks/hooks";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeftIcon, ArrowRightIcon, ShoppingBagIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useNavigate } from "react-router"
import { decrementQuantity, deleteFromCart, incrementQuantity } from "../features/cartSlice";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const CartPage = () => {
    const navigate = useNavigate();
    const { cartList } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();

    const [calculatePrice, setCalculatePrice] = useState({
        subTotal: 0,
        tax: 0,
        total: 0
    });

    const { subTotal, tax, total } = calculatePrice;
    const handleDeleteProduct = (name: string, slug: string) => {
        dispatch(deleteFromCart(slug));
        toast.error(`Product ${name} deleted`)
    }

    useEffect(() => {
        let newSubTotal = 0;

        cartList.forEach((item) => {
            newSubTotal += item.price * item.quantity;
        });

        const newTax = Number((newSubTotal * 0.10).toFixed(2));
        const newTotal = Number((newSubTotal + newTax).toFixed(2));

        setCalculatePrice({
            subTotal: Number(newSubTotal.toFixed(2)),
            tax: newTax,
            total: newTotal
        });
    }, [cartList]);

    return (
        <>
            {cartList.length < 1 ? (
                <div className="flex flex-col gap-5 md:mt-10 justify-center items-center md:justify-start md:items-start">
                    <h1 className="font-bold text-3xl">Shopping Cart</h1>
                    <h2 className="text-gray-600 font-medium">Your cart is empty</h2>
                    <ArrowLeftIcon onClick={() => navigate(-1)} className="h-6 w-6 text-black hover:bg-strongyellow rounded" />
                    <div className="grid grid-cols-1 gap-3 w-full">
                        <div className="bg-white w-full p-5 rounded-2xl shadow flex flex-col gap-5 items-center">
                            <ShoppingBagIcon className="w-20 h-20 text-gray-700" />
                            <h1 className="text-2xl font-thin">No items in your cart yet</h1>
                            <button
                                onClick={() => navigate('/purchases')}
                                className="bg-strongyellow text-black p-3 rounded-md hover:cursor-pointer"
                            >
                                Browse Products
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col gap-5 md:mt-10 justify-center items-center md:justify-start md:items-start">
                    <h1 className="font-bold text-3xl">Shopping Cart</h1>
                    <h2 className="text-gray-600 font-medium">
                        {`${cartList.length} ${cartList.length === 1 ? 'item in your cart' : 'items in your cart'}`}
                    </h2>
                    <ArrowLeftIcon onClick={() => navigate(-1)} className="h-6 w-6 text-black hover:bg-strongyellow rounded" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
                        <div className="flex flex-col gap-5">
                            {cartList.map((item) => (
                                <div key={item.slug} className="bg-white w-full min-h-[200px] p-5 rounded-2xl shadow flex flex-row justify-between items-center">
                                    <div className="flex gap-3">
                                        <img className="w-[125px] h-[125px] rounded-2xl" src={`/${item.image}`} alt={item.name} />
                                        <div className="flex flex-col gap-3">
                                            <h1 className="font-bold text-lg">{item.name}</h1>
                                            <h1 className="font-medium text-lg text-gray-700">{item.type}</h1>
                                            <h1 className="font-bold text-strongyellow text-lg">${item.price}</h1>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <TrashIcon onClick={() => handleDeleteProduct(item.name, item.slug)} className="text-black w-6 h-6 self-end mb-10 hover:cursor-pointer" />
                                        <div className="flex flex-row gap-5 md:gap-10 items-center">
                                            <Button onClick={() => dispatch(decrementQuantity(item.slug))} disabled={item.quantity <= 1} variant='productamount'>-</Button>
                                            <h1 className="text-lg font-medium">{item.quantity}</h1>
                                            <Button onClick={() => dispatch(incrementQuantity(item.slug))} variant='productamount'>+</Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div>
                            <div className="bg-white w-full p-5 rounded-2xl shadow flex flex-col gap-5">
                                <h1 className="text-xl md:text-2xl font-medium self-center">Order Summary</h1>
                                <div className="flex flex-col gap-3">
                                    <div className="flex flex-row justify-between">
                                        <h2 className="font-medium text-lg">Subtotal</h2>
                                        <h2 className="font-medium text-lg">${subTotal}</h2>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <h2 className="font-medium text-lg">Tax (10%)</h2>
                                        <h2 className="font-medium text-lg">${tax}</h2>
                                    </div>
                                </div>
                                <Separator className=" bg-gray-300" />
                                <div className="flex flex-row justify-between">
                                    <h2 className="font-bold text-lg">Total</h2>
                                    <h2 className="font-bold text-strongyellow text-lg">${total}</h2>
                                </div>
                                <button
                                    onClick={() => navigate('/checkout')}
                                    className="bg-strongyellow text-black p-3 rounded-md flex justify-center gap-5 hover:cursor-pointer hover:opacity-90"
                                >
                                    Proceed to Checkout
                                    <ArrowRightIcon className="h-6 w-6" />
                                </button>
                                <button
                                    onClick={() => navigate('/purchases')}
                                    className="bg-orange-50 text-black p-3 rounded-md hover:cursor-pointer"
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
