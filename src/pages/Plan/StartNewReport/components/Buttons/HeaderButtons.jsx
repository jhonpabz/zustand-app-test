import { Button, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useReportPersistUtilsStore } from '../../stores';
import { useEffect } from 'react';
import { saveAndNextLookup } from '../../lib/LookUps/saveAndNextLookup';

const HeaderButtons = () => {
  // Todo: form = currentForm
  const setTabPanel = useReportPersistUtilsStore((state) => state.setTabPanel);
  const setCurrentForm = useReportPersistUtilsStore(
    (state) => state.setCurrentForm
  );
  const setIsSubmit = useReportPersistUtilsStore((state) => state.setIsSubmit);
  const { tabPanel, currentForm, isSubmit } = useReportPersistUtilsStore(
    (state) => ({
      tabPanel: state.tabPanel,
      currentForm: state.currentForm,
      isSubmit: state.isSubmit,
    })
  );

  const lookUpResult = saveAndNextLookup(tabPanel);

  const handleNext = () => {
    switch (tabPanel) {
      case 0:
        if (isSubmit.clientInfoForm) {
          setCurrentForm(lookUpResult.form);
          setTabPanel(lookUpResult.nextTab);
        }
        break;
      case 1:
        if (isSubmit.successionAndWealthPlanForm) {
          setCurrentForm(lookUpResult.form);
          setTabPanel(lookUpResult.nextTab);
        }
        break;
      case 2:
        if (isSubmit.strategiesForm) {
          setCurrentForm(lookUpResult.form);
          setTabPanel(lookUpResult.nextTab);
        }

        break;
      case 3:
        if (isSubmit.coverLetterForm) {
          setCurrentForm(lookUpResult.form);
          setTabPanel(lookUpResult.nextTab);
        }
    }
  };
  useEffect(() => {
    handleNext();
  }, [isSubmit]);

  const handleBack = () => {
    if (tabPanel !== 0) {
      setTabPanel(tabPanel - 1);
    }
  };

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
          form={currentForm}
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
