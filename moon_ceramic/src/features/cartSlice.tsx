import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
    id: number;
    name: string;
    price: number;
    img: string;
    quantity: number;
}

interface CartState {
    // Store carts as { "userEmail1": [items], "userEmail2": [items] }
    cartsByUser: Record<string, CartItem[]>;
}

// Load all carts from localStorage once
const initialState: CartState = {
    cartsByUser: JSON.parse(localStorage.getItem('moon_carts_by_user') || '{}'),
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<{ item: Omit<CartItem, 'quantity'>; userId: string }>) => {
            const { item, userId } = action.payload;
            
            if (!state.cartsByUser[userId]) {
                state.cartsByUser[userId] = [];
            }

            const existing = state.cartsByUser[userId].find(i => i.id === item.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                state.cartsByUser[userId].push({ ...item, quantity: 1 });
            }
            
            localStorage.setItem('moon_carts_by_user', JSON.stringify(state.cartsByUser));
        },

        incrementQuantity: (state, action: PayloadAction<{ id: number; userId: string }>) => {
            const { id, userId } = action.payload;
            const item = state.cartsByUser[userId]?.find(i => i.id === id);
            if (item) {
                item.quantity += 1;
                localStorage.setItem('moon_carts_by_user', JSON.stringify(state.cartsByUser));
            }
        },

        decrementQuantity: (state, action: PayloadAction<{ id: number; userId: string }>) => {
            const { id, userId } = action.payload;
            const item = state.cartsByUser[userId]?.find(i => i.id === id);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                localStorage.setItem('moon_carts_by_user', JSON.stringify(state.cartsByUser));
            }
        },

        removeItem: (state, action: PayloadAction<{ id: number; userId: string }>) => {
            const { id, userId } = action.payload;
            if (state.cartsByUser[userId]) {
                state.cartsByUser[userId] = state.cartsByUser[userId].filter(i => i.id !== id);
                localStorage.setItem('moon_carts_by_user', JSON.stringify(state.cartsByUser));
            }
        },
        
        // Add a clear action for logout if needed
        clearUserCart: (state, action: PayloadAction<string>) => {
            delete state.cartsByUser[action.payload];
            localStorage.setItem('moon_carts_by_user', JSON.stringify(state.cartsByUser));
        }
    }
});

export const { 
    addToCart, 
    removeItem, 
    decrementQuantity, 
    incrementQuantity, 
    clearUserCart 
} = cartSlice.actions;

export default cartSlice.reducer;