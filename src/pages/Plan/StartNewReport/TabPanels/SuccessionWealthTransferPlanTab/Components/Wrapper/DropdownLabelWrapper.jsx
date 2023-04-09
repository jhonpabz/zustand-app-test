import { Box } from '@mui/material';

const DropdownLabelWrapper = ({ children, sx }) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          ...sx,
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default DropdownLabelWrapper;
