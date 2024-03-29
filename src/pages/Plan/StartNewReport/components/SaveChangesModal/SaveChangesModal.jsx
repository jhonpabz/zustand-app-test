import { useRef, useEffect, useState } from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Stack,
  Typography,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import DialogTitle from '@components/Dialog/DialogTitle';
import { useReportUtilsStore } from '../../stores';

export const SaveChangesModal = ({ id, open, onClose }) => {
  const dialogRef = useRef(null);

  const handleSubmit = () => {
    alert('Form saved Succesfully!');
  };

  // test

  const { isFormModified } = useReportUtilsStore((state) => ({
    isFormModified: state.isFormModified,
  }));

  useEffect(() => {
    const handler = (event) => {
      event.preventDefault();
      event.returnValue = '';
    };

    // if the form is NOT unchanged, then set the onbeforeunload
    if (isFormModified) {
      window.addEventListener('beforeunload', handler);
      // clean it up, if the dirty state changes
      return () => {
        window.removeEventListener('beforeunload', handler);
      };
    }
    // since this is not dirty, don't do anything
    return () => {};
  }, [isFormModified]);

  return (
    <Dialog
      ref={dialogRef}
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={onClose}
    >
      <DialogTitle onClose={onClose}>Save changes?</DialogTitle>

      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}
      >
        <Stack gap={1}>
          <Typography>
            There are unsaved changes. If you would like to save changes, press
            the “Save” button.
          </Typography>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button variant="cancel">Cancel</Button>
        <LoadingButton onClick={handleSubmit} variant="contained">
          Save
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};
