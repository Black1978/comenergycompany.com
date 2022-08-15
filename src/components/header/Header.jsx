import React from 'react'
import './header.css'
import logo from '../../assets/logos/logo.svg'
import { NavLink } from 'react-router-dom'

function Header() {
    const handlerIconOnclick = () => {
        document.querySelector('.header__menu').classList.toggle('active')
        document.querySelector('.header__icon').classList.toggle('active')
        document.querySelector('body').classList.toggle('lock')
    }
    return (
        <header className='header'>
            <div className='header__row'>
                <nav className='header__menu menu'>
                    <div className='menu__body'>
                        <ul className='menu__list'>
                            <li>
                                <NavLink end to='/' className='menu__link'>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/about-us' className='menu__link'>
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/our-projects' className='menu__link'>
                                    Our projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/our-products' className='menu__link'>
                                    Our products
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact' className='menu__link'>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className='header__logo ibg'>
                    <a href='' className='logo_link'>
                        <img src={logo} alt='' />
                    </a>
                </div>
                <div className='header__icon-wrapper'>
                    <div className='header__icon' onClick={handlerIconOnclick}>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
