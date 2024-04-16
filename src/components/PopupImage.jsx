import { useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Modal from '@mui/material/Modal';
import Button from '../components/Button';
import ImageIcon from '@mui/icons-material/Image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const innerStyle = {
  height: '100%',
};

const imgDivStyle = {
  width: '100%',
  height: '100%',
};

const imgStyle = {
  // objectFit: 'cover',
  // width: '100%',
  // height: '100%',
  height: '100%',
  width: '100%',
  objectFit: 'contain',
  objectPosition: 'center',
};

const landscapeStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '80%',
  width: '80%',
};

const portraitStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '30%',
  width: '30%',
};

const squareStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '80%',
  width: '60%',
};

const PopupImage = ({ images }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [style, setStyle] = useState(null);

  const smallScreen = useMediaQuery('(max-width: 650px)');

  useEffect(() => {
    if (images.length > 0) {
      const firstImage = new Image();
      firstImage.src = images[0];
      firstImage.onload = () => {
        const ratio = firstImage.naturalWidth / firstImage.naturalHeight;
        if (ratio > 1) {
          setStyle(landscapeStyle); // Landscape image
        } else if (ratio < 1) {
          setStyle(portraitStyle); // Portrait image
        } else {
          setStyle(squareStyle); // Square image
        }
      };
    }
  }, [images]);

  return (
    <>
      <div>
        <Button onClick={handleOpen}>
          <ImageIcon fontSize="medium" style={{ color: 'white' }} alt="windows_icon" />
          <p className="download-text">View Gallery</p>
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div style={smallScreen ? { ...style, width: '90%', height: '25%' } : style}>
            {/* <Button onClick={handleClose}>
              <CloseIcon fontSize="medium" style={{ color: 'white' }} alt="windows_icon" />
            </Button> */}
            <div style={innerStyle}>
              <Carousel dynamicHeight={true} showThumbs={false} infiniteLoop={true}>
                {images.map((image, index) => (
                  <div style={imgDivStyle} key={index}>
                    <img src={image} alt={`Slide ${index}`} style={imgStyle} />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default PopupImage;