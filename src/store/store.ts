import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../auth/features/authSlice';
import { productApi } from '@/chesse/services/product';
import productSlice from '@/chesse/features/productSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        product: productSlice,
        [productApi.reducerPath]: productApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

