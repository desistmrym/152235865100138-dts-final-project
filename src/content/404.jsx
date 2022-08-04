import React from 'react' 
import { Link } from 'react-router-dom';
import not_found from '../assets/images/illustration/404.png'

const Handle404 = () => {
    return (
        <>
            <div className='max-w-screen-lg mx-auto mt-10'>
                <img src={not_found} alt="404" className='mx-auto' />
                <div className="text-center">
                    <h1 className='text-4xl text-center font-bold'>Page Not Found</h1>
                    <Link to="/">
                        <button className='bg-[#FFA113] text-white py-2 px-10 mt-5 rounded-xl'>Back to Home</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Handle404;