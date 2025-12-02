import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../auth/features/authSlice';
import { productApi } from '@/chesse/services/product';
import { authApi } from '@/auth/services/auth';
import { saleApi } from '@/chesse/services/sale';
import productSlice from '@/chesse/features/productSlice';
import cartSlice from '@/chesse/features/cartSlice';
import { dashboardApi } from '@/chesse/services/dashboard';


const savedAuth = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth')!)
    : undefined;
const savedProduct = localStorage.getItem('product')
    ? JSON.parse(localStorage.getItem('product')!)
    : undefined;

export const store = configureStore({
    reducer: {
        auth: authSlice,
        product: productSlice,
        cart: cartSlice,
        [productApi.reducerPath]: productApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [saleApi.reducerPath]: saleApi.reducer,
        [dashboardApi.reducerPath]: dashboardApi.reducer
    },
    preloadedState: {
        auth: savedAuth,
        product: savedProduct
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware).concat(authApi.middleware).concat(saleApi.middleware).concat(dashboardApi.middleware),
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

