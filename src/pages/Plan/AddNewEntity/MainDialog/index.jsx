import { useRef } from 'react';

import { Dialog, Typography, Box } from '@mui/material';
import { useEntityTypeStore } from '../stores';
import EntityTypeDropdown from '../components/EntityTypeDropdown';

const MainDialog = ({ open, onClose }) => {
  const dialogRef = useRef(null);
  const { selectedType } = useEntityTypeStore((state) => ({
    selectedType: state.selectedType,
  }));

  return (
    <Dialog
      ref={dialogRef}
      fullWidth
      maxWidth={'lg'}
      open={open}
      onClose={onClose}
    >
      <Box p={5}>
        <EntityTypeDropdown />
        <Typography>Add New Entity</Typography>
      </Box>
    </Dialog>
  );
};
export default MainDialog;
