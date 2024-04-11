import React, { useContext, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { getRecipes } from '../apis/api'
import Card from '../components/Card'
import Loader from '../components/Loader'
import Random from '../components/Random'
import { SearchContext } from '../context/searchContext'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

const Home = () => {

    const { data, isLoading, isError, error } = useQuery('recipes', () => getRecipes(page))
    const [page, setpage] = useState(0);
    const { filters } = useContext(SearchContext)

    console.log(page)


    const [filteredRecipes, setFilteredRecipes] = useState([])

    useEffect(() => {
        if (data) {
            const filteredData = data.results.filter(result =>
                result.title.toLowerCase().includes(filters.toLowerCase())
            )
            setFilteredRecipes(filteredData)
        }
    }, [data, filters, page])


    if (isLoading) return <Loader />;
    if (isError) return <h1 className='font-bold text-red-700 p-12'>{error.message}</h1>

    return (
        <>
            <Random recipes={data.results.slice(6, 10)} />
            <div className='flex flex-col gap-4 p-4 w-full'>
                <h1 className='font-semibold text-2xl px-4'>Popular Recipes</h1>
                <div className='md:flex md:flex-wrap grid grid-cols-2 gap-4 md:justify-evenly md:gap-4'>
                    {
                        filteredRecipes?.map(result => (
                            <Link key={result.id} className='md:w-[23%] flex justify-center' to={`/recipe/${result.id}`}><Card recipe={result} /></Link>
                        ))
                    }
                </div>
            </div>
            <div className='flex justify-center p-4 gap-4'>
                <button onClick={() => setpage((page) => page - 1)} className='p-2 bg-orange-300 gap-2 items-center font-semibold rounded-md flex'>
                    <FaArrowCircleLeft />
                    <p>Prev</p>
                </button>
                <button onClick={() => setpage((page) => page + 1)} className='p-2 flex items-center gap-2 bg-orange-300 font-semibold rounded-md'>
                    <p>Next</p>
                    <FaArrowCircleRight />
                </button>
            </div>

        </>
    )
}

export default Home
