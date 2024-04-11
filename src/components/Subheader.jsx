import React from 'react'

const Subheader = () => {
    return (
        <div className='text-[16px]] font-semibold text-green-700 flex w-full justify-evenly p-2 bg-purple-100 shadow-md'>
            <div className='cursor-pointer hover:text-green-500'>Cuisines</div>
            <div className='cursor-pointer hover:text-green-500'>Ingredients</div>
            <div className='cursor-pointer hover:text-green-500'>Nutrition</div>
            <div className='cursor-pointer hover:text-green-500'>Diet</div>
            <div className='cursor-pointer hover:text-green-500'>Meal Types</div>
        </div>
    )
}

export default Subheader
