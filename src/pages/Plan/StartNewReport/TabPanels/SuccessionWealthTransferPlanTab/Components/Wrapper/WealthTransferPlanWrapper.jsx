import Box from '@mui/material/Box';

const WealthTransferPlanWrapper = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          pt: 2,
          pb: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default WealthTransferPlanWrapper;
