import React from 'react';
import { getPngURL, getVideoURL } from '../assets/images.js';



function ProductionHouse() {

    const productionHouseList = [
        {
            id: 1,
            image: getPngURL('disney'),
            video: getVideoURL('disney'),
        },
        {
            id: 2,
            image: getPngURL('marvel'),
            video: getVideoURL('marvel'),
        },


        {
            id: 3,
            image: getPngURL('national-geographic'),
            video: getVideoURL('national-geographic'),
        },
        {
            id: 4,
            image: getPngURL('pixar'),
            video: getVideoURL('pixar'),
        },
        {
            id: 5,
            image: getPngURL('star-wars'),
            video: getVideoURL('star-wars'),
        },


    ]

    return (

        <div className='flex gap-2 md:gap-5 py-2 px-5 md:px-16'>

            {productionHouseList.map((productionHouse) => (
                <div
                    className='border-[2px] border-gray-600  rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-gray-800'
                    key={productionHouse.id}>
                    <video
                        className='absolute z-0 top-0 rounded-md opacity-0 hover:opacity-50'
                        src={productionHouse.video}
                        autoPlay
                        loop
                        playsInline
                        muted />
                    <img
                        src={productionHouse.image}
                        className='w-full z-1 opacity-100'

                    />
                </div>
            ))}

        </div>

    )
}

export default ProductionHouse