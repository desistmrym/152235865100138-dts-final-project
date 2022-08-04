import React from 'react';
import { BiSearch } from 'react-icons/bi';

const Search = () => {
    return (
        <div className='pt-20 flex w-full items-center'>
            <div className='w-[35%]'></div>
            <div className='bg-[#FFA113] px-5 py-3 text-white rounded-l-lg'><BiSearch></BiSearch></div>
            <input className='px-5 items-center py-2 w-full md:w-[25%] rounded-r-lg' name='search' placeholder='Enter Recepie' />
            <div className='w-[30%]'></div>
        </div>
    )
}

export default Search;