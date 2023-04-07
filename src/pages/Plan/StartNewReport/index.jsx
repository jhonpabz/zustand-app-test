import { useState } from 'react';
import { Box } from '@mui/material';

import TabPanels from './TabPanels/TabPanels';
import GroupButtons from './components/Buttons/GroupButtons';
import PageHeader from '../../../components/PageHeader/PageHeader';
import HeaderButtons from './components/Buttons/HeaderButtons';

const StartNewReport = () => {
  return (
    <>
      <PageHeader
        pageName="Estate Planning and Personal Asset Protection Advice"
        headerButton={<HeaderButtons />}
      />
      <Box
        sx={{
          display: { lg: 'flex', md: 'block' },
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 2,
        }}
      >
        <GroupButtons />
      </Box>
      <TabPanels />
    </>
  );
};

export default StartNewReport;
