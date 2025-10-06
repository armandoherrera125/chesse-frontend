import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cheeses } from "@/data/CheeseList";
import { ArrowLeftIcon, ShoppingCartIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import { toast } from "sonner";

export const CheckoutPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [checkoutForm, setCheckoutForm] = useState({
        fullName: '',
        email: '',
        phoneNumber: ''
    });
    const [calculateValues, setCalculateValues] = useState({
        amount: 1,
        subTotal: 0,
        taxPrice: 0,
        total: 0
    });
    const [productInfo, setProductInfo] = useState({
        name: '',
        type: '',
        description: '',
        price: 0,
        unitsAvailable: 0,
        weight: '',
        country: '',
        image: '',
        slug: ''
    });
    const { amount, subTotal, taxPrice, total } = calculateValues;
    const { fullName, email, phoneNumber } = checkoutForm;
    const { name, type, description, price, unitsAvailable, weight, country, image } = productInfo;
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
        if (!slug) return;
        const productData = cheeses.find((item) => item.slug == slug);
        if (!productData) {
            navigate('/purchases');
            return;
        }
        setProductInfo({
            ...productInfo,
            name: productData.name,
            type: productData.type,
            description: productData.description,
            price: productData.price,
            unitsAvailable: productData.unitsAvailable,
            weight: productData.weight,
            country: productData.country,
            image: productData.image,
            slug: productData.slug,
        })
        const subTotal = Number((productData?.price * amount).toFixed(2));
        const taxPrice = Number((subTotal * 0.10).toFixed(2));
        const total = Number((subTotal + taxPrice).toFixed(2));
        setCalculateValues({
            ...calculateValues,
            subTotal,
            taxPrice,
            total
        });
    }, [slug, amount]);


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
                    <div className="flex flex-row gap-3">
                        <img className="w-[125px] h-[125px] rounded-2xl" src={`/${image}`} alt="" />
                        <div className="flex flex-col gap-3">
                            <h1 className="font-medium text-black">{name}</h1>
                            <h1 className="text-gray-600 font-medium">{type}</h1>
                            <h1 className="font-bold text-strongyellow">${price}</h1>
                        </div>
                    </div>
                    <Separator className=" bg-gray-300" />
                    <h2 className="font-medium">Quantity</h2>
                    <div className="flex flex-row justify-start gap-10 items-center">
                        <Button
                            disabled={amount <= 1}
                            onClick={() => setCalculateValues({
                                ...calculateValues,
                                amount: amount - 1
                            })}
                            variant='productamount'>-</Button>
                        <h1 className="text-lg font-medium">{amount}</h1>
                        <Button onClick={() => setCalculateValues({
                            ...calculateValues,
                            amount: amount + 1
                        })} variant='productamount'>+</Button>
                        <h2 className="font-medium">{`(${unitsAvailable} available)`}</h2>
                    </div>
                    <Separator className=" bg-gray-300" />
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row justify-between">
                            <h2 className="font-medium">Subtotal</h2>
                            <h2 className="font-medium">${subTotal}</h2>
                        </div>
                        <div className="flex flex-row justify-between">
                            <h2 className="font-medium">Tax (10%)</h2>
                            <h2 className="font-medium">${taxPrice}</h2>
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
