import { Box, Typography } from '@mui/material';

import RemoveButton from '@components/Buttons/RemoveButton';

const WealthOwnerHeader = ({ onClick, withRemove = false }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '5px',
          height: '40px',
          background: 'grey',
          width: '100%',
        }}
      >
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: '500',
            color: 'white',
          }}
        >
          Wealth Owner
        </Typography>
      </Box>
      {withRemove && (
        <Box sx={{ ml: 2 }}>
          <RemoveButton onClick={onClick} />
        </Box>
      )}
    </Box>
  );
};

export default WealthOwnerHeader;
