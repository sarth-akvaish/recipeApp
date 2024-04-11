import axios from "axios";

export const getRecipes = async (page) => {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&includeNutrition=true&offset=${page ? page : '0'}`)

        return response?.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to fetch data');
    }
}

export const getRecipeById = async (id) => {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${import.meta.env.VITE_API_KEY}&includeNutrition=false`)

        return response?.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to fetch data');
    }
}

export const getSimilar = async (id) => {
    try {
        const response = await axios.get(` https://api.spoonacular.com/recipes/${id}/similar?apiKey=${import.meta.env.VITE_API_KEY}&includeNutrition=false`)

        return response?.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to fetch data');
    }
}