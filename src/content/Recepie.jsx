import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar';
import soup from '../assets/images/icons/soup.png'
import meat from '../assets/images/icons/meat.png';
import { Link } from 'react-router-dom';
import b1 from '../assets/images/illustration/b1.jpg';
import not from '../assets/images/illustration/not.png';
import axios from 'axios';
import Search from '../component/Search';

const Recepie = () => {
    const [list, setList] = useState([])
    const token = localStorage.getItem('token-recepie')

    useEffect(() => {
        const apiUrl = process.env.REACT_APP_API_URL + '/recipe'
        axios.get(apiUrl, {
            headers: {
                'X-ACCESS-TOKEN': token
            }
        })
        .then(res => {
            console.log(res.data.data)
            setList(res.data.data)
        })
    }, [token])
    return (
        <div>
            <Navbar />
            <Search />
            <div className='p-5 pt-5 text-center'>
                <button className='bg-gray-200 px-5 py-2 mr-2 rounded-lg'>Newest</button>
                <button className='bg-gray-200 px-5 py-2 rounded-lg'>Popular</button>
            </div>
            {token !== null ? (
                <div className='flex justify-between flex-wrap w-full md:pl-10 md:pr-20'>
                    {list.length > 0 ? list.map((item,i) => (
                        <div className='w-full md:w-[20%]'>
                            <div className='m-2 bg-white rounded-xl'>
                                <Link to={`/recepie-detail/${item.name}`}>
                                    <img src={b1} alt="" className='h-[15rem] w-full object-cover rounded-xl rounded-bl-none rounded-br-none' />
                                    <h1 className='pl-5 pt-2 font-bold'>{item.name}</h1>
                                    <div className='flex pl-5 pb-2 pt-1'>
                                        {item.category_id.name === 'daging' ? (
                                            <>
                                                <div className='bg-[#eeb2cc] rounded-full p-3 relative w-4'></div>
                                                <img src={meat} alt="meat" className='absolute w-4 ml-1 mt-1' />
                                                <h1 className='ml-2 text-sm'>Meat</h1>
                                            </>
                                        ) : (
                                            <>
                                                <div className='bg-[#ffd8c6] rounded-full p-3 relative w-4'></div>
                                                <img src={soup} alt="soup" className='absolute w-4 ml-1 mt-1' />
                                                <h1 className='ml-2 text-sm'>Soup</h1>
                                            </>
                                        )}
                                    </div>
                                    <p className='pl-5 pb-1 text-xs text-gray-500'>{item.description}</p>
                                    <div className='p-1'>
                                        {/* <hr></hr> */}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))
                    : (
                        <div className='w-full mt-3 text-center '>
                            <img src={not} alt="404" className='mx-auto' />
                            <h1 className='md:text-2xl font-bold'>No Data Available</h1>
                        </div>
                    )}
                </div>
            ) : (
                <h1 className='md:text-2xl font-bold text-center'>Please Login</h1>
            )}
        </div>
    )
}

export default Recepie;