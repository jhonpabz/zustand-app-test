import React from 'react';
import Typography from '@mui/material/Typography';

const DropdownLabel = ({ children }) => {
  return (
    <>
      <Typography
        sx={{
          fontSize: {
            lg: '16px',
            md: '16px',
            sm: '13px',
            sx: '13px',
          },
          fontWeight: { lg: '500', md: '400', sx: '400' },
        }}
      >
        {children}
      </Typography>
    </>
  );
};

export default DropdownLabel;
