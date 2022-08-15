import React from 'react'
import './mainscreen.css'
import mainimg from '../../assets/main.webp'
import mainimgmask from '../../assets/hero-home-m.svg'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

function Mainscreen() {
    useEffect(() => {
        let ibg = document.querySelectorAll('.ibg')
        console.log(ibg)
        for (var i = 0; i < ibg.length; i++) {
            if (ibg[i].querySelector('img')) {
                ibg[i].style.backgroundImage =
                    'url(' + ibg[i].querySelector('img').getAttribute('src') + ')'
            }
        }
    })
    return (
        <div className='main-screen'>
            <div className='main-screen__bg ibg'>
                <img src={mainimg} alt='comenergycompany.com' />
            </div>
            <div className='main-screen__svg ibg'>
                <img src={mainimgmask} alt='comenergycompany.com' />
            </div>
            <div className='main-screen__content'>
                <h1>
                    All types of electrical installations works
                    <br />
                    quickly and efficiently
                </h1>
                <div className='main-screen__actions actions'>
                    <NavLink className='actions__link-one' to='/lastprojects'>
                        Last projects
                    </NavLink>
                    <NavLink className='actions__link-two' to='/bestsellinggoods'>
                        Best selling goods
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Mainscreen
