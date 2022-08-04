import React from 'react';
import { BiSearch } from 'react-icons/bi';
import Navbar from '../component/Navbar';
import soup from '../assets/images/icons/soup.png'
import { Link } from 'react-router-dom';

const Recepie = () => {
    return (
        <div>
            <Navbar />
            <div className='pt-20 flex w-full items-center'>
                <div className='w-[35%]'></div>
                <div className='bg-[#FFA113] px-5 py-3 text-white'><BiSearch></BiSearch></div>
                <input className='px-5 items-center py-2 w-[25%]' name='search' placeholder='Enter Recepie' />
                <div className='w-[30%]'></div>
            </div>
            <div className='p-5 pt-5 text-center'>
                <button className='bg-gray-200 px-5 py-2 mr-2'>Newest</button>
                <button className='bg-gray-200 px-5 py-2'>Popular</button>
            </div>
            <div className='flex justify-between w-full p-5 ml-5 mr-5'>
                <div className='w-[20%] bg-white rounded-xl'>
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
    )
}

export default Recepie;