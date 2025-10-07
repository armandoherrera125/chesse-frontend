import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
    status: string;
    uid: string | null;
    email: string | null;
    displayName: string | null;
}

const initialState: AuthState = {
    status: 'not-authenticated',
    uid: null,
    email: null,
    displayName: null,
};


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<AuthState>) => {
            state.status = action.payload.status
            state.uid = action.payload.uid
            state.email = action.payload.email
            state.displayName = action.payload.displayName
        },
        logout: () => {
            return initialState;
        }
    }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;