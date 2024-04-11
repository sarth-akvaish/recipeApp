import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    recipeItems: []
}

const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        addRecipe: (state, action) => {
            state.recipeItems.push(action.payload)
        },
        rmeoveRecipe: (state, action) => {
            state.recipeItems = state.recipeItems.filter(i => i.id !== action.payload)
        }
    }
})

export const { addRecipe, rmeoveRecipe } = recipeSlice.actions;

export default recipeSlice.reducer;