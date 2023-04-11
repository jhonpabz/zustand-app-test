import { TableCell } from '@mui/material';
import { styled } from '@mui/material';

const BorderedHeaderTableCell = styled(TableCell)(({ theme: { palette } }) => {
  const border = `1px solid ${palette.grey[300]}`;

  return {
    borderTop: border,
    borderBottom: border,
    borderRight: border,
    ':last-of-type': {
      borderRight: border,
    },
    ':first-of-type': {
      borderLeft: border,
    },
  };
});

export default BorderedHeaderTableCell;
