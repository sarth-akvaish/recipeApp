import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SavedRecipe = () => {

    const user = useSelector(state => state.user)

    if (!user) {
        return <h1 className='m-4 text-center w-full p-4 text-3xl text-gray-600 tracking-wider'>Please Login First....</h1>
    }

    const { recipeItems } = useSelector(state => state.recipe)

    return (
        <div className='flex flex-col w-full items-center gap-8 justify-center my-12'>
            <h1 className='text-3xl text-gray-400 tracking-wider'>{recipeItems.length !== 0 ? 'Saved Recipes' : 'No Recipes Saved...'}</h1>
            <div className='flex flex-col w-[50%] justify-center gap-4'>
                {recipeItems?.map(recipe => (
                    <Link to={`/recipe/${recipe.id}`} key={recipe?.id} className='cursor-pointer flex w-full border gap border-gray-100 p-2 items-center justify-between rounded-md shadow-md'>
                        <img className='w-36 h-28 rounded-lg' src={recipe?.image} alt="" />
                        <p className='p-2 flex justify-center items-center text-lg tracking-wider font-semibold'>{recipe.title}</p>
                        <FaArrowRight className='flex text-lg text-gray-500' />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SavedRecipe
