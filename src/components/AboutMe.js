import React from 'react';
import Me from '../assets/me.jpeg'
import './AboutMe.scss';

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={Me} alt="Picture of the author..." />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className='about-heading'>About me:</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Maxime laborum eos quibusdam quia molestiae quam, 
                        quasi consequatur iure doloribus inventore sed quo vel suscipit quos reiciendis atque et odio sit!
                        <br /><br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. C
                        ulpa cum similique provident aliquam, 
                        doloremque nostrum eius dolore, vel natus ratione quod incidunt assumenda! 
                        Iusto, placeat id quae tempora animi repellendus!                        
                        Maxime laborum eos quibusdam quia molestiae quam, 
                        quasi consequatur iure doloribus inventore sed quo vel suscipit quos reiciendis atque et odio sit!
                        <br /><br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Doloremque nostrum eius dolore, vel natu</p>
                </div>
            </div>
        </div>
    )
};

export default AboutMe;
