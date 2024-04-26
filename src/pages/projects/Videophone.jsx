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

import Videophone1 from '../../images/Videophone_1.jpg';
import Videophone2 from '../../images/Videophone_2.jpg';
import Videophone3 from '../../images/Videophone_3.jpg';
import Videophone4 from '../../images/Videophone_4.jpg';
import Videophone5 from '../../images/Videophone_5.png';
import ProjectCard from '../../components/ProjectCard';

const Videophone = () => {
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

    const videophoneImages = [Videophone1, Videophone2, Videophone3, Videophone4, Videophone5];

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
                            <h2 className="project-title">Brutalist Videophone</h2>  
                            <h4>CATEGORY: Game Development, 3D Modelling</h4>
                            <img src={Videophone2} style={projectPicStyle} />
                            <div>
                                <p>
                                    This is the envisionment of what a possible late 20th century videophone could have looked like
                                    if it was designed based on the brutalism architectural movement.      
                                </p>
                                <br />
                                <h4>OBJECTIVE:</h4>
                                <p>
                                    The main objective of this project was to create something that was unconventional and possibly impractical. 
                                    A relatively obscure device of the past, a
                                    videophone combines audio and video into a
                                    convenient telecommunications device. Since this was my first time designing and modelling an object,
                                    I wanted to familiarize myself with the 3D artist's workflow, from sketching, modelling, texturing, and rendering.
                                </p>
                                <br />
                                <h4>PROCESS:</h4>
                                <ul>
                                    <li>Originally sketched to scale on paper</li>
                                    <li>Modelling was completed in Autodesk Maya</li>
                                    <li>Texturing was done from conventional texture maps</li>
                                    <li>Environment was populated with simple self-made assets</li>
                                    <li>Renders were done with Arnold renderer</li>
                                    <li>Images were processed in Adobe Lightroom</li>
                                </ul>
                                <div className="project-info-links">
                                    <PopupImage images={videophoneImages} active={1} setActive={1} />
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
                                <h2 className="project-title">Brutalist Videophone</h2>  
                                <h4>CATEGORY: 3D Modelling</h4>   
                                <div>
                                    <p>
                                        This is the envisionment of what a possible late 20th century videophone could have looked like
                                        if it was designed based on the brutalism architectural movement.      
                                    </p>
                                    <br />
                                    <h4>OBJECTIVE:</h4>
                                    <p>
                                        The main objective of this project was to create something that was unconventional and possibly impractical. 
                                        A relatively obscure device of the past, a
                                        videophone combines audio and video into a
                                        convenient telecommunications device. Since this was my first time designing and modelling an object,
                                        I wanted to familiarize myself with the 3D artist's workflow, from sketching, modelling, texturing, and rendering.
                                    </p>
                                    <br />
                                    <h4>PROCESS:</h4>
                                    <ul>
                                        <li>Originally sketched to scale on paper</li>
                                        <li>Modelling was completed in Autodesk Maya</li>
                                        <li>Texturing was done from conventional texture maps</li>
                                        <li>Environment was populated with simple self-made assets</li>
                                        <li>Renders were done with Arnold renderer</li>
                                        <li>Images were processed in Adobe Lightroom</li>
                                    </ul>
                                </div> 
                            </div>
                            <div style={imgStyle}>
                                <img src={Videophone2} style={projectPicStyle} />
                                <img src={Videophone3} style={projectPicStyle} />
                                <div className="project-info-links">
                                    <div style={projectTitleStyle}>
                                        <img src={Videophone1} style={projectPicStyle} />
                                    </div>
                                    <div style={projectTitleStyle}>
                                        <img src={Videophone4} style={projectPicStyle} />
                                    </div>
                                </div>
                                <div className="project-info-links">
                                    <PopupImage images={videophoneImages} active={1} setActive={1} />
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

export default Videophone;
