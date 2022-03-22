import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Nav.css";

import { FaFacebookSquare, FaLinkedinIn, FaWhatsappSquare, FaInstagramSquare } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";


const Nav = () => {
    let navigate = useNavigate();

    const [showMediaIcons, SetShowMediaIcons] = useState("false");
    const loadhome = (e) => {
        e.preventDefault()
        navigate("/")
    }
    const loadContact = (e) => {
        e.preventDefault()
        navigate("/contact")
    }
    const loadAbout = (e) => {
        e.preventDefault()
        navigate("/About")
    }



    return (
        <>

            <nav className="main-nav">

                <div className="logo">
                    <h2>
                        ARUN YADAV
                    </h2>
                </div>
                <div className={
                    showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                }>

                    <ul>
                        <li>
                            <button className='btn' onClick={loadhome}>Home</button>
                        </li>
                        <li>
                            <button className='btn' onClick={loadAbout}>About</button>
                        </li>

                        <button className='btnn' onClick={loadContact}>Contact-Us</button>


                    </ul>
                </div>
                <div className="social-media">
                    <ul className="social-media-desktop">

                        <li>

                            <a href="https://www.facebook.com/profile.php?id=100006932405793" target = "_blank">
                                <FaFacebookSquare className="fb" />
                            </a>
                        </li>
                        <li>

                            <a href="https://www.linkedin.com/in/arun-yadav-314507154/" target = "_blank">
                                <FaLinkedinIn className="linkdn" />
                            </a>

                        </li>
                        {/* <li>
                            <a href="https://www.instagram.com/arunkumar8056/">
                                <FaInstagramSquare className="insta" />
                            </a>
                            </li> */}
                        <li>
                            <a href="https://wa.me/917258807043" target = "_blank">
                                <FaWhatsappSquare className="whatsApp" />
                            </a>
                        </li>

                    </ul>
                    {/* hamburger menu */}

                    <div className="hamburger-menu">
                        <a href="#" onClick={() => SetShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu className="hamburger" />
                        </a>
                    </div>
                </div>

            </nav>



        </>
    )
}

export default Nav
