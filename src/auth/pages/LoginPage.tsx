import { useLazyGetProductsQuery } from "@/chesse/services/product"
import { login, type AuthState } from "../features/authSlice";
import { useAppDispatch } from "../hooks/hooks";
import { setProducts } from "@/chesse/features/productSlice";

export const LoginPage = () => {
    const [triggerLogin] = useLazyGetProductsQuery();
    const dispatch = useAppDispatch();
    const handleLogin = async () => {
        const user: AuthState = {
            status: 'authenticated',
            uid: '12345',
            email: 'armando_125@hotmail.com',
            displayName: 'armandoherrera',
            photoURL: 'algunaimagen',
        };
        dispatch(login(user));
        const data = await triggerLogin({
            limit: 10,
            page: 1
        }).unwrap();
        dispatch(setProducts(data));
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
                        <label htmlFor="email">Email</label>
                        <input className="w-full p-2 bg-orange-50 rounded-md border border-orange-200 focus:border-orange-300 focus:border-2" type="text" name="email" id="email" placeholder="admin@cheese.com" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password">Password</label>
                        <input className="w-full p-2 bg-orange-50 rounded-md border border-orange-200 focus:border-orange-300 focus:border-2" type="password" name="password" id="password" placeholder="*******" />
                    </div>
                </div>
                <button onClick={handleLogin} className="text-white bg-yellow-600 w-full rounded-md shadow-md p-2 mt-7 transition-all duration-300 hover:scale-105">Sign in</button>
            </div>
        </div>
    )
}
