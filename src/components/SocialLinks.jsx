import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from '@mui/material';


const SocialLinks = ({ hasContent }) => {
    const smallScreen = useMediaQuery('(max-width: 650px)');
    const largeScreen = useMediaQuery('(min-width: 651px)');

    
    return  (
        <>
            {smallScreen && (
                <div className="footer-mobile">
                    <Link href="https://www.linkedin.com/in/tao-tao-608365269/">
                        <LinkedInIcon fontSize="large" style={{ color: 'white' }} alt="linkedin_icon" />
                    </Link>
                    <Link href="https://github.com/kodachrome128/">
                        <GitHubIcon fontSize="large" style={{ color: 'white' }} alt="github_icon" />
                    </Link>
                </div>
            )}
            {largeScreen && (
                <div className={hasContent ? "footer-links-adaptive" : "footer-links"}>
                    <Link href="https://www.linkedin.com/in/tao-tao-608365269/">
                        <LinkedInIcon fontSize="large" style={{ color: 'white' }} alt="linkedin_icon" />
                    </Link>
                    <Link href="https://github.com/kodachrome128/">
                        <GitHubIcon fontSize="large" style={{ color: 'white' }} alt="github_icon" />
                    </Link>
                </div>
            )}
        </>
    );
}

export default SocialLinks