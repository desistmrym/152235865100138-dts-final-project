import React from 'react';
import Navbar from '../component/Navbar';

const Detail = () => {
    return (
        <>
            <Navbar />
                    <img src="https://i.pinimg.com/564x/8d/c6/e2/8dc6e29bb5956c9a18e334db274d6ffd.jpg" alt="" className='h-[25rem] w-full object-cover' />
            <div className=' pl-5 pr-5'>
                <div className='bg-white rounded-xl rounded-t-none'>
                    <div className='p-5'>
                        <p className='text-xs text-gray-600'>Reviewed by 1 people</p>
                        <div className='bg-[#e6bb7b] p-3 mt-3 w-[50%]'>
                            <i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore fugiat commodi, omnis accusamus aperiam maiores non perferendis dicta maxime, numquam dolorem quos. A vero ea autem exercitationem, quia debitis!</i>
                        </div>
                        <div className='mt-3 flex w-full'>
                            <h1 className='w-[10%] font-bold text-md'>Ingredients :</h1>
                            <div className='w-[40%]'>
                                <ul>
                                    <li>Test 1</li>
                                    <li>Test 1</li>
                                    <li>Test 1</li>
                                </ul>
                            </div>
                        </div>
                        <div className='mt-3 flex w-full'>
                            <h1 className='w-[10%] font-bold text-md'>Directions :</h1>
                            <div className='w-[40%]'>
                                <ul>
                                    <li>Test 1</li>
                                    <li>Test 1</li>
                                    <li>Test 1</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail;