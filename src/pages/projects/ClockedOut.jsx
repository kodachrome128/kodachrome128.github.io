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

import delivery1 from '../../images/delivery/delivery-1.png';
import delivery2 from '../../images/delivery/delivery-2.png';
import delivery3 from '../../images/delivery/delivery-3.png';
import delivery4 from '../../images/delivery/delivery-4.png';
import delivery5 from '../../images/delivery/delivery-5.png';
import delivery6 from '../../images/delivery/delivery-6.png';
import ProjectCard from '../../components/ProjectCard';

const Delivery = () => {
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

    const deliveryImages = [delivery2, delivery3, delivery4, delivery5, delivery6];

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
                            <h2 className="project-title">DELIVERY</h2>  
                            <h4>CATEGORY: Game Development, 3D Modelling</h4>
                            <img src={delivery1} style={projectPicStyle} />
                            <div>
                                <p>
                                    DELIVERY is my ultimate major project. It is an original 3D first person 
                                    story-based game. In an unknown time, you're starting your new job as a 
                                    package receiver at Maxxon Industry. As the days progress, the incoming
                                    packages become more and more bizarre, and you have to make the ultimate
                                    choice.                            
                                </p>
                                <br />
                                <h4>OBJECTIVE:</h4>
                                <p>
                                    My goal with this project was to completely surround myself with the full development 
                                    lifecycle of an indie game, from pre-production to modelling to scripting and then eventually
                                    publication. This was a good chance for me to demonstrate my ability to create scalable 
                                    scripts as well as experiment with features such as in-game UI. 
                                </p>
                                <br />
                                <h4>PROCESS:</h4>
                                <ul>
                                    <li>Modelling was done in Autodesk Maya</li>
                                    <li>Texturing was completed in Adobe Substance 3D Painter</li>
                                    <li>Completed models with baked textures were imported into the Unity Engine</li>
                                    <li>Sound effects were edited and mixed in Audacity</li>
                                    <li>Scripts for interactions were written in C#</li>
                                    <li>Post-processing effects and lighting were completed in Unity</li>
                                </ul>
                                <div className="project-info-links">
                                    {/* <Button onClick={downloadWindows}>
                                        <MicrosoftIcon fontSize="medium" style={{ color: 'white' }} alt="windows_icon" />
                                        <p className="download-text">Windows Download</p>
                                    </Button> */}
                                    <PopupImage images={deliveryImages} active={1} setActive={1} />
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
                                <h2 className="project-title">DELIVERY</h2>  
                                <h4>CATEGORY: Game Development, 3D Modelling</h4>   
                                <div>
                                <p>
                                    DELIVERY is my ultimate major project. It is an original 3D first person 
                                    story-based game. In an unknown time, you're starting your new job as a 
                                    package receiver at Maxxon Industry. As the days progress, the incoming
                                    packages become more and more bizarre, and you have to make the ultimate
                                    choice.              
                                </p>
                                <br />
                                <h4>OBJECTIVE:</h4>
                                <p>
                                    My goal with this project was to completely surround myself with the full development 
                                    lifecycle of an indie game, from pre-production to modelling to scripting and then eventually
                                    publication. This was a good chance for me to demonstrate my ability to create scalable 
                                    scripts as well as experiment with features such as in-game UI. 
                                </p>
                                <br />
                                <h4>PROCESS:</h4>
                                <ul>
                                    <li>Modelling was done in Autodesk Maya</li>
                                    <li>Texturing was completed in Adobe Substance 3D Painter</li>
                                    <li>Completed models with baked textures were imported into the Unity Engine</li>
                                    <li>Sound effects were edited and mixed in Audacity</li>
                                    <li>Scripts for interactions were written in C#</li>
                                    <li>Post-processing effects and lighting were completed in Unity</li>
                                </ul>
                            </div> 
                            </div>
                            <div style={imgStyle}>
                                <img src={delivery2} style={projectPicStyle} />
                                <img src={delivery4} style={projectPicStyle} />
                                <img src={delivery6} style={projectPicStyle} />
                                <div className="project-info-links">
                                    {/* <Button onClick={downloadWindows}>
                                        <MicrosoftIcon fontSize="medium" style={{ color: 'white' }} alt="windows_icon" />
                                        <p className="download-text">Windows Download</p>
                                    </Button> */}
                                    <PopupImage images={deliveryImages} active={1} setActive={1} />
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

export default Delivery;
