import React from 'react'

function HorizontalMovieCard({movie}) {

    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";


    return (
        <section className='  hover:scale-[1.1] transition-all duration-150 ease-in'>
            <img src={IMAGE_BASE_URL + movie.backdrop_path}
                className='w-[110px] md:w-[260px] rounded-lg
        hover:border-[3px] hover:border-gray-400 cursor-pointer
      '/>

        <h2 className='w-[110px] md:w-[260px] mt-4 text-white text-center'>{movie.title}</h2>
        </section>
    )
}

export default HorizontalMovieCard