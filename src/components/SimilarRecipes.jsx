import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getSimilar } from '../apis/api'
import Loader from './Loader'

const SimilarRecipes = ({ id }) => {

    const { data, isLoading, isError, error } = useQuery('similarRecipes', () => getSimilar(id))

    if (isLoading) return <Loader />;
    if (isError) return <h1 className='text-red-700 font-xl font-bold'>{error.message}</h1>;

    return (
        <div className='flex flex-col w-full gap-4 md:gap-8 mt-8'>
            <h1 className='font-bold text-2xl md:text-3xl'>Similar Recipes</h1>
            <div className='flex overflow-x-scroll overflow-y-hidden justify-evenly gap-[80px] md:gap-4'>
                {
                    data.map(item => (
                        <Link key={item.id} className='min-w-[23%]' to={`/recipe/${item.id}`}><Card recipe={item} /></Link>
                    ))
                }
                {/* <Link className='min-w-[23%]' to={`/recipe/2323`}><Card /></Link>
                <Link className='min-w-[23%]' to={`/recipe/2323`}><Card /></Link>
                <Link className='min-w-[23%]' to={`/recipe/2323`}><Card /></Link>
                <Link className='min-w-[23%]' to={`/recipe/2323`}><Card /></Link>
                <Link className='min-w-[23%]' to={`/recipe/2323`}><Card /></Link>
                <Link className='min-w-[23%]' to={`/recipe/2323`}><Card /></Link> */}
            </div>

        </div>
    )
}

export default SimilarRecipes
