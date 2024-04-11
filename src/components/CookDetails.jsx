import React from 'react'

const CookDetails = ({ data }) => {
    return (
        <div className='flex w-full justify-center items-center '>
            <div className="flex w-full md:w-[45%] justify-center border border-gray-600 py-4 ">
                <div className='grid grid-cols-3'>
                    <div className='flex flex-col p-4'>
                        <p className='font-semibold text-md tracking-wider'>Ready Time : </p>
                        <p>{data?.readyInMinutes - 4} mins</p>
                    </div>
                    <div className='flex flex-col p-4'>
                        <p className='font-semibold text-md tracking-wider'>Health Score : </p>
                        <p>{data?.healthScore}</p>
                    </div>
                    <div className='flex flex-col p-4'>
                        <p className='font-semibold text-md tracking-wider'>Additional Time : </p>
                        <p>15 mins</p>
                    </div>
                    <div className='flex flex-col p-4'>
                        <p className='font-semibold text-md tracking-wider'>Total Time : </p>
                        <p>{data?.readyInMinutes} mins</p>
                    </div>
                    <div className='flex flex-col p-4'>
                        <p className='font-semibold text-md tracking-wider'>Servings : </p>
                        <p>{data?.servings}</p>
                    </div>
                    <div className='flex flex-col p-4'>
                        <p className='font-semibold text-md tracking-wider'>Likes : </p>
                        <p>{data?.aggregateLikes}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CookDetails
