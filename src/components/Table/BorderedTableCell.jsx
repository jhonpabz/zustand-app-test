import { TableCell } from '@mui/material';
import { styled } from '@mui/material';

const BorderedTableCell = styled(TableCell)(({ theme: { palette } }) => {
  const border = `1px solid ${palette.grey[300]}`;
  return {
    borderRight: border,
    borderBottom: border,
    ':first-of-type': {
      borderLeft: border,
    },
    ':last-of-type': {
      borderRight: border,
    },
  };
});

export default BorderedTableCell;
