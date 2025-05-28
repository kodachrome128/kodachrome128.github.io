import { useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Navbar from '../../components/Navbar';
import SocialLinks from '../../components/SocialLinks';
import AnimatedDiv from '../../components/AnimatedDiv';
import PopupImage from '../../components/PopupImage';

import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import clockedout1 from '../../images/clocked_out/clocked_out1.png';
import clockedout2 from '../../images/clocked_out/clocked_out2.png';
import clockedout3 from '../../images/clocked_out/clocked_out3.png';
import clockedout4 from '../../images/clocked_out/clocked_out4.png';
import clockedout5 from '../../images/clocked_out/clocked_out5.png';
import clockedout6 from '../../images/clocked_out/clocked_out6.png';
import clockedout7 from '../../images/clocked_out/clocked_out7.png';
import clockedout8 from '../../images/clocked_out/clocked_out8.png';
import ProjectCard from '../../components/ProjectCard';

const ClockedOut = () => {
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

    const clockedoutImages = [clockedout1, clockedout2, clockedout3, clockedout4, clockedout5, clockedout6, clockedout7, clockedout8];

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
                            <h2 className="project-title">Clocked Out</h2>  
                            <h4>CATEGORY: Game Development, 3D Modelling</h4>
                            <img src={clockedout1} style={projectPicStyle} />
                            <div>
                                <p>
                                    Clocked Out is a 3D interactive exploration/shooter game designed and built
                                    using Unreal Engine 5. In an unknown time, you're a worker at Maxxon Industry 
                                    who was asked to stay back to work overtime. Not feeling like it,  you decide 
                                    to escape the company building, with a variety of tools at your disposal.                                  
                                </p>
                                <br />
                                <h4>OBJECTIVE:</h4>
                                <p>
                                    My goal with this project is to expand my skillset by experimenting with various popular
                                    game engines, namely Unreal Engine 5, with its built-in ray tracing and path tracing. 
                                    Since UE5 is quickly becoming an industry standard, I felt that it is important for me
                                    to familiarise myself with the engine to stay relevant and on top of the latest trends. 
                                    Not only that, but this development also gave me a chance to also experiment with UE5.4's
                                    visual scripting system for the entire development. 
                                </p>
                                <br />
                                <p>
                                    Using blueprints, I designed the 8 way locomotion system including crouching, sprinting and
                                    peaking, item interactions, inventory management system, as well as interactive lighting and
                                    game mechanics. 
                                </p>
                                <br />
                                <h4>PROCESS:</h4>
                                <ul>
                                    <li>Modelling was done in Autodesk Maya</li>
                                    <li>Texturing was completed in Adobe Substance 3D Painter</li>
                                    <li>Completed models with baked textures were imported into Unreal Engine</li>
                                    <li>Scripts for interactions were designed using blueprints</li>
                                    <li>Post-processing effects and lighting were handled by ray tracing in UE5</li>
                                </ul>
                                <div className="project-info-links">
                                    <PopupImage images={clockedoutImages} active={1} setActive={1} />
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
                                <h2 className="project-title">Clocked Out</h2>  
                                <h4>CATEGORY: Game Development, 3D Modelling</h4>   
                                <div>
                                <p>
                                    Clocked Out is a 3D interactive exploration/shooter game designed and built
                                    using Unreal Engine 5. In an unknown time, you're a worker at Maxxon Industry 
                                    who was asked to stay back to work overtime. Not feeling like it,  you decide 
                                    to escape the company building, with a variety of tools at your disposal.           
                                </p>
                                <br />
                                <h4>OBJECTIVE:</h4>
                                <p>
                                    My goal with this project is to expand my skillset by experimenting with various popular
                                    game engines, namely Unreal Engine 5, with its built-in ray tracing and path tracing. 
                                    Since UE5 is quickly becoming an industry standard, I felt that it is important for me
                                    to familiarise myself with the engine to stay relevant and on top of the latest trends. 
                                    Not only that, but this development also gave me a chance to also experiment with UE5.4's
                                    visual scripting system for the entire development. 
                                </p>
                                <br />
                                <p>
                                    Using blueprints, I designed the 8 way locomotion system including crouching, sprinting and
                                    peaking, item interactions, inventory management system, as well as interactive lighting and
                                    game mechanics. 
                                </p>
                                <br />
                                <h4>PROCESS:</h4>
                                <ul>
                                    <li>Modelling was done in Autodesk Maya</li>
                                    <li>Texturing was completed in Adobe Substance 3D Painter</li>
                                    <li>Completed models with baked textures were imported into Unreal Engine</li>
                                    <li>Scripts for interactions were designed using blueprints</li>
                                    <li>Post-processing effects and lighting were handled by ray tracing in UE5</li>
                                </ul>
                            </div> 
                            </div>
                            <div style={imgStyle}>
                                <img src={clockedout1} style={projectPicStyle} />
                                <img src={clockedout3} style={projectPicStyle} />
                                <img src={clockedout5} style={projectPicStyle} />
                                <div className="project-info-links">
                                    <PopupImage images={clockedoutImages} active={1} setActive={1} />
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

export default ClockedOut;
