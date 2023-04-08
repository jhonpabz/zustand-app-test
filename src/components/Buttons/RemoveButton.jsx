import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import Fab from '@mui/material/Fab';

const RemoveButton = ({ onClick, sx }) => {
  return (
    <>
      <Fab
        size="small"
        aria-label="add"
        sx={{
          borderStyle: 'solid',
          borderWidth: '2px',

          color: error,
          ...sx,
          transform: 'scale(0.8)',
        }}
        onClick={onClick}
      >
        <ClearOutlinedIcon />
      </Fab>
    </>
  );
};

export default RemoveButton;
