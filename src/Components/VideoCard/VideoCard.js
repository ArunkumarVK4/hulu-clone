import React from 'react'
import TextTruncate from "react-text-truncate"
import "./VideoCard.css"
import { forwardRef } from 'react';

const base_url = "https://image.tmdb.org/t/p/original";


const VideoCard = forwardRef(({movie},ref)=> {
  return (
    <div ref={ref} className='videoCard'>
    <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="image" />
    <TextTruncate
    line={1}
    element="p"
    truncateText="..."
    text={movie.overview}
    />
    <h2>{movie.title || movie.original_name}</h2>
    <p className='videoCard__stats'>{movie.media_type} 
    {movie.release_date || movie.first_air_date}
    </p>
</div>
  )
}
)

export default VideoCard