import {useState} from 'react'
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';

import Modal from '@mui/material/Modal';
import Button from '../components/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CloseIcon from '@mui/icons-material/Close';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const outerStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '90%',
  width: '75%',
};


const PopupImage = ({ images }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <Button onClick={handleOpen}>
            <OpenInNewIcon fontSize="medium" style={{ color: 'white' }} alt="windows_icon" />
            <p className="download-text">View Gallery</p>
        </Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div style={outerStyle}>
                {/* <Button onClick={handleClose}>
                    <CloseIcon fontSize="medium" style={{ color: 'white' }} alt="windows_icon" />
                </Button> */}
              <Carousel dynamicHeight={true} showThumbs={false} infiniteLoop={true}>
                  <div>
                      <img src={images[0]} />
                  </div>
                  <div>
                      <img src={images[1]} />
                  </div>
                  <div>
                      <img src={images[2]} />
                  </div>
                  <div>
                      <img src={images[3]} />
                  </div>
              </Carousel>
            </div>   
        </Modal>
    </div>
  );

}

export default PopupImage;

