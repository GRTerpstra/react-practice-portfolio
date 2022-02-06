import React from 'react';
import './Header.scss';
import Typed from 'react-typed'

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Web development and website promotions</h1>
                <div className='typed-tekst'>
                    <Typed 
                        strings={["Web Design", "Web Development", "Social Media Marketing"]}
                        typeSpeed={40}
                        backSpeed={45}
                        loop
                    />
                </div>
                <a href="" className="btn-main-offer">Contact me</a>
            </div>
        </div>
    )
};

export default Header;
