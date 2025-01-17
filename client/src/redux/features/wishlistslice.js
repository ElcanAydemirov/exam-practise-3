import { createSlice } from '@reduxjs/toolkit'



const wishlistSlice = createSlice({
    name: 'wishlistSlice',
    initialState: { wishlist: [] },
    reducers: {
        checkWishlist(state, action) {
            const found = state.wishlist.find((b) => b._id == action.payload._id)
            console.log(action);

            if (found) {
                state.wishlist = state.wishlist.filter((w) => w._id != action.payload._id)
                return
            }
            state.wishlist.push({ ...action.payload })
        }
    },
})

export const { checkWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer