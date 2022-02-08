import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';
import avatar1 from '../assets/avatars/avatar-1.png';
import avatar2 from '../assets/avatars/avatar-2.png';
import avatar3 from '../assets/avatars/avatar-3.png';
import avatar4 from '../assets/avatars/avatar-4.png';
import './Testimonials.scss'
import './TestimonialsCarousel.scss'

const TestimonialsCarousel = () => {
    return (
        <Carousel
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={5000}
        >
            <>
                <img src={avatar1} alt="John Doe 1" />
                <div className="my-carousel">
                    <h3>Joe Doe 1</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum eius beatae doloremque. Rerum vel neque laboriosam, quis hic adipisci deleniti.</p>
                </div>
            </>
            <>
                <img src={avatar2} alt="John Doe 2" />
                <div className="my-carousel">
                    <h3>Joe Doe 1</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum eius beatae doloremque. Rerum vel neque laboriosam, quis hic adipisci deleniti.</p>
                </div>
            </>
            <>
                <img src={avatar3} alt="John Doe 3" />
                <div className="my-carousel">
                    <h3>Joe Doe 1</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum eius beatae doloremque. Rerum vel neque laboriosam, quis hic adipisci deleniti.</p>
                </div>
            </>
            <>
                <img src={avatar4} alt="John Doe 4" />
                <div className="my-carousel">
                    <h3>Joe Doe 1</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum eius beatae doloremque. Rerum vel neque laboriosam, quis hic adipisci deleniti.</p>
                </div>
            </>
        </Carousel>
    )
};

export default TestimonialsCarousel;
