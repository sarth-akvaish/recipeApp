import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        fullName: '',
        username: '',
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    }

    const loginHandler = () => {
        let formIsValid = true;
        const newErrors = { ...errors };

        if (!formData.username) {
            newErrors.username = 'Username is required'
            formIsValid = false;
        }

        if (formData.password.length < 6) {
            newErrors.password = 'Atleast 6 character are required'
            formIsValid = false;
        }

        setErrors(newErrors);
        if (formIsValid) {
            dispatch(addUser(formData.username))
            navigate('/')
        }
    }

    const signupHandler = () => {
        let formIsValid = true;
        const newErrors = { ...errors };

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full Name is required';
            formIsValid = false;
        }

        if (!formData.username.trim()) {
            newErrors.username = 'Username is required';
            formIsValid = false;
        }

        if (!formData.email) {
            newErrors.email = 'Email is required'
            formIsValid = false;
        }

        if (formData.password.length < 6) {
            newErrors.password = 'Atleast 6 character are required'
            formIsValid = false;
        }

        setErrors(newErrors);
        if (formIsValid) {
            dispatch(addUser(formData.username))
            navigate('/');
        }
    }

    return (
        <div className='w-full flex justify-center my-4'>
            <div className='flex w-full md:w-[50%] items-center justify-center my-4'>
                <div className='flex w-[65%] md:w-[60%] flex-col gap-4 items-center justify-center p-4'>
                    <h1 className='text-gray-700 text-center text-3xl font-semibold tracking-wider'>
                        {isLogin ? 'Login' : 'Signup'}
                    </h1>
                    {isLogin ?
                        <>
                            <input className='bg-gray-200  focus:outline-none p-2 px-4 w-full rounded-lg' type="text" placeholder='username..' name='username' value={formData.username} onChange={handleInputChange} />
                            {errors.username && (
                                <p className='text-red-500 text-xs'>{errors.username}</p>
                            )}
                        </>
                        :
                        <>
                            <input className='bg-gray-200 focus:outline-none p-2 px-4 w-full rounded-lg' type="text" placeholder='full Name..' name='fullName' value={formData.fullName} onChange={handleInputChange} />
                            {errors.fullName && (
                                <p className='text-red-500 text-xs'>{errors.fullName}</p>
                            )}

                            <input className='bg-gray-200  focus:outline-none p-2 px-4 w-full rounded-lg' type="text" placeholder='email..' name='email' value={formData.email} onChange={handleInputChange} />
                            {errors.email && (
                                <p className='text-red-500 text-xs'>{errors.email}</p>
                            )}
                        </>
                    }

                    <input className='bg-gray-200 focus:outline-none  p-2 px-4 w-full rounded-lg' type="text" placeholder='password..' name='password' value={formData.password} onChange={handleInputChange} />
                    {errors.password && (
                        <p className='text-red-500 text-xs'>{errors.password}</p>
                    )}
                    <p className='flex text-sm text-blue-500'>Forgot password ? </p>
                    <button type='submit' onClick={isLogin ? loginHandler : signupHandler} className='w-full p-2 rounded-md hover:bg-orange-300 bg-orange-400 text-white text-lg font-semibold'>{
                        isLogin ? "Login" : 'Signup'
                    }</button>
                    <p className='text-sm text-gray-500'>Already signed up? <span onClick={() => setIsLogin(!isLogin)} className='text-blue-700 cursor-pointer'>{
                        isLogin ? 'Signup' : 'Login'}</span></p>
                </div>

            </div>
        </div>
    )
}

export default Auth
