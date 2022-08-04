import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const apiUrl = process.env.REACT_APP_API_URL;

const Register = () => {
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [error, setError] = useState('')

    const handleSubmit = () => {
        const body = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            role: 'admin'
        }
        axios.post(apiUrl+'/register', body).then(res => {
            const {token, _id} = res.data.data
            localStorage.setItem('token-recepie', token)
            localStorage.setItem('id-contributor', _id)
            navigate('/')
        }).catch(err => {
            setError(err.response.data.message)
        })
    }
    return (
        <>
            <div className='bg-[#e2ddd9] flex items-center h-screen'>
                <div className='bg-white w-full md:w-[50%] flex rounded-md drop-shadow-2xl py-10 md:mr-[10%] md:ml-[10%] lg:mr-[20%] lg:ml-[25%]'>
                    <div className='hidden md:block md:w-[40%]'>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                            }}
                            navigation={false}
                            modules={[Autoplay]}
                            className="mySwiper hidden md:block"
                        >
                            <SwiperSlide>
                                <img src="https://i.pinimg.com/564x/5f/1a/4a/5f1a4accfb0726666e2d33ff205426e7.jpg" alt="" className='hidden md:block md:h-[25rem]' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://i.pinimg.com/564x/c8/ff/f5/c8fff502e322b953b17630714de9d8fe.jpg" alt="" className='hidden md:block md:h-[25rem]' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://i.pinimg.com/564x/39/46/ce/3946ce40f4ff3825dfa9bb6385d75993.jpg" alt="" className='hidden md:block md:h-[25rem]' />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='w-full md:p-5 md:pt-0 text-center mt-10'>
                        <h1 className='text-[#FFA113] font-bold text-2xl'>Welcome to AllRecepie</h1>
                        <p>Please Sign Up to your account.</p>
                        <form className='px-10 mt-5'>
                            <div className='flex w-full'>
                                <div className='mt-5 w-[50%] mr-5'>
                                    <input type="text" className='w-full py-2 border-[#e2ddd9] border-b-2 focus:border-[#FFA113] text-gray-600 outline-none' placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                                <div className='mt-5 w-[50%]'>
                                    <input type="text" className='w-full py-2 border-[#e2ddd9] border-b-2 focus:border-[#FFA113] text-gray-600 outline-none' placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
                                </div>
                            </div>
                            <div className='mt-5'>
                                <input type="text" className='w-full py-2 border-[#e2ddd9] border-b-2 focus:border-[#FFA113] text-gray-600 outline-none' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className='mt-5'>
                                <input type="password" className='w-full py-2 border-[#e2ddd9] border-b-2 focus:border-[#FFA113] text-gray-600 outline-none' placeholder='Password' onChange={(e) => setPass(e.target.value)} />
                            </div>
                            <div className='mt-1 text-right text-xs hover:text-[#FFA113] cursor-pointer'>
                                {/* Forget Password ? */}
                            </div>
                        </form>
                        <p className='text-red-600'>{error}</p>
                        <div className='mt-3 px-10'>
                            <button className='bg-[#FFA113] hover:bg-[#eb8724] p-2 text-white font-bold px-10 w-full rounded-xl' onClick={()=> handleSubmit()}>Sign In</button>
                        </div>
                        <div className='mt-2 px-10'>
                            {/* <h1 className='mb-2'>OR</h1> */}
                            {/* <button className='bg-[#FFA113] hover:bg-[#eb8724] p-2 text-white font-bold px-10 w-full rounded-xl flex justify-center'><FcGoogle size="25" className='mr-3'></FcGoogle>Sign In with Google</button> */}
                            <p className='text-xs mt-2'>Already have an account? <Link to="/signin"><span className='hover:text-[#FFA113] cursor-pointer'>Sign In</span></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Register;