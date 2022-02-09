import React from 'react';
import netflix from '../assets/netflix.png';
import cityGuide from '../assets/city-guide-app.png';
import portfolio from '../assets/portfolio.png';
import taskManager from '../assets/task-manager.png';
import './Portfolio.scss';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

const Portfolio = () => {

    // Netflix Clone Project
    const openPopupBoxNetflix = () => {
        const content = (
            <>
                <img className="portfolio-image-popup-box" src={netflix} alt="Netflix Clone Project" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, est.</p>
                <b>Github: </b><a onClick={() => window.open("https://github.com/GRTerpstra/ChessTestProject")} className="hyper-link">https://github.com/GRTerpstra/ChessTestProject</a>
            </>
        )
        PopupboxManager.open({

            content,
            config: {
                titleBar: {
                    enable: true,
                    text: "Netflix Clone Project"
                },
                fadeIn: true,
                fadeInSpeed: 125,
                fadeOut: false
            }
        })
    }

    // City Guide App
    const openPopupBoxCityGuide = () => {
        const content = (
            <>
                <img className="portfolio-image-popup-box" src={cityGuide} alt="City Guide Project" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, est.</p>
                <b>Demo: </b><a onClick={() => window.open("https://mapsofww2.com")} className="hyper-link">www.mapsofww      2.com</a><br />
                <b>Github: </b><a onClick={() => window.open("https://github.com/GRTerpstra/ChessTestProject")} className="hyper-link">https://github.com/GRTerpstra/ChessTestProject</a>
            </>
        )
        PopupboxManager.open({

            content,
            config: {
                titleBar: {
                    enable: true,
                    text: "City Guide Project"
                },
                fadeIn: true,
                fadeInSpeed: 125,
                fadeOut: false
            }
        })
    }

    // Portfolio React Project
    const openPopupBoxPortfolio = () => {
        const content = (
            <>
                <img className="portfolio-image-popup-box" src={portfolio} alt="Portfolio React Project" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, est.</p>
                <b>Github: </b><a onClick={() => window.open("https://github.com/GRTerpstra/ChessTestProject")} className="hyper-link">https://github.com/GRTerpstra/ChessTestProject</a>
            </>
        )
        PopupboxManager.open({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: "Portfolio"
                },
                fadeIn: true,
                fadeInSpeed: 125,
                fadeOut: false
            }
        })
    }

    // Task Manager Project
    const openPopupBoxTaskManager = () => {
        const content = (
            <>
                <img className="portfolio-image-popup-box" src={taskManager} alt="Task Manager Project" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, est.</p>
                <b>Github: </b><a onClick={() => window.open("https://github.com/GRTerpstra/ChessTestProject")} className="hyper-link">https://github.com/GRTerpstra/ChessTestProject</a>
            </>
        )
        PopupboxManager.open({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: "Task Manager Project"
                },
                fadeIn: true,
                fadeInSpeed: 125,
                fadeOut: false
            }
        })
    }

    return (
        <div className="portfolio-wrapper" id="portfolio">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="box-pair-wrapper row justify-content-center">
                        <div className="portfolio-image-box" onClick={openPopupBoxNetflix}>
                            <img src={netflix} alt="Netflix Clone Project" className="portfolio-image" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                        <div className="portfolio-image-box" onClick={openPopupBoxCityGuide}>
                            <img src={cityGuide} alt="City Guide Project" className="portfolio-image" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                    </div>

                    <div className="box-pair-wrapper row justify-content-center">
                        <div className="portfolio-image-box" onClick={openPopupBoxPortfolio}>
                            <img src={portfolio} alt="Portfolio React Project" className="portfolio-image" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                        <div className="portfolio-image-box" onClick={openPopupBoxTaskManager}>
                            <img src={taskManager} alt="Taskmanager Project" className="portfolio-image" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                    </div>
                </div>
                <PopupboxContainer />
            </div>
        </div>
    )
};

export default Portfolio;
