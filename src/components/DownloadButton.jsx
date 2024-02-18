import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from '@mui/material';

function DownloadButton () {
    const smallScreen = useMediaQuery('(max-width: 650px)');
    const largeScreen = useMediaQuery('(min-width: 651px)');

    return  (
        <>
            
        </>
    );
}

export default DownloadButton