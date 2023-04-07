import { Button, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const HeaderButtons = ({ backOnClick, nextOnClick, tabPanel, form }) => {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        {tabPanel !== 0 && (
          <Button
            onClick={backOnClick}
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
          onClick={nextOnClick}
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
