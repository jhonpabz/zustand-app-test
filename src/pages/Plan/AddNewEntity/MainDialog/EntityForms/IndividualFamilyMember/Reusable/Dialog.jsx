/* eslint-disable react/display-name */
import { forwardRef } from 'react';

import { Dialog as MuiDialog } from '@mui/material';

export const Dialog = forwardRef(
  ({ children, open = false, onClose = () => {}, PaperProps = {} }, ref) => {
    return (
      <MuiDialog
        ref={ref}
        open={open}
        onClose={onClose}
        fullWidth
        maxWidth="lg"
        PaperProps={{
          sx: {
            paddingTop: 2,
            height: '80%',
            maxHeight: 880,
          },
          ...PaperProps,
        }}
      >
        {children}
      </MuiDialog>
    );
  }
);
