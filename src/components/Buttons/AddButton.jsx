import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const AddButton = ({ onClick, type, sx }) => {
  return (
    <>
      <Fab
        size="small"
        aria-label="add"
        sx={{
          borderStyle: 'solid',
          borderWidth: '2px',
          ...sx,
          transform: 'scale(0.8)',
        }}
        onClick={onClick}
        type={type}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default AddButton;
