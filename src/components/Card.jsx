import React from 'react'
import { FaBookmark } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addRecipe } from '../store/recipeSlice';

const Card = ({ recipe }) => {

    const dispatch = useDispatch();

    const addHandler = () => {
        dispatch(addRecipe(recipe))
    }

    return (
        <div className='flex h-[190px] md:h-[270px] relative flex-col gap-2 w-[150px] md:w-full border border-gray-200 rounded-lg hover:scale-[1.02] shadow-md'>
            <div className='flex justify-center items-center'>
                <img className='rounded-lg' src={`https://img.spoonacular.com/recipes/${recipe?.id || recipe?.image}-556x370.jpg`} alt="" />
            </div>
            <div className='py-2 px-2 font-semibold tracking-wide'>{recipe?.title.slice(0, 30)}...</div>
            <FaBookmark onClick={addHandler} className='absolute right-2 text-2xl text-white top-2 hover:text-red-500' />
        </div>
    )
}

export default Card
