import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


export interface itemCart {
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
            state.cartList.push(action.payload)
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
        }
    }
});

export const { addToCart, incrementQuantity, decrementQuantity, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;