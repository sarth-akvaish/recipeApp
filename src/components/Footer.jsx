import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col justify-center w-full text-gray-400 bg-gray-800 p-6'>
            <div className='flex w-full justify-evenly p-6'>
                <div className='flex flex-col gap-2'>
                    <p>Careers</p>
                    <p>Careers</p>
                    <p>Careers</p>
                    <p>Careers</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Terms of Service</p>
                    <p>Terms of Service</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p>Recipefy</p>
                </div>
            </div>
            <div className="flex justify-center text-gray-100">
                <p>Recepify 2024 Copyright All rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
