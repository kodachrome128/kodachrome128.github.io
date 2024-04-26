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

import ecology1 from '../../images/Exterior_1.png';
import ecology2 from '../../images/Interior_1.png';
import ecology3 from '../../images/Interior_2.png';
import ecology4 from '../../images/Simulated_4.png';
import ecology5 from '../../images/Simulated_5.png';
import ProjectCard from '../../components/ProjectCard';

const SimulatedEcology = () => {
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

    const ecologyImages = [ecology1, ecology2, ecology3, ecology4, ecology5];

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
                            <h2 className="project-title">Simulated Ecology</h2>  
                            <h4>CATEGORY: Game Development, 3D Modelling</h4>
                            <img src={ecology1} style={projectPicStyle} />
                            <div>
                                <p>
                                    Simulated Ecology is a real-time 3D interactive environment which depicts the futuristic possibility of only being
                                    able to experience nature in a simulated digital environment.                
                                </p>
                                <br />
                                <h4>OBJECTIVE:</h4>
                                <p>
                                    The primary objective of this project is for me to familiarize myself with the Unity game engine, 
                                    a popular game engine used throughout the industry. 
                                    It was a change for me to develop scripts under my own specifications in accordance to what I need, 
                                    and a good chance for me to demonstrate my scripting skills.
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
                                    <Button onClick={downloadWindows}>
                                        <MicrosoftIcon fontSize="medium" style={{ color: 'white' }} alt="windows_icon" />
                                        <p className="download-text">Windows Download</p>
                                    </Button>
                                    <PopupImage images={ecologyImages} active={1} setActive={1} />
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
                                <h2 className="project-title">Simulated Ecology</h2>  
                                <h4>CATEGORY: Game Development, 3D Modelling</h4>   
                                <div>
                                <p>
                                    Simulated Ecology is a real-time 3D interactive environment which depicts the futuristic possibility of only being
                                    able to experience nature in a simulated digital environment.                
                                </p>
                                <br />
                                <h4>OBJECTIVE:</h4>
                                <p>
                                    The primary objective of this project is for me to familiarize myself with the Unity game engine, 
                                    a popular game engine used throughout the industry. 
                                    It was a change for me to develop scripts under my own specifications in accordance to what I need, 
                                    and a good chance for me to demonstrate my scripting skills.
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
                                <img src={ecology1} style={projectPicStyle} />
                                <img src={ecology2} style={projectPicStyle} />
                                <img src={ecology3} style={projectPicStyle} />
                                <div className="project-info-links">
                                    <Button onClick={downloadWindows}>
                                        <MicrosoftIcon fontSize="medium" style={{ color: 'white' }} alt="windows_icon" />
                                        <p className="download-text">Windows Download</p>
                                    </Button>
                                    <PopupImage images={ecologyImages} active={1} setActive={1} />
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

export default SimulatedEcology;
