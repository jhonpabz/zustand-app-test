import { DialogTitle as MuiDialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const DialogTitle = (props) => {
  return (
    <MuiDialogTitle {...props}>
      {props.children}
      {props?.onClose && (
        <IconButton
          aria-label="close"
          onClick={props.onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            '&:hover': {
              color: (theme) => theme.palette.primary.main,
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      )}
    </MuiDialogTitle>
  );
};

export default DialogTitle;
