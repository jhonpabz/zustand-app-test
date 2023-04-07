import { Button, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useReportPersistStore } from '../../stores';
import { useEffect } from 'react';
import { saveAndNextLookup } from '../../lib/LookUps/saveAndNextLookup';

const HeaderButtons = ({ form }) => {
  // Todo: form = currentForm
  const setTabPanel = useReportPersistStore((state) => state.setTabPanel);
  const { tabPanel } = useReportPersistStore((state) => ({
    tabPanel: state.tabPanel,
  }));

  const lookUpResult = saveAndNextLookup(tabPanel);

  const handleNext = () => {
    if (tabPanel !== 4) {
      setTabPanel(lookUpResult.nextTab);
    }
  };

  const handleBack = () => {
    if (tabPanel !== 0) {
      setTabPanel(tabPanel - 1);
    }
  };

  useEffect(() => {
    const result = saveAndNextLookup(tabPanel);
    console.log('form: ', result.form);
    console.log('nextTab: ', result.nextTab);
  }, [tabPanel]);

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        {tabPanel !== 0 && (
          <Button
            onClick={handleBack}
            sx={{ px: 3, py: 1.5, mr: 2 }}
            startIcon={<ArrowBackIcon />}
            variant="faded"
            type="submit"
          >
            Back
          </Button>
        )}
        <Button
          type="submit"
          form={form}
          onClick={handleNext}
          sx={{ px: 3, py: 1.5 }}
          endIcon={tabPanel !== 4 && <ArrowForwardIcon />}
        >
          {tabPanel === 4 ? 'Save' : 'Save & Next'}
        </Button>
      </Box>
    </>
  );
};

export default HeaderButtons;
