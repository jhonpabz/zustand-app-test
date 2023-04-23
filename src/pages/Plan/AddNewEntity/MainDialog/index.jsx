import { useRef } from 'react';

import { Dialog, Typography, Box } from '@mui/material';
import { useEntityTypeStore } from '../stores';
import EntityTypeDropdown from '../components/EntityTypeDropdown';
import Smsf from './EntityForms/Smsf';
import { selectedEntityLookup } from '../lib';

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
        {selectedEntityLookup(selectedType)}
      </Box>
    </Dialog>
  );
};
export default MainDialog;
