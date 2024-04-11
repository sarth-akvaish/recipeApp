import React, { useContext, useEffect, useState } from 'react';
import { FaBookmark, FaUser } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { SearchContext } from '../context/searchContext';
import { useSelector } from 'react-redux';
const Header = () => {

    const [Search, setSearch] = useState('');
    const data = useSelector(state => state.user)

    const { setFilters } = useContext(SearchContext)

    useEffect(() => {
        setFilters(Search);
    }, [Search]);


    return (
        <div className='flex justify-between items-center bg-orange-300 md:p-4 p-2 w-full md:px-8'>
            <div className='flex'>
                <Link to={'/'} className='text-green-900 font-bold text-lg md:text-2xl px-2 md:px-4 py-2'>Recipefy</Link>
            </div>
            <div className='flex relative'>
                <input className='md:w-[400px] w-[170px] relative rounded-[40px] focus:outline-none text-sm md:text-md py-1 md:py-2 px-10' type="text" placeholder='Search for Recipes, nutrient, ingredients' value={Search} onChange={(e) => setSearch(e.target.value)} />
                <IoSearchSharp className='absolute text-xl top-[5px] md:top-[10px] left-2' />
            </div>
            <div className='flex px-4 gap-1 md:gap-4'>
                <Link to={`/auth`}>{data ? data : <FaUser className='text-xl text-gray-700 md:text-2xl' />}</Link>
                <Link to={`/saved-recipes`}><FaBookmark className='text-xl md:text-2xl text-gray-700' /></Link>
            </div>
        </div>
    )
}

export default Header
