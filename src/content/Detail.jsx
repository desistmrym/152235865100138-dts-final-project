import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar';
import soup from '../assets/images/icons/soup.png';
import meat from '../assets/images/icons/meat.png';
import { Link, useParams } from 'react-router-dom';
import b1 from '../assets/images/illustration/b1.jpg';
import axios from 'axios';
import Swal from 'sweetalert2';

const Detail = () => {
    const { name } = useParams();
    const [cook, setCook] = useState([]);

    useEffect(() => {
        const apiUrl = process.env.REACT_APP_API_URL + '/recipe?recipe='+name
        const token = localStorage.getItem('token-recepie');
        axios.get(apiUrl, {
            headers: {
                'X-ACCESS-TOKEN': token
            }
        })
        .then(res => {
            setCook(res.data.data)
        })
        .catch(() => {
            Swal.fire('Error', 'Network Error', 'error')
        })
    }, [name])
    return (
        <>
            <Navbar />
            <img src={b1} alt="" className='h-[25rem] w-full object-cover' />
            <div className=' pl-5 pr-5 pb-5'>
                <div className='bg-white rounded-xl rounded-t-none ml-5 mr-5'>
                    <div className='p-5 flex w-full'>
                        <div className='w-[70%] mr-5'>
                            {/* <p className='text-xs text-gray-600'>Contributor {cook.contributor_id.first_name}</p> */}
                            <div className='bg-[#e6bb7b] p-3 mt-3 w-full'>
                                <i>{cook.description}</i>
                            </div>
                            <div className='mt-3 flex w-full'>
                                <h1 className='w-[10%] font-bold text-md'>Ingredients :</h1>
                                <div className='w-[60%]'>
                                    <ul>
                                        {cook.ingredient.length > 0 ? cook.ingredient.map((item, i) => (
                                            <li>{item[i+1]}</li>
                                        )) : null}
                                    </ul>
                                </div>
                            </div>
                            <div className='mt-3 flex w-full'>
                                <h1 className='w-[10%] font-bold text-md'>Directions :</h1>
                                <div className='w-[60%]'>
                                    <ul>
                                        {cook.step.length > 0 ? cook.step.map((item, i) => (
                                            <li>{item[i+1]}</li>
                                        )) : null}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='w-[30%] bg-white rounded-xl border border-grey-600'>
                            <Link to="/recepie-detail/korean">
                                <img src={b1} alt="" className='h-[15rem] w-full object-cover rounded-xl rounded-bl-none rounded-br-none' />
                                <h1 className='pl-5 pt-2 font-bold'>{cook.name}</h1>
                                <div className='flex pl-5 pb-2 pt-1'>
                                    {cook.category_id.name === 'daging' ? (
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
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail;