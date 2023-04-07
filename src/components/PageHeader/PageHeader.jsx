import React from 'react';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';

const PageHeader = ({ pageName, headerButton }) => {
  return (
    <Box
      sx={{
        display: { lg: 'flex', md: 'flex', sm: 'block', sx: 'block' },
        justifyContent: 'space-between',
        pt: 4,
        pb: 3,
      }}
    >
      <Box>
        <Typography
          variant="h5"
          sx={{
            fontWeight: '700',
            fontSize: { lg: '24px', md: '20px', sm: '20px', sx: '20px' },
          }}
        >
          {pageName}
        </Typography>
      </Box>
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: { lg: 'flex-end', md: 'flex-end' },
            mt: { lg: 0, md: 0, sm: 1.5, sx: 1.5 },
          }}
        >
          <Box>{headerButton ? headerButton : undefined}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PageHeader;
