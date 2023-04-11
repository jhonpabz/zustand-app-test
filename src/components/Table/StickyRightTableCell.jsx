import { TableCell } from '@mui/material';

const StickyRightTableCell = ({ align, children, sx }) => {
  return (
    <TableCell
      {...align}
      sx={{
        position: 'sticky',
        right: 0,
        backgroundColor: ({ palette }) => palette.common.white,
        ...sx,
      }}
    >
      {children}
    </TableCell>
  );
};

export default StickyRightTableCell;
