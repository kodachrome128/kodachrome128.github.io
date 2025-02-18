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

import esgmark1 from '../../images/esgmark/ESGMark-1.png';
import esgmark2 from '../../images/esgmark/ESGMark-2.png';
import esgmark3 from '../../images/esgmark/ESGMark-3.png';
import esgmark4 from '../../images/esgmark/ESGMark-4.png';
import esgmark5 from '../../images/esgmark/ESGMark-5.png';
import esgmark6 from '../../images/esgmark/ESGMark-6.png';
import esgmark7 from '../../images/esgmark/ESGMark-7.png';
import esgmark8 from '../../images/esgmark/ESGMark-8.png';
import esgmark9 from '../../images/esgmark/ESGMark-9.png';
import ProjectCard from '../../components/ProjectCard';

const ESGMark = () => {
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

    const esgmarkImages = [esgmark1, esgmark2, esgmark3, esgmark4, esgmark5, esgmark6, esgmark7, esgmark8, esgmark9];

    const downloadWindows = () => {
        window.location.href = 'https://unsw-my.sharepoint.com/:u:/g/personal/z5361154_ad_unsw_edu_au/EY3by-TZPt5CmBqE0EtEO9sBMhg_EcOPNr44PZyxCxGu4g?e=9Cqhgb&download=1';
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
                            <h2 className="project-title">ESGMark</h2>  
                            <h4>CATEGORY: Frontend Design</h4>
                            <img src={esgmark1} style={projectPicStyle} />
                            <div>
                                <p>
                                    ESGMark is an interactive online web-app designed for investors to search, track and compare the ESG data of
                                    various companies, with advanced features such as saving custom ESG frameworks, customisable and downloadable
                                    data tables, and advanced search and comparison tools.                 
                                </p>
                                <br />
                                <h4>OBJECTIVE:</h4>
                                <p>
                                    The goal of this project was to familiarise myself with the full lifecycle of a software development project: 
                                    the intricacies that goes into developing a produt from simple brainstorming to testing a beta version. It was also
                                    the first time I had ever designed a user interface from the ground up, from choosing the colour palette to the typography
                                    and iconography of the site. This project was developed in a team of 6, with two people working on the backend, three
                                    people working on the frontend, and I worked both on the frontend and the UI/UX. This project was completed over a 
                                    course of 10 weeks. 
                                </p>
                                <br />
                                <h4>PROCESS:</h4>
                                <ul>
                                    <li>UI was designed from scratch in Figma</li>
                                    <li>Backend was developed with Python using Django</li>
                                    <li>Frontend was built using React and a mix between Material UI and Joy UI</li>
                                    <li>Development was spearheaded by me with regular meetings and debugging sessions every week.</li>
                                </ul>
                                <div className="project-info-links">
                                    <PopupImage images={esgmarkImages} active={1} setActive={1} />
                                </div>
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
                                <h2 className="project-title">ESGMark</h2>  
                                <h4>CATEGORY: Frontend Development, UI/UX</h4>   
                                <div>
                                <p>
                                    ESGMark is an interactive online web-app designed for investors to search, track and compare the ESG data of
                                    various companies, with advanced features such as saving custom ESG frameworks, customisable and downloadable
                                    data tables, and advanced search and comparison tools.  
                                </p>
                                <br />
                                <h4>OBJECTIVE:</h4>
                                <p>
                                    The goal of this project was to familiarise myself with the full lifecycle of a software development project: 
                                    the intricacies that goes into developing a produt from simple brainstorming to testing a beta version. It was also
                                    the first time I had ever designed a user interface from the ground up, from choosing the colour palette to the typography
                                    and iconography of the site. This project was developed in a team of 6, with two people working on the backend, three
                                    people working on the frontend, and I worked both on the frontend and the UI/UX. This project was completed over a 
                                    course of 10 weeks. 
                                </p>
                                <br />
                                <h4>PROCESS:</h4>
                                <ul>
                                    <li>UI was designed from scratch in Figma</li>
                                    <li>Backend was developed with Python using Django</li>
                                    <li>Frontend was built using React and a mix between Material UI and Joy UI</li>
                                    <li>Development was spearheaded by me with regular meetings and debugging sessions every week.</li>
                                </ul>
                            </div> 
                            </div>
                            <div style={imgStyle}>
                                <img src={esgmark1} style={projectPicStyle} />
                                <img src={esgmark6} style={projectPicStyle} />
                                <div className="project-info-links">
                                    <PopupImage images={esgmarkImages} active={1} setActive={1} />
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

export default ESGMark;
