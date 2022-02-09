import { icon } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import logo from '../assets/logo-1.jpg'
import './Navbar.scss'
import { Link } from 'react-scroll'

const Navbar = () => {  
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">
                <a class="navbar-brand" href="#"><img class="logo" src={ logo } alt="Logo" /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <icon><FontAwesomeIcon icon={faBars} /></icon>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item active">
                            <Link to="home" className="nav-link" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="about-me" offset={-95} className="nav-link" href="#">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="services" offset={-95} className="nav-link" href="#">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="experiences" offset={-95} className="nav-link" href="#">Experiences</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="portfolio" offset={-95} className="nav-link" href="#">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="contacts" offset={-95} className="nav-link" href="#">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar