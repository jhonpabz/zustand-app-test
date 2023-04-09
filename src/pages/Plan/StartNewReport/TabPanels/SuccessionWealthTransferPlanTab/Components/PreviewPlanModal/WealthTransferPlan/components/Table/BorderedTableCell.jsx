import { TableCell } from '@mui/material';
import { styled } from '@mui/material';

const BorderedTableCell = styled(TableCell)(({ theme: { palette } }) => {
  return {
    borderBottom: `1px solid ${palette.grey[300]}`,
    backgroundColor: palette.common.white,
  };
});

export default BorderedTableCell;
