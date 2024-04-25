import MicrosoftIcon from '@mui/icons-material/Microsoft';
import AppleIcon from '@mui/icons-material/Apple';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PopupImage from './PopupImage';
import Button from './Button';
import CategoryFilter from './CategoryFilter';
import {
    Link, 
  } from 'react-router-dom';

import Videophone1 from '../images/Videophone_1.jpg';
import Videophone2 from '../images/Videophone_2.jpg';
import Videophone3 from '../images/Videophone_3.jpg';
import Videophone4 from '../images/Videophone_4.jpg';

import ruralNSW1 from '../images/photo_projects/rural_nsw/img_1.jpg';
import ruralNSW2 from '../images/photo_projects/rural_nsw/img_2.jpg';
import ruralNSW3 from '../images/photo_projects/rural_nsw/img_3.jpg';
import ruralNSW4 from '../images/photo_projects/rural_nsw/img_4.jpg';
import ruralNSW5 from '../images/photo_projects/rural_nsw/img_5.jpg';
import ruralNSW6 from '../images/photo_projects/rural_nsw/img_6.jpg';
import ruralNSW7 from '../images/photo_projects/rural_nsw/img_7.jpg';

import ecology1 from '../images/Exterior_1.png';
import ecology2 from '../images/Interior_1.png';
import ecology3 from '../images/Interior_2.png';

import dungeonmania1 from '../images/Dungeonmania_1.png';
import dungeonmania2 from '../images/Dungeonmania_2.png';
import dungeonmania3 from '../images/Dungeonmania_3.png';

const videophoneImages = [Videophone1, Videophone2, Videophone3, Videophone4];
const ruralNSWImages = [ruralNSW1, ruralNSW2, ruralNSW3, ruralNSW4, ruralNSW5, ruralNSW6, ruralNSW7];
const ecologyImages = [ecology1, ecology2, ecology3];
const dungeonmaniaImages = [dungeonmania1, dungeonmania2, dungeonmania3]

const downloadWindows = () => {
  window.location.href = 'https://unsw-my.sharepoint.com/:u:/g/personal/z5361154_ad_unsw_edu_au/EY3by-TZPt5CmBqE0EtEO9sBMhg_EcOPNr44PZyxCxGu4g?e=9Cqhgb&download=1';
}

export const items = [
    {
        name: 'Simulated Ecology',
        category: 'GameDev',
        bg_img: 'simulated-ecology',
        description: (
            <p style={{ whiteSpace: 'pre-line' }}>
                Simulated Ecology was my major project for my 3D visualisation course.
                It is an original 3D realtime interactive environment which depicts
                the futuristic possibility of only being able to recreate nature in a
                digital environment. 
                <br />
                <br />
                This project was made in Unity over the course of
                6 weeks.
            </p>
        ),
        downloadFunction: downloadWindows,
        images: ecologyImages,
        link: (
            <Link to="/projects/simulated-ecology" class="link-text">
                <Button>
                    <OpenInNewIcon fontSize="medium" style={{ color: 'white' }} alt="windows_icon" />
                    <p className="download-text">Learn More</p>
                </Button>
            </Link>
        )
    },
    {
        name: 'Dungeonmania',
        category: 'GameDev',
        bg_img: 'dungeonmania',
        description: (
            <p style={{ whiteSpace: 'pre-line'}}>
                Dungeonmania is a 2D top-down game which I worked on in collaboration with my project partner. We developed the back-end of the game in accordance to an extensive specification sheet, written exclusively in Java.
                <br />
                <br />
                This project was written in Java over the course of 4 weeks. 
            </p>
        ),
        images: dungeonmaniaImages,
        link: (
            <Link to="/projects/dungeonmania" class="link-text">
                <Button>
                    <OpenInNewIcon fontSize="medium" style={{ color: 'white' }} alt="windows_icon" />
                    <p className="download-text">Learn More</p>
                </Button>
            </Link>
        )
    },
    {
        name: 'LurkForWork',
        category: 'Front-End',
        bg_img: 'lurkforwork',
        description: (
            <p style={{ whiteSpace: 'pre-line' }}>
            LurkForWork was one of the assignments for COMP6080, the front-end
            design course at UNSW. It is designed to be a replica of the LinkedIn
            website, fully written in Javascript with DOM manipulation.
            </p>
        ),
        images: [],
        link: (
            <Link to="/projects/simulated-ecology" class="link-text">
                <Button>
                    <OpenInNewIcon fontSize="medium" style={{ color: 'white' }} alt="windows_icon" />
                    <p className="download-text">Learn More</p>
                </Button>
            </Link>
        )
    },
    {
        name: 'Brutalist Videophone',
        category: '3D Modelling',
        bg_img: 'videophone',
        description: (
        <p style={{ whiteSpace: 'pre-line' }}>
          This was my first ever 3D modelling project. This is the envisionment
          of what a possible late 20th century videophone could have looked like
          if it was designed based on the brutalism architectural movement
          present in that era.
          <br />
          <br />
          This was designed over the course of 8 weeks in Maya and rendered in
          Arnold.
        </p>
        ),
        images: videophoneImages,
        link: (
            <Link to="/projects/simulated-ecology" class="link-text">
                <Button>
                    <OpenInNewIcon fontSize="medium" style={{ color: 'white' }} alt="windows_icon" />
                    <p className="download-text">Learn More</p>
                </Button>
            </Link>
        )
    },
    {
        name: 'Rural NSW',
        category: 'Photography',
        bg_img: 'rural-nsw',
        description: (
        <p style={{ whiteSpace: 'pre-line' }}>
          Rural NSW is a collection of photos captured around, well, rural NSW.
          I was especially captivated by the contrast between the countryside
          and the cities, and just how quiet everything really could be.
          <br />
          <br />
          Shot on the Bronica S2 with the Nikkor-P 75mm f2.8, and Portra 400.
        </p>
        ),
        images: ruralNSWImages,
        link: (
            <Link to="/projects/simulated-ecology" class="link-text">
                <Button>
                    <OpenInNewIcon fontSize="medium" style={{ color: 'white' }} alt="windows_icon" />
                    <p className="download-text">Learn More</p>
                </Button>
            </Link>
        )
    },
  ];