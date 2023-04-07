import { Button, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const GroupButtons = ({ tabValue }) => {
  return (
    <>
      {tabValue === 4 ? (
        <Box
          sx={{
            display: { md: 'flex' },
            justifyContent: { md: 'space-between' },
            alignItems: 'center',
          }}
        >
          <Button variant="text" endIcon={<ArrowForwardIcon />}>
            Edit Report
          </Button>
          <Button variant="text" endIcon={<ArrowForwardIcon />}>
            Presenter Mode
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            display: { md: 'flex' },
            justifyContent: { md: 'space-between' },
            alignItems: 'center',
          }}
        >
          <Button variant="text" endIcon={<ArrowForwardIcon />}>
            Manage Client Group
          </Button>
          <Button variant="text" endIcon={<ArrowForwardIcon />}>
            View Group Balance Sheet
          </Button>
        </Box>
      )}
    </>
  );
};

export default GroupButtons;
