import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../services/GlobalApi';
import MovieCard from './MovieCard';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import HorizontalMovieCard from './HorizontalMovieCard';

function MovieList({ genreId, index_ }) {
  const cardRef = useRef();
  const [movieList, setMovieList] = useState([]);
  const [isHovering, setIsHovering] = useState(false); // State to track hover state

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then(resp => {
      setMovieList(resp.data.results);
    });
  };

  const sliderRight = element => {
    element.scrollLeft += window.innerWidth - 200;
  };

  const sliderLeft = element => {
    element.scrollLeft -= window.innerWidth - 200;
  };

  return (
    <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      {/* Conditionally render icons based on hover state */}
      {isHovering && (
        <>
          <HiChevronLeft
            className={`hidden md:block text-white text-[30px] absolute mx-8 
            cursor-pointer z-[1] text-4xl font-bold'
            ${index_ % 3 == 0 ? 'mt-[80px]' : 'mt-[150px]'}`}
            onClick={() => sliderLeft(cardRef.current)}
          />
          <HiChevronRight
            className={`hidden md:block text-white text-[30px] absolute mx-8 cursor-pointer right-[110px] z-[1] text-4xl font-bold
            ${index_ % 3 == 0 ? 'mt-[80px]' : 'mt-[150px]'}
            `}
            onClick={() => sliderRight(cardRef.current)}
          />
        </>
      )}

      <div className='flex overflow-x-auto scrollbar-hide gap-8 pt-5 px-3 pb-10 scroll-smooth' ref={cardRef}>
        {movieList.map(movie => (

          <>
            {index_ % 3 == 0 ? <HorizontalMovieCard movie={movie} /> : <MovieCard key={movie.id} movie={movie} />}

          </>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
