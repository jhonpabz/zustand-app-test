import { useRef } from 'react';

import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import WealthTransferPlan from './WealthTransferPlan';
import ModalContainer from './ModalContainer/ModalContainer';

const PreviewPlanModal = ({ open, onClose }) => {
  const dialogRef = useRef(null);

  return (
    <Dialog
      ref={dialogRef}
      fullWidth
      maxWidth="lg"
      open={open}
      onClose={onClose}
    >
      {/* Title */}

      {/* Content */}
      <DialogContent>
        <ModalContainer>
          <WealthTransferPlan />
        </ModalContainer>
      </DialogContent>

      {/* Actions */}
      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PreviewPlanModal;
