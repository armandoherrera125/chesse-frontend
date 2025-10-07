import { createSlice, type PayloadAction } from '@reduxjs/toolkit';


export interface ProductRequest {
    count: number;
    pages: number;
    productList: ProductState[]
}

export interface ProductState {
    id: string;
    name: string;
    type: string;
    description: string;
    price: number;
    unitsAvailable: number;
    weight: string;
    image: string;
    slug: string;
}

const initialState: ProductRequest = {
    count: 0,
    pages: 0,
    productList: []
};


export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<ProductRequest>) => {
            state.count = action.payload.count;
            state.pages = action.payload.pages;
            state.productList = action.payload.productList;
        },
        setInitialProducts: () => {
            return initialState;
        }
    }
});

export const { setProducts, setInitialProducts } = productSlice.actions;

export default productSlice.reducer;