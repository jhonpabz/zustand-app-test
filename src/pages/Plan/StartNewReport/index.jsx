import { useState, useEffect } from 'react';
import { Box } from '@mui/material';

import TabPanels from './TabPanels/TabPanels';
import GroupButtons from './components/Buttons/GroupButtons';
import PageHeader from '../../../components/PageHeader/PageHeader';
import HeaderButtons from './components/Buttons/HeaderButtons';
import { SaveChangesModal } from './components/SaveChangesModal/SaveChangesModal';
import useBoolean from '@hooks/utils/useBoolean';

const StartNewReport = () => {
  const { value: isFeedbackDialogOpen, toggle: toggleFeedbackDialog } =
    useBoolean(false);

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
      <SaveChangesModal
        id={1}
        open={isFeedbackDialogOpen}
        onClose={toggleFeedbackDialog}
      />
    </>
  );
};

export default StartNewReport;
