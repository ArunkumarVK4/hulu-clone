import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import "./Header.css"



function Header() {
  return (
    <div className='header'>
        <div className='header__icons'>
            <div className='header__icon header__icon__active'>
                <HomeIcon/>
                <p>Home</p>
            </div>

            <div className='header__icon'>
                <FlashOnIcon/>
                <p>Trending</p>
            </div>

            <div className='header__icon'>
                <LiveTvIcon/>
                <p>Verified</p>
            </div>

            <div className='header__icon'>
                <VideoLibraryIcon/>
                <p>Collections</p>
            </div>
          
            <div className='header__icon'>
                <SearchIcon/>
                <p>Search</p>
            </div>

            <div className='header__icon'>
                <PersonOutlineIcon/>
                <p>Account</p>
            </div>
        </div>
        
        {/* IMAGE */}
        <div>
            <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" alt="" />
        </div>

          
    </div>
  )
}

export default Header