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

import dungeonmania1 from '../../images/Dungeonmania_1.png';
import dungeonmania2 from '../../images/Dungeonmania_2.png';
import dungeonmania3 from '../../images/Dungeonmania_3.png';
import ProjectCard from '../../components/ProjectCard';

const Dungeonmania = () => {
    const smallScreen = useMediaQuery('(max-width: 650px)');
    const largeScreen = useMediaQuery('(min-width: 651px)');

    const projectTitleStyle = {
        width: '50%'
    };

    const blockStyle = {
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'start',
        gap: '10px',
    }

    const imgStyle = {
        maxWidth: '50%',
        display: 'flex',
        flexDirection: 'column',
        height: '50%',
        gap: '10px',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const projectPicStyle =  {
        borderRadius: '10px',
        objectFit: 'cover',
        height: '100%',
        width: '100%',
    }

    const dungeonmaniaImages = [dungeonmania1, dungeonmania2, dungeonmania3]

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
                            <img src={dungeonmania1} style={projectPicStyle} />
                            <div>
                                <p>
                                    Simulated Ecology is a real-time 3D interactive environment which depicts the futuristic possibility of only being
                                    able to experience nature in a simulated digital environment.                
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
                                    <PopupImage images={dungeonmaniaImages} active={1} setActive={1} />
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
                                <h2 className="project-title">Dungeonmania</h2>  
                                <h4>CATEGORY: Game Development</h4>   
                                <div>
                                <p>
                                    Simulated Ecology is a real-time 3D interactive environment which depicts the futuristic possibility of only being
                                    able to experience nature in a simulated digital environment.                
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
                                <PopupImage images={dungeonmaniaImages} active={1} setActive={1} />
                                </div>
                            </div> 
                            </div>
                            <div style={imgStyle}>
                                <div style= {{}}>
                                    <img src={dungeonmania1} style={projectPicStyle} />
                                </div>
                                <div className="project-info-links">
                                    <div style={projectTitleStyle}>
                                        <img src={dungeonmania2} style={projectPicStyle} />
                                    </div>
                                    <div style={projectTitleStyle}>
                                        <img src={dungeonmania3} style={projectPicStyle} />
                                    </div>
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

export default Dungeonmania;
