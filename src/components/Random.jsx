import React from 'react'
import Card from './Card';
import { Link } from 'react-router-dom';

const Random = ({ recipes }) => {
    return (
        <div className='p-4 flex flex-col w-full '>
            <h1 className='flex justify-start text-2xl font-semibold py-4'>Trending Recipes</h1>
            <div className='flex md:flex-wrap md:justify-evenly overflow-scroll md:gap-1 gap-[80px] '>
                {
                    recipes && recipes?.map(recipe => (
                        <Link key={recipe.id} className='w-[23%]' to={`/recipe/2323`}><Card recipe={recipe} /></Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Random
