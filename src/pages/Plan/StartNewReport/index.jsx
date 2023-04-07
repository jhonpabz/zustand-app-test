import { useState } from 'react';
import { Box } from '@mui/material';

import TabPanels from './TabPanels/TabPanels';

const StartNewReport = () => {
  const [tabPanel, setTabPanel] = useState(0);

  return (
    <>
      <Box
        sx={{
          display: { lg: 'flex', md: 'block' },
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 2,
        }}
      ></Box>
      <TabPanels tabValue={tabPanel} />
    </>
  );
};

export default StartNewReport;
