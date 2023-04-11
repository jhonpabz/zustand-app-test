import { TableBody as MuiTableBody } from '@mui/material';

import TableRow from './TableRow/TableRow';

const TableBody = ({ data }) => {
  return (
    <MuiTableBody>
      {data?.map((clientGroup) => (
        <TableRow key={clientGroup.id} data={clientGroup} />
      ))}
    </MuiTableBody>
  );
};

export default TableBody;
