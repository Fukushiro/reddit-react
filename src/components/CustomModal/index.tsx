import { Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

// import { Container } from './styles';
interface ICustomModal {
  modalOpen: boolean;
  setModalOpen: Function;
  title?: string;
  text: string;
}
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const CustomModal: React.FC<ICustomModal> = ({
  modalOpen,
  setModalOpen,
  text,
  title,
}) => {
  return (
    <Modal
      open={modalOpen}
      onClose={() => {
        setModalOpen(false);
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {!!title ? title : 'Mensagem'}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {text}
        </Typography>
      </Box>
    </Modal>
  );
};

export default CustomModal;
