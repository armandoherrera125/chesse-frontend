import { useLazyGetProductsQuery } from "@/chesse/services/product"
import { login, type AuthState } from '../features/authSlice';
import { useAppDispatch } from "../hooks/hooks";
import { setProducts } from "@/chesse/features/productSlice";
import { usePostNewUserMutation } from "../services/auth";
import { useState } from "react";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useNavigate } from "react-router";

export const RegisterPage = () => {
    const [registerForm, setRegisterForm] = useState({
        email: '',
        password: '',
        name: ''
    });
    const { email, password, name } = registerForm;
    const handleLoginForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterForm({
            ...registerForm,
            [e.target.name]: e.target.value
        });
    }
    const navigate = useNavigate();
    const [triggerProducts] = useLazyGetProductsQuery();
    const [triggerRegister, { isError, error }] = usePostNewUserMutation();
    const dispatch = useAppDispatch();
    const handleRegister = async () => {
        try {
            const { user, token } = await triggerRegister({ name, email, password }).unwrap();
            const userAuth: AuthState = {
                status: 'authenticated',
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
            };
            localStorage.setItem('auth', JSON.stringify(userAuth));
            localStorage.setItem('token', JSON.stringify(token));
            dispatch(login(userAuth));
            const data = await triggerProducts({
                limit: 10,
                page: 1
            }).unwrap();
            dispatch(setProducts(data));
            localStorage.setItem('product', JSON.stringify(data));
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="bg-orange-50 min-h-screen flex justify-center items-center">
            <div className="bg-white md:min-w-[500px] md:min-h-[500px] rounded-md shadow-md p-8">
                <div className="flex flex-col gap-3">
                    <h1 className="text-6xl text-center">🧀</h1>
                    <h1 className="text-black font-medium text-2xl text-center">CheeseFlow HQ</h1>
                    <h2 className="text-gray-500 text-lg font-thin text-center">Sign in to manage your cheese shop</h2>
                </div>
                <div className="flex flex-col gap-5 mt-5">

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">Name</label>
                        <input onChange={handleLoginForm} value={name} className="w-full p-2 bg-orange-50 rounded-md border border-orange-200 focus:border-orange-300 focus:border-2" type="text" name="name" id="name" placeholder="usercheese" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">Email</label>
                        <input onChange={handleLoginForm} value={email} className="w-full p-2 bg-orange-50 rounded-md border border-orange-200 focus:border-orange-300 focus:border-2" type="text" name="email" id="email" placeholder="admin@cheese.com" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password">Password</label>
                        <input onChange={handleLoginForm} value={password} className="w-full p-2 bg-orange-50 rounded-md border border-orange-200 focus:border-orange-300 focus:border-2" type="password" name="password" id="password" placeholder="*******" />
                    </div>
                </div>
                {isError && 'data' in (error ?? {}) && (
                    <div className="w-full bg-red-50 text-black text-center rounded-md shadow-md p-2 mt-4">
                        {String(
                            ((error as FetchBaseQueryError).data as { msg?: string })?.msg ??
                            "Unknown error"
                        )}
                    </div>
                )}
                <button onClick={handleRegister} className="text-white bg-yellow-600 w-full rounded-md shadow-md p-2 mt-7 transition-all duration-300 hover:scale-105">Create account</button>
                <div className="flex flex-row gap-3 mt-3 justify-center items-center">
                    <h1 className="text-gray-500 text-lg font-thin text-center">Already have an account?</h1>
                    <h2 onClick={() => navigate('/auth/login')} className="cursor-pointer text-blue-600 text-lg font-thin text-center">Log in now</h2>
                </div>
            </div>
        </div>
    )
}
