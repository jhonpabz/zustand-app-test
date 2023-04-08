import { Button, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useReportPersistStore } from '../../stores';
import { useEffect } from 'react';
import { saveAndNextLookup } from '../../lib/LookUps/saveAndNextLookup';

const HeaderButtons = ({ form }) => {
  // Todo: form = currentForm
  const setTabPanel = useReportPersistStore((state) => state.setTabPanel);
  const setCurrentForm = useReportPersistStore((state) => state.setCurrentForm);
  const setIsSubmit = useReportPersistStore((state) => state.setIsSubmit);
  const { tabPanel, currentForm, isSubmit } = useReportPersistStore(
    (state) => ({
      tabPanel: state.tabPanel,
      currentForm: state.currentForm,
      isSubmit: state.isSubmit,
    })
  );

  const lookUpResult = saveAndNextLookup(tabPanel);

  const handleNext = () => {
    console.log('isSubmit: ', isSubmit);
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

  //   console.log(isSubmit.clientInfoForm);
  //   const currentFormToSubmit = lookUpResult.formSubmit;
  //   console.log(currentFormToSubmit, 'currentFormToSubmit');
  //   setCurrentForm(lookUpResult.form);
  //   if (tabPanel !== 4) {
  //     setTabPanel(lookUpResult.nextTab);
  //   }
  // };

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
