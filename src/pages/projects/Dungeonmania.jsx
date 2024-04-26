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

const DungeonMania = () => {
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
                            <h2 className="project-title">DungeonMania</h2>  
                            <h4>CATEGORY: Game Development</h4>
                            <img src={dungeonmania1} style={projectPicStyle} />
                            <div>
                                <p>
                                    DungeonMania is a 2D top-down singleplayer game where the player has to navigate through a 
                                    series of dugeons to collect various objects while battling different enemies.                
                                </p>
                                <br />
                                <h4>OBJECTIVE:</h4>
                                    <p>
                                        The main goal of this project was to understand object inheritance, one of the most important 
                                        aspects of software design. It was also another way to train myself to write more vigorous tests, 
                                        as well as understand the process of implementing different aspects of the system through a 
                                        provided specification sheet, a skill that is essential for any software engineer.
                                    </p>
                                    <br />
                                    <h4>PROCESS:</h4>
                                    <ul>
                                        <li>Refactored old code provided by previous development teams</li>
                                        <li>Studied and understood various aspects of the existing system, including object inheritance</li>
                                        <li>Implemented various entities according to a provided list of specifications</li>
                                        <li>Wrote and conducted thorough testing to ensure that my code was functional without errors</li>
                                        <li>Code was fully written in Java</li>
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
                                <h2 className="project-title">DungeonMania</h2>  
                                <h4>CATEGORY: Game Development</h4>   
                                <div>
                                    <p>
                                        DungeonMania is a 2D top-down singleplayer game where the player has to navigate through a 
                                        series of dugeons to collect various objects while battling different enemies.            
                                    </p>
                                    <br />
                                    <h4>OBJECTIVE:</h4>
                                    <p>
                                        The main goal of this project was to understand object inheritance, one of the most important 
                                        aspects of software design. It was also another way to train myself to write more vigorous tests, 
                                        as well as understand the process of implementing different aspects of the system through a 
                                        provided specification sheet, a skill that is essential for any software engineer.
                                    </p>
                                    <br />
                                    <h4>PROCESS:</h4>
                                    <ul>
                                        <li>Refactored old code provided by previous development teams</li>
                                        <li>Studied and understood various aspects of the existing system, including object inheritance</li>
                                        <li>Implemented various entities according to a provided list of specifications</li>
                                        <li>Wrote and conducted thorough testing to ensure that my code was functional without errors</li>
                                        <li>Code was fully written in Java</li>
                                    </ul>
                                </div> 
                            </div>
                            <div style={imgStyle}>
                                <div>
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
                                <div className="project-info-links">
                                    <PopupImage images={dungeonmaniaImages} active={1} setActive={1} />
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

export default DungeonMania;
