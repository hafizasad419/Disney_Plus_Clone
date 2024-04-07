import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../services/GlobalApi';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

const screeWidth = window.innerWidth;

function Slider() {

    const [moviesList, setMoviesList] = useState([]);
    const imgContainerElementRef = useRef();

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then((res) => {
            // console.log(res.data.results);
            setMoviesList(res.data.results)
        })
    }

    useEffect(() => {
        getTrendingMovies()
    }, [])


    const sliderRight = (element) => {
        element.scrollLeft += screeWidth - 200
    }

    const sliderLeft = (element) => {
        element.scrollLeft -= screeWidth - 200
    }

    return (

        <div>
            <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer '
                onClick={() => sliderLeft(imgContainerElementRef.current)}
            />
            <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-[90px]'
                onClick={() => sliderRight(imgContainerElementRef.current)}
            />

            <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide duration-[2s] scroll-smooth ' ref={imgContainerElementRef}>

                {moviesList.map((movie, index) => (

                    <img key={index} src={`${IMG_BASE_URL}${movie.backdrop_path}`} alt=""
                        className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-4 hover:border-gray-400 transition-all duration-100 ease-in'
                    />

                ))} 

            </div>
        </div>
    )
} 

export default Slider