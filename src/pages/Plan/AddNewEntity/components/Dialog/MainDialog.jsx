import { useRef } from 'react';

import { Dialog, Typography } from '@mui/material';

const MainDialog = ({ open, onClose }) => {
  const dialogRef = useRef(null);

  return (
    <Dialog
      ref={dialogRef}
      fullWidth
      maxWidth={'lg'}
      open={open}
      onClose={onClose}
    >
      <Typography>Add New Entity</Typography>
    </Dialog>
  );
};
export default MainDialog;
