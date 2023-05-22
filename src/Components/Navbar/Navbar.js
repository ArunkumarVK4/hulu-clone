import React from 'react'
import "./Navbar.css"
import Requests from '../Helper/Requests'


function Navbar({setSelectOption}) {
  return (
    <div className='nav'>
        <h2 onClick={()=> setSelectOption(Requests.fetchTrending)}>Trending</h2>
        <h2 onClick={()=> setSelectOption(Requests.fetchTopRated)}>Top Rated</h2>
        <h2 onClick={()=> setSelectOption(Requests.fetchActionMovies)}>Action</h2>
        <h2 onClick={()=> setSelectOption(Requests.fetchComedyMovies)}>Comedy</h2>
        <h2 onClick={()=> setSelectOption(Requests.fetchHorrorMovies)}>Horror</h2>
        <h2 onClick={()=> setSelectOption(Requests.fetchRomanceMovies)}>Romance</h2>
        <h2 onClick={()=> setSelectOption(Requests.fetchMystery)}>Mystery</h2>
        <h2 onClick={()=> setSelectOption(Requests.fetchSciFi)}>Sci-fi</h2>
        <h2 onClick={()=> setSelectOption(Requests.fetchWestern)}>Western</h2>
        <h2 onClick={()=> setSelectOption(Requests.fetchTv)}>Movie</h2>
    </div>
  )
}

export default Navbar