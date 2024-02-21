import React from "react";
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Button from '../components/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80vw',
  height: '80vh',
  bgcolor: 'grey',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: '20px',
  p: 4,
};

const PopupImage = ({images}) => {
  const [open, setOpen] = React.useState(false);
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
            <Box sx={style}>
                {images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index + 1}`} />
                ))}
            </Box>
        </Modal>
    </div>
  );
}

export default PopupImage;

