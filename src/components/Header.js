import React from 'react'
import './Header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchBar from '../assets/header/search.png'


function Header() {
    return (
      <div className='header'>
            <div className='logoContainer'>
                <img src={punkLogo} alt='punk-logo'/>
            </div>
            <div className='searchBar'>
                <div className='searchBarIconContainer'>
                    <img src={searchBar} alt='search-bar-icon' />
                </div>
                <input type='text' placeholder='Collection, item or user' />
            </div>
      </div>
    );
}

export default Header
