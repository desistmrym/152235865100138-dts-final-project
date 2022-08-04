import React from 'react';
import soup from '../assets/images/icons/soup.png'
import drink from '../assets/images/icons/drink.png'
import cupcake from '../assets/images/icons/cupcake.png'
import meat from '../assets/images/icons/meat.png'
import salad from '../assets/images/icons/salad.png'
import soupIllustration from '../assets/images/illustration/soup.jpg'
import drinkIllustration from '../assets/images/illustration/drink.jpg'
import dessertIllustration from '../assets/images/illustration/dessert.jpg'
import beefIllustration from '../assets/images/illustration/meat.jpg'
import saladIllustration from '../assets/images/illustration/vegetarian.jpg'

const Categories = () => {
    return (
        <div className='p-5 ml-5 mr-5'>
            <div className='flex justify-between w-full'>
                <div className='bg-white rounded-xl p-5 w-[20%] m-1'>
                    <div className='flex'>
                        <div className='bg-[#ffd8c6] rounded-full p-5 relative w-10'></div>
                        <img src={soup} alt="soup" className='absolute w-6 ml-2 mt-2' />
                        <h1 className='ml-2 mt-2 font-bold'>Soup</h1>
                    </div>
                    <div className='mt-3'>
                        <h1 className='font-bold text-[24px]'>Show All Categories Soup</h1>
                        <div className='mt-5'>
                            <img src={soupIllustration} alt="" className='rounded-lg' />
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-xl p-5 w-[20%] m-1'>
                    <div className='flex'>
                        <div className='bg-[#ffe6c8] rounded-full p-5 relative w-10'></div>
                        <img src={drink} alt="drink" className='absolute w-6 ml-2 mt-2' />
                        <h1 className='ml-2 mt-2 font-bold'>Drink</h1>
                    </div>
                    <div className='mt-3'>
                        <h1 className='font-bold text-[24px]'>Show All Categories Drink</h1>
                        <div className='mt-5'>
                            <img src={drinkIllustration} alt="" className='rounded-lg' />
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-xl p-5 w-[20%] m-1'>
                    <div className='flex'>
                        <div className='bg-[#d1eee9] rounded-full p-5 relative w-10'></div>
                        <img src={cupcake} alt="dessert" className='absolute w-6 ml-2 mt-2' />
                        <h1 className='ml-2 mt-2 font-bold'>Dessert</h1>
                    </div>
                    <div className='mt-3'>
                        <h1 className='font-bold text-[24px]'>Show All Categories Dessert</h1>
                        <div className='mt-5'>
                            <img src={dessertIllustration} alt="" className='rounded-lg' />
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-xl p-5 w-[20%] m-1'>
                    <div className='flex'>
                        <div className='bg-[#eeb2cc] rounded-full p-5 relative w-10'></div>
                        <img src={meat} alt="meat" className='absolute w-6 ml-2 mt-2' />
                        <h1 className='ml-2 mt-2 font-bold'>Meat</h1>
                    </div>
                    <div className='mt-3'>
                        <h1 className='font-bold text-[24px]'>Show All Categories Meat</h1>
                        <div className='mt-5'>
                            <img src={beefIllustration} alt="" className='rounded-lg' />
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-xl p-5 w-[20%] m-1'>
                    <div className='flex'>
                        <div className='bg-[#fff0e1] rounded-full p-5 relative w-10'></div>
                        <img src={salad} alt="salad" className='absolute w-6 ml-2 mt-2' />
                        <h1 className='ml-2 mt-2 font-bold'>Vegetarian</h1>
                    </div>
                    <div className='mt-3'>
                        <h1 className='font-bold text-[24px]'>Show All Categories Vegetarian</h1>
                        <div className='mt-5'>
                            <img src={saladIllustration} alt="" className='rounded-lg' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;