import { Fragment, useState } from 'react';
import { Button, Box } from '@mui/material';
import MainDialog from './components/Dialog/MainDialog';

const AddNewEntity = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  const handleOpenDialog = () => {
    setIsOpen(true);
  };
  return (
    <Fragment>
      <Box>
        <Button onClick={handleOpenDialog} variant="contained">
          Add New Entity
        </Button>
        <MainDialog open={isOpen} onClose={handleCloseDialog} />
      </Box>
    </Fragment>
  );
};
export default AddNewEntity;
