import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../auth/features/authSlice';
import { productApi } from '@/chesse/services/product';
import { authApi } from '@/auth/services/auth';
import productSlice from '@/chesse/features/productSlice';


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
        [productApi.reducerPath]: productApi.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    preloadedState: {
        auth: savedAuth,
        product: savedProduct
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware).concat(authApi.middleware),
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

