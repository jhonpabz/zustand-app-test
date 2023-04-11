import { IconButton, Stack, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ActionButtons = ({ onEdit = () => {}, onDelete = () => {} }) => {
  return (
    <Stack width="100%" direction="row">
      <Tooltip title="Edit">
        <IconButton color="primary" onClick={onEdit}>
          <EditIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Delete">
        <IconButton color="error" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default ActionButtons;
