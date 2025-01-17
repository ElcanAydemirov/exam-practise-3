import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { productsApi } from '../services'
import basket from '../features/basketslice'
import wishlist from '../features/wishlistslice'

export const store = configureStore({
    reducer: {
        wishlist,
        basket,
        [productsApi.reducerPath]: productsApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
})

setupListeners(store.dispatch)