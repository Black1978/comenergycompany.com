import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logos/logo.svg'
import primaryfoot1 from '../../assets/primary-foot-1.svg'
import primaryfoot2 from '../../assets/primary-foot-2.svg'
import primaryfoot3 from '../../assets/primary-foot-3.svg'
import './footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer__wrapper'>
                    <div className='footer__primary'>
                        <div className='footer__column-top column-top footer__column-top_m'>
                            <div className='column-top__img ibg'>
                                <img src={primaryfoot1} alt='' />
                            </div>
                            <h2>Navigations</h2>
                            <hr />
                            <nav className='footer__menu menu-footer'>
                                <ul className='menu-footer__list'>
                                    <li className='menu-footer__li'>
                                        <NavLink to='/' className='menu-footer__link'>
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className='menu-footer__li'>
                                        <NavLink to='/about-us' className='menu-footer__link'>
                                            About Us
                                        </NavLink>
                                    </li>
                                    <li className='menu-footer__li'>
                                        <NavLink to='/our-projects' className='menu-footer__link'>
                                            Our projects
                                        </NavLink>
                                    </li>
                                    <li className='menu-footer__li'>
                                        <NavLink to='/our-products' className='menu-footer__link'>
                                            Our products
                                        </NavLink>
                                    </li>
                                    <li className='menu-footer__li'>
                                        <NavLink to='/contact' className='menu-footer__link'>
                                            Contact
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className='footer__column-top column-top'>
                            <div className='column-top__img ibg'>
                                <img src={primaryfoot2} alt='' />
                            </div>
                            <h2>About us</h2>
                            <hr />
                            <p className='column-top__mission-header'>Our experience</p>
                            <p className='column-top__mission'>
                                Our many years of experience in carrying out electrical work, allows
                                our company to quickly and quality installation and subsequent
                                adjustment of low-voltage networks and high voltage equipment
                            </p>
                            <nav className='footer__menu menu-footer'>
                                <ul className='menu-footer__list'>
                                    <li className='menu-footer__li'>
                                        <NavLink to='/about-us' className='menu-footer__link'>
                                            About Us
                                        </NavLink>
                                    </li>
                                    <li className='menu-footer__li'>
                                        <a
                                            href='https://en.wikipedia.org/wiki/IEC_60364'
                                            className='menu-footer__link'
                                            target='_blank'
                                        >
                                            The standarts
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className='footer__column-top column-top'>
                            <div className='column-top__img ibg'>
                                <img src={primaryfoot3} alt='' />
                            </div>
                            <h2>Contact</h2>
                            <hr />
                            <p className='column-top__mission-header'>Call us!</p>
                            <br />
                            <a href='tel: +48 577 398 882' className='column-top__tel-link'>
                                +48 577 398 882
                            </a>
                            <p className='column-top__mission-header'>Our address:</p>
                            <p className='column-top__mission'>
                                {' '}
                                <br />
                                Poland
                                <br />
                                Wroclaw
                                <br />
                                Boleslawiecka 7/9{' '}
                            </p>
                            <nav className='footer__menu menu-footer menu-footer_mb'>
                                <ul className='menu-footer__list'>
                                    <li className='menu-footer__li'>
                                        <NavLink to='/contact' className='menu-footer__link'>
                                            Contact
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                            <h2 className='column-top__mission-header'>Price list</h2>
                            <p className='column-top__mission'>
                                Here you can get acquainted with the prices for the work performed
                                by us, as well as the prices for equipment sold
                            </p>
                            <div className='column-top__button button-price'>
                                <NavLink to='/pricelist'>
                                    Our prices
                                    <span className='button-price__container'>
                                        <span className='button-price__chevron'></span>
                                    </span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='footer__secondary'>
                        <div className='footer__column-bottom'>
                            <ul className='footer__connect-links footer__connect-links_left'>
                                <li>
                                    <a
                                        href='https://www.se.com/'
                                        className='footer__icon-schnaider'
                                        target='_blank'
                                    ></a>
                                </li>
                                <li>
                                    <a
                                        href='https://www.obo.pl/'
                                        className='footer__icon-obo'
                                        target='_blank'
                                    ></a>
                                </li>
                            </ul>
                            <hr />
                        </div>
                        <div className='footer__column-bottom footer__column-bottom_m'>
                            <div className='footer__logo ibg'>
                                <img src={logo} alt='' />
                            </div>
                        </div>
                        <div className='footer__column-bottom'>
                            <ul className='footer__connect-links footer__connect-links_right'>
                                <li>
                                    <a
                                        href='https://www.facebook.com'
                                        className='footer__icon-facebook'
                                        target='_blank'
                                    ></a>
                                </li>
                                <li>
                                    <a
                                        href='https://www.linkedin.com'
                                        className='footer__icon-linkedin'
                                        target='_blank'
                                    ></a>
                                </li>
                            </ul>
                            <hr />
                        </div>
                    </div>
                    <p className='footer__copyright'>
                        © 2022 AndriiChernyi |<a href='#'> Privacy Policy</a>
                    </p>
                    <p className='footer__modified'> Page last modified on July 25, 2022 </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
