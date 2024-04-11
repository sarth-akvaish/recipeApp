import React from 'react';
import { CiHeart } from "react-icons/ci";
import { FaPrint, FaShare } from 'react-icons/fa';
import { MdStarRate } from "react-icons/md";
import CookDetails from '../components/CookDetails';
import Ingredients from '../components/Ingredients';
import Directions from '../components/Directions';
import SimilarRecipes from '../components/SimilarRecipes';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getRecipeById } from '../apis/api';
import Loader from '../components/Loader';
import { useDispatch } from 'react-redux';
import { addRecipe } from '../store/recipeSlice';

const RecipePage = () => {

    const { id } = useParams();
    const { data, isLoading, isError, error } = useQuery('recipeInfo', () => getRecipeById(id))
    const dispatch = useDispatch()

    const addHandler = () => {
        dispatch(addRecipe(data));
    }

    if (isLoading) return <Loader />;
    if (isError) return <h1>{error.message}</h1>

    return (
        <div className='flex flex-col w-full justify-center p-8 gap-4'>
            <div className='flex md:flex-row flex-col w-full justify-center'>
                <div className="flex md:w-[40%] w-full p-4">
                    <img className='w-[100%] ' src={data?.image} alt="" />
                </div>
                <div className="flex flex-col w-full md:w-1/2 p-4 gap-2">
                    <h1 className='text-3xl font-semibold tracking-wide'>{data?.title}</h1>
                    <div className='flex'>
                        <p className='text-gray-600 tracking-wider'>{data?.license} | &#x20B9; {data?.pricePerServing} | 4.8 Star</p>
                    </div>
                    <div className='gap-1 font-semibold flex w-[70%] tracking-wide leading-5'>
                        {
                            data?.dishTypes && data?.dishTypes?.map(item => (
                                <p key={item.id}>{item} | </p>
                            ))
                        }
                    </div>
                    <p className='tracking-wide font-semibold'>Submitted by {data?.sourceName} </p>
                    <div className='w-[100%] md:w-[50%] flex justify-center mt-4 gap-8 py-4 border border-gray-100'>
                        <div className='flex flex-col gap-1 '>
                            <CiHeart onClick={addHandler} className='text-2xl cursor-pointer hover:text-orange-600' />
                            <p>Save</p>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <MdStarRate Heart className='text-2xl cursor-pointer hover:text-orange-600' />
                            <p>Rate</p>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <FaPrint className='text-2xl cursor-pointer hover:text-orange-600' />
                            <p>Print</p>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <FaShare className='text-2xl cursor-pointer hover:text-orange-600' />
                            <p>Share</p>
                        </div>

                    </div>
                </div>
            </div>
            {/* Ingredients  */}
            <CookDetails data={data} />
            <Ingredients data={data} />
            <Directions data={data} />
            <SimilarRecipes id={id} />
        </div>
    )
}

export default RecipePage
