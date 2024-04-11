import React from 'react'

const Directions = ({ data }) => {
    return (
        <div className='flex flex-col p-4 px-2 md:px-8 md:ml-10'>
            <h1 className='text-3xl font-semibold'>Directions</h1>
            <div className='flex flex-col w-full'>
                {
                    data?.analyzedInstructions?.[0]?.steps?.map(detail => (
                        <div key={detail?.number} className='flex p-2 gap-2 items-center w-full'>
                            <div className='flex flex-col p-2 w-[50%] gap-2'>
                                <p className='font-semibold text-[18px]'>Step - {detail?.number}</p>
                                <p className='text-[16px] tracking-wider'>{detail?.step}</p>
                            </div>
                            <img className='w-[200px] h-[200px]' src={detail?.ingredients[0]?.image} alt="" />
                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default Directions
