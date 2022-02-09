import React from 'react';
import './Footer.scss';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinIcon,
    LinkedinShareButton,
} from 'react-share';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row ">
                    <div className="column col-lg-4 col-md-6 col-sm-6">
                        <p>City Moscow Main st 2020 Office #223</p>
                        <p>Tel: 0594 555 555</p>
                        <p>E-mail: terpstra.gr@gmail.com</p>
                    </div>
                    <div className="column col-lg-3 col-md-6 col-sm-6 ">
                        <div className="row">
                            <div className="col">
                                <a className='footer-nav'>Home</a>
                                <a className='footer-nav'>About Me</a>
                                <a className='footer-nav'>Services</a>
                            </div>
                            <div className="col">
                                <a className='footer-nav'>Experience</a>
                                <a className='footer-nav'>Portfolio</a>
                                <a className='footer-nav'>Contacts</a>
                            </div>
                        </div>
                    </div>
                    <div className="column col-lg-5 col-md-12 col-sm-12 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                size={36}
                                url={'https://mapsofww2.com'}
                                quote={'Full Stack Developer'}
                            >
                                <FacebookIcon className='mx-3' />
                            </FacebookShareButton>
                            <TwitterShareButton
                                size={36}
                                url={'https://mapsofww2.com'}
                                quote={'Full Stack Developer'}
                            >
                                <TwitterIcon className='mx-3' />
                            </TwitterShareButton>
                            <RedditShareButton
                                size={36}
                                url={'https://mapsofww2.com'}
                                quote={'Full Stack Developer'}
                            >
                                <RedditIcon className='mx-3' />
                            </RedditShareButton>
                            <LinkedinShareButton
                                size={36}
                                url={'https://mapsofww2.com'}
                                quote={'Full Stack Developer'}
                            >
                                <LinkedinIcon className='mx-3' />
                            </LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;New Horizon | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer