import React from 'react'

const Ingredients = ({ data }) => {
    console.log(data)
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
            <div className='flex flex-col border border-gray-300 rounded-md p-4 gap-4 shadow-md'>
                <h1 className='text-3xl font-semibold mb-4'>Ingredients</h1>
                <div className='flex'>
                    <ul className='flex flex-col gap-2 list-disc px-8 text-[18px]'>
                        {
                            data?.extendedIngredients && data?.extendedIngredients?.map(item => (
                                <li key={item.id}>{item?.original}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-3 border border-gray-200 shadow-md rounded-md">
                {
                    data?.extendedIngredients?.map(item => (
                        <div key={item.id} className='flex flex-col p-2'>
                            <img className='w-[150px] h-[130px]' src={`https://img.spoonacular.com/ingredients_250x250/${item.image}`} alt="" />
                            <p className='text-center'>{item?.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Ingredients
