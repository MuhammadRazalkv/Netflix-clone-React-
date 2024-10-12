
import React, { useEffect, useRef } from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'
import bell_icon from '../../assets/bell_icon.svg'
import searchIcon from '../../assets/search_icon.svg'
import profileImg from '../../assets/profile_img.png'
import caretIcon from '../../assets/caret_icon.svg'
import { logOut } from '../../firebase'


const NavBar = () => {

  
  const navRef = useRef<HTMLDivElement  | null>(null); // Explicitly typing as HTMLElement

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY >= 80) {  // Correcting window.scrollY (not screenY)
        if (navRef.current) {
          navRef.current.classList.add('nav-dark');
        }
      } else {
        if (navRef.current) {
          navRef.current.classList.remove('nav-dark');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount to avoid memory leaks
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  })

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
            <li>Home </li>
            <li>Tv Shows</li>
            <li>Movies </li>
            <li>New & Popular </li>
            <li>My List  </li>
            <li>Browse by language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={searchIcon} alt="" className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt="" className='icons' />
        <div className="navbar-profile">
        <img src={profileImg} alt="" className='profile' />
        <img src={caretIcon} alt=""  />
        <div className="dropdown">
            <p onClick={()=>{logOut()}}>Sign out of Netflix </p>
        </div>
        </div>

      </div>
    </div>
  )
}

export default NavBar
