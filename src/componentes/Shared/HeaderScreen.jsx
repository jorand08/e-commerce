import React from 'react'
import { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './styles/headerScreen.css'

const HeaderScreen = () => {
    const navbar = useRef()
    const clickMenuHam =()=>{
        navbar.current.classList.toggle('navbar-open')
    }
  return (
    <header className='header'>
        <h1 className='header_title'>
            <Link to='/'>e-commerce</Link>
        </h1>
        <div onClick={clickMenuHam} className='header_menuham'>
        <i className="fa-solid fa-bars"></i>
        </div>
        <nav ref={navbar} className="navbar">
            <ul className="navbar_list">
                <li className="navbar_items">
                    <NavLink 
                        to='/login' 
                        className={({isActive})=> isActive ? 'navbar_link-active navbar_links' : 'navbar_links'}>
                        <i className="fa-solid fa-user"></i>
                        <p className='Navbar_label'>Login</p>
                    </NavLink>
                </li>
                <li className="navbar_items">
                    <NavLink 
                        to='/purchases' 
                        className={({isActive})=> isActive ? 'navbar_link-active navbar_links' : 'navbar_links'}>
                        <i className="fa-solid fa-store"></i>
                        <p className='Navbar_label'>Purchases</p>
                    </NavLink>
                </li>
                <li className="navbar_items">
                    <NavLink 
                        to='/cart'
                        className={({isActive})=> isActive ? 'navbar_link-active navbar_links' : 'navbar_links'}>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <p className='Navbar_label'>Cart</p>
                    </NavLink>
                </li>
            </ul>
        </nav>   
    
    </header>
  )
}

export default HeaderScreen
