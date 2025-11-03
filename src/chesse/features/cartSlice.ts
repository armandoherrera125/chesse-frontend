import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


export interface itemCart {
    id: string;
    slug: string;
    name: string;
    quantity: number;
    price: number;
    image: string;
    type: string;
}

export interface cartList {
    cartList: itemCart[]
}

const initialState: cartList = {
    cartList: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<itemCart>) => {
            console.log(action.payload)
            const product = state.cartList.find((item) => item.slug === action.payload.slug);
            if (product) {
                product.quantity++;
            } else {
                state.cartList.push(action.payload)
            }
        },
        deleteFromCart: (state, action: PayloadAction<string>) => {
            state.cartList = state.cartList.filter((item) => item.slug !== action.payload);
        },
        incrementQuantity: (state, action: PayloadAction<string>) => {
            state.cartList.find((item) => {
                const value = item.slug === action.payload;
                if (value) item.quantity++;
            })
        },
        decrementQuantity: (state, action: PayloadAction<string>) => {
            state.cartList.find((item) => {
                const value = item.slug === action.payload;
                if (value && item.quantity > 1) item.quantity--;
            })
        },
        resetCard: (state) => {
            return initialState;
        },
    }
});

export const { addToCart, incrementQuantity, decrementQuantity, deleteFromCart, resetCard } = cartSlice.actions;
export default cartSlice.reducer;