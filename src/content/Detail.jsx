import React from 'react';
import Navbar from '../component/Navbar';
import soup from '../assets/images/icons/soup.png';
import { Link } from 'react-router-dom';

const Detail = () => {
    return (
        <>
            <Navbar />
            <img src="https://i.pinimg.com/564x/8d/c6/e2/8dc6e29bb5956c9a18e334db274d6ffd.jpg" alt="" className='h-[25rem] w-full object-cover' />
            <div className=' pl-5 pr-5 pb-5'>
                <div className='bg-white rounded-xl rounded-t-none ml-5 mr-5'>
                    <div className='p-5 flex w-full'>
                        <div className='w-[70%] mr-5'>
                            <p className='text-xs text-gray-600'>Reviewed by 1 people</p>
                            <div className='bg-[#e6bb7b] p-3 mt-3 w-full'>
                                <i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore fugiat commodi, omnis accusamus aperiam maiores non perferendis dicta maxime, numquam dolorem quos. A vero ea autem exercitationem, quia debitis!</i>
                            </div>
                            <div className='mt-3 flex w-full'>
                                <h1 className='w-[10%] font-bold text-md'>Ingredients :</h1>
                                <div className='w-[60%]'>
                                    <ul>
                                        <li>Test 1</li>
                                        <li>Test 1</li>
                                        <li>Test 1</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='mt-3 flex w-full'>
                                <h1 className='w-[10%] font-bold text-md'>Directions :</h1>
                                <div className='w-[60%]'>
                                    <ul>
                                        <li>Test 1</li>
                                        <li>Test 1</li>
                                        <li>Test 1</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='w-[30%] bg-white rounded-xl border border-grey-600'>
                            <Link to="/recepie-detail/korean">
                                <img src="https://i.pinimg.com/564x/8d/c6/e2/8dc6e29bb5956c9a18e334db274d6ffd.jpg" alt="" className='h-[15rem] w-full object-cover rounded-xl rounded-bl-none rounded-br-none' />
                                <h1 className='pl-5 pt-2 font-bold'>Title Recepie</h1>
                                <div className='flex pl-5 pb-2 pt-1'>
                                    <div className='bg-[#ffd8c6] rounded-full p-3 relative w-4'></div>
                                    <img src={soup} alt="soup" className='absolute w-4 ml-1 mt-1' />
                                    <h1 className='ml-2 text-sm'>Soup</h1>
                                </div>
                                <p className='pl-5 pb-1 text-xs text-gray-500'>Description</p>
                                <div className='p-1'>
                                    <hr></hr>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail;