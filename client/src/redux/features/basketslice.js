import { createSlice } from '@reduxjs/toolkit'



const basketSlice = createSlice({
    name: 'basketSlice',
    initialState: { basket: [] },
    reducers: {
        checkBasket(state, action) {
            const found = state.basket.find((b) => b._id == action.payload._id)
            console.log(found);
            if (found) {
                found.quantity++
                return

            }
            state.basket.push({ ...action.payload, quantity: 1 })
        },
        increment(state, action) {
            const found = state.basket.find((b) => b._id == action.payload._id)
            if (found) {
                found.quantity++
                return
            }
        },
        decrement(state, action) {
            const found = state.basket.find((b) => b._id == action.payload._id)
            if (found && found.quantity > 1) {
                found.quantity--
                return
            }
        },
    },

})

export const { checkBasket, increment, decrement } = basketSlice.actions
export default basketSlice.reducer