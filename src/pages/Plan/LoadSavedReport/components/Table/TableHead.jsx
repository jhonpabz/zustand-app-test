import { TableHead as MuiTableHead, TableRow, TableCell } from '@mui/material';

import { headerList } from '../../lib';

const TableHead = () => {
  return (
    <MuiTableHead>
      <TableRow>
        {headerList.map((header) => {
          // * Make column sticky
          const sx =
            header === 'Action' ? { position: 'sticky', right: 0 } : {};

          return (
            <TableCell key={header} sx={sx}>
              {header}
            </TableCell>
          );
        })}
      </TableRow>
    </MuiTableHead>
  );
};

export default TableHead;
