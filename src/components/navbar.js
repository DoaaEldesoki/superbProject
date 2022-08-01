import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'
import logo from '../images/superb_pages-to-jpg-0001 - Copy.jpg'



export const Navbar = () => {
    return (
        <div>
            <nav class="navbar   navbar-expand-lg navbar-dark bg-primary fixed-top  ">
                <div class="container-fluid ">
                    <a class="navbar-brand" href="#"> <img src={logo} width='120px' /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarText">
                        <ul class="navbar-nav  mr-auto">

                            <li class="nav-item">
                                <a href='#aboutUs' className='nav-link' > About Us</a>
                            </li>
                            <li class="nav-item">
                            <a href='#giveAways' className='nav-link' > Giveaways</a>

                            </li>
                            <li class="nav-item">
                            <a href='#booths' className='nav-link' > Booths</a>
                            </li>
                            <li class="nav-item">
                            <a href='#prints' className='nav-link' > Prints</a>
                            </li>
                            <li class="nav-item">
                            <a href='#contact' className='nav-link' > Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;