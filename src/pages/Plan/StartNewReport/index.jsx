import { useState } from 'react';
import { Box } from '@mui/material';

import TabPanels from './TabPanels/TabPanels';
import GroupButtons from './components/Buttons/GroupButtons';
import PageHeader from '../../../components/PageHeader/PageHeader';
import HeaderButtons from './components/Buttons/HeaderButtons';

const StartNewReport = () => {
  const [currentForm, setCurrentForm] = useState('client-info-form');

  const handleSaveNextMain = () => {
    console.log('Next');
  };

  const handleBack = () => {
    console.log('Back');
  };

  return (
    <>
      <PageHeader
        pageName="Estate Planning and Personal Asset Protection Advice"
        headerButton={<HeaderButtons form={currentForm} tabPanel={tabPanel} />}
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
