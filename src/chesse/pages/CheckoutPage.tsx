import { useAppDispatch, useAppSelector } from "@/auth/hooks/hooks";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeftIcon, ShoppingCartIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router"
import { toast } from "sonner";
import { decrementQuantity, incrementQuantity } from "../features/cartSlice";

export const CheckoutPage = () => {
    const { cartList } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [checkoutForm, setCheckoutForm] = useState({
        fullName: '',
        email: '',
        phoneNumber: ''
    });

    const [calculatePrice, setCalculatePrice] = useState({
        subTotal: 0,
        tax: 0,
        total: 0
    });

    const { subTotal, tax, total } = calculatePrice;

    const { fullName, email, phoneNumber } = checkoutForm;
    const handleCheckoutForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckoutForm({
            ...checkoutForm,
            [e.target.name]: e.target.value
        });
    }
    const handlePurchase = () => {
        navigate('/purchases');
        toast.success('Purchase completed');
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
        <div className="flex flex-col gap-5 md:mt-10 justify-center items-center md:justify-start md:items-start">
            <h1 className="font-bold text-3xl">Checkout</h1>
            <h2 className="text-gray-600 font-medium">Complete your purchase</h2>
            <ArrowLeftIcon onClick={() => navigate(-1)} className="h-6 w-6 text-black hover:bg-strongyellow rounded" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
                <div className="bg-white w-full p-5 rounded-2xl shadow flex flex-col gap-3">
                    <h1 className="text-xl md:text-2xl font-medium ">Customer Information</h1>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Full Name</label>
                        <input
                            name="fullName"
                            value={fullName}
                            onChange={handleCheckoutForm} className="w-full bg-orange-50 p-2 rounded-md border border-orange-100" placeholder="John Doe" type="text" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Email</label>
                        <input
                            name="email"
                            value={email}
                            onChange={handleCheckoutForm} className="w-full bg-orange-50 p-2 rounded-md border border-orange-100" placeholder="john@example.com" type="text" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Phone number</label>
                        <input
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={handleCheckoutForm} className="w-full bg-orange-50 p-2 rounded-md border border-orange-100" placeholder="+503 0000-0000" type="text" />
                    </div>
                </div>
                <div className="bg-white w-full p-5 rounded-2xl shadow flex flex-col gap-3">
                    <h1 className="text-xl md:text-2xl font-medium ">Order Summary</h1>
                    {
                        cartList.map((item) =>
                            <>
                                <div className="flex flex-row justify-between">
                                    <div className="flex flex-row gap-3">

                                        <img className="w-[125px] h-[125px] rounded-2xl" src={`/${item.image}`} alt="" />
                                        <div className="flex flex-col gap-3">
                                            <h1 className="font-medium text-black">{item.name}</h1>
                                            <h1 className="text-gray-600 font-medium">{item.type}</h1>
                                            <h1 className="font-bold text-strongyellow">${item.price}</h1>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-start gap-3 md:gap-10 items-center">
                                        <Button
                                            disabled={item.quantity <= 1}
                                            onClick={() => dispatch(decrementQuantity(item.slug))}
                                            variant='productamount'>-</Button>
                                        <h1 className="text-lg font-medium">{item.quantity}</h1>
                                        <Button onClick={() => dispatch(incrementQuantity(item.slug))} variant='productamount'>+</Button>
                                    </div>
                                </div>
                                <Separator className=" bg-gray-300" />
                            </>
                        )
                    }
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row justify-between">
                            <h2 className="font-medium">Subtotal</h2>
                            <h2 className="font-medium">${subTotal}</h2>
                        </div>
                        <div className="flex flex-row justify-between">
                            <h2 className="font-medium">Tax (10%)</h2>
                            <h2 className="font-medium">${tax}</h2>
                        </div>
                    </div>
                    <Separator className=" bg-gray-300" />
                    <div className="flex flex-row justify-between">
                        <h2 className="font-medium">Total</h2>
                        <h2 className="font-bold text-strongyellow">${total}</h2>
                    </div>
                    <button
                        onClick={handlePurchase}
                        disabled={!fullName.trim() || !email.trim() || !phoneNumber.trim()}
                        className="flex flex-row justify-center items-center gap-5 w-full rounded-md p-2 bg-strongyellow cursor-pointer disabled:cursor-not-allowed disabled:opacity-50">
                        <ShoppingCartIcon className="w-6 h-6 text-black" />
                        Complete Purchase
                    </button>
                    <button
                        onClick={() => navigate('/purchases')}
                        className="flex flex-row justify-center items-center gap-5 w-full rounded-md p-2 bg-orange-50 cursor-pointer">
                        Cancel
                    </button>
                </div>

            </div>
        </div>
    )
}
