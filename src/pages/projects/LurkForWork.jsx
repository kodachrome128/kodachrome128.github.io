import { useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Navbar from '../../components/Navbar';
import SocialLinks from '../../components/SocialLinks';
import AnimatedDiv from '../../components/AnimatedDiv';
import PopupImage from '../../components/PopupImage';
import MicrosoftIcon from '@mui/icons-material/Microsoft';

import Button from '../../components/Button';

import my_pic from '../../images/literally_me.jpg';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import lurkforwork from '../../images/lurkforwork.png';
import ProjectCard from '../../components/ProjectCard';

const LurkForWork = () => {
    const smallScreen = useMediaQuery('(max-width: 650px)');
    const largeScreen = useMediaQuery('(min-width: 651px)');

    const projectTitleStyle = {
        width: '55%'
    };

    const blockStyle = {
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'start',
        gap: '25px',
    }

    const imgStyle = {
        maxWidth: '45%',
        display: 'flex',
        flexDirection: 'column',
        height: '50%',
        gap: '10px',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50px',
    }

    const projectPicStyle =  {
        borderRadius: '10px',
        objectFit: 'cover',
        height: '100%',
        width: '100%',
    }


    return (
        <>
        <header style={{ margin: '0', width: '100%', top: '0', left: '0', position: 'relative' }}>
            <Navbar />
        </header>
        {smallScreen && (
            <>
                <div className="project-mobile">
                    <ProjectCard>
                        <div className="blur-container"></div>
                        <div className="padding-mobile">
                            <h2 className="project-title">LurkForWork</h2>  
                            <h4>CATEGORY: Game Development</h4>
                            <img src={lurkforwork} style={projectPicStyle} />
                            <div>
                                <p>
                                    LurkForWork was my very first attempt at creating a fully functioning frontend using
                                    Javascript, HTML and CSS. It is designed to be a replica of the LinkedIn
                                    website, fully written in Javascript with DOM manipulation.             
                                </p>
                                <br />
                                <h4>OBJECTIVE:</h4>
                                <p>
                                    As this was my first time creating a website with Javascript, my main goal was to understand
                                    and learn the details of DOM manipulation, as well as intelligent UI and UX design. It also
                                    allowed me to understand the intricacies of web-dev, as previously I was on the other side
                                    designing the backend. 
                                </p>
                                <br />
                                <h4>PROCESS:</h4>
                                <ul>
                                    <li>Implemented various features such as a live social media feed and post interactions</li>
                                    <li>Designed the UI and UX to be as close to LinkedIn as possible</li>
                                    <li>Site was design with HTML and CSS, and DOM manipulation was written in Javascript</li>
                                </ul>
                            </div> 
                        </div>
                    </ProjectCard>
                </div>
            </>
        )}
        {largeScreen && (
            <>
                <div className="project-desktop">
                    <AnimatedDiv>
                        <div className="blur-container"></div>
                        <div style={blockStyle}>
                            <div style={projectTitleStyle}>
                                <h2 className="project-title">LurkForWork</h2>  
                                <h4>CATEGORY: Frontend Development</h4>   
                                <div>
                                    <p>
                                        LurkForWork was my very first attempt at creating a fully functioning frontend using
                                        Javascript, HTML and CSS. It is designed to be a replica of the LinkedIn
                                        website, fully written in Javascript with DOM manipulation.
                                    </p>
                                    <br />
                                    <h4>OBJECTIVE:</h4>
                                    <p>
                                        As this was my first time creating a website with Javascript, my main goal was to understand
                                        and learn the details of DOM manipulation, as well as intelligent UI and UX design. It also
                                        allowed me to understand the intricacies of web-dev, as previously I was on the other side
                                        designing the backend. 
                                    </p>
                                    <br />
                                    <h4>PROCESS:</h4>
                                    <ul>
                                        <li>Implemented various features such as a live social media feed and post interactions</li>
                                        <li>Designed the UI and UX to be as close to LinkedIn as possible</li>
                                        <li>Site was design with HTML and CSS, and DOM manipulation was written in Javascript</li>
                                    </ul>
                                </div> 
                            </div>
                            <div style={imgStyle}>
                                <div>
                                    <img src={lurkforwork} style={projectPicStyle} />
                                </div>
                            </div>
                        </div>
                    </AnimatedDiv>
                </div>
            {/* <div>
                <SocialLinks hasContent={true}/>
            </div> */}
            </>
        )}
        </>
    );
};

export default LurkForWork;
