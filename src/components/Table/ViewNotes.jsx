import { Fragment, useState } from 'react';

import { Button, IconButton, Popover, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DescriptionIcon from '@mui/icons-material/Description';

const ViewNotes = ({ notes, componentSx = { viewButtonSx: {} } }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleToggleNotes = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleHideNotes = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Fragment>
      <Button
        variant="text"
        startIcon={<DescriptionIcon />}
        sx={{
          paddingLeft: 0,
          fontSize: 12,
          ...componentSx.viewButtonSx,
        }}
        onClick={handleToggleNotes}
      >
        View Notes
      </Button>

      {open && (
        <NotesPopover
          anchorEl={anchorEl}
          open={open}
          notes={notes}
          onClose={handleHideNotes}
        />
      )}
    </Fragment>
  );
};

const NotesPopover = ({ notes, open, anchorEl, onClose }) => {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'center',
        horizontal: 'right',
      }}
      PaperProps={{
        sx: {
          maxHeight: '640px',
          maxWidth: '320px',
          position: 'relative',
          padding: 4,
          display: 'grid',
          placeItems: 'center',
          overflowY: 'auto',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        },
      }}
    >
      <IconButton
        size="small"
        disableRipple
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: 6,
          right: 4,
          '&:hover': {
            color: ({ palette }) => palette.primary.main,
          },
        }}
      >
        <CloseIcon fontSize="12px" />
      </IconButton>

      <Typography fontSize={14}>{notes}</Typography>
    </Popover>
  );
};

export default ViewNotes;
