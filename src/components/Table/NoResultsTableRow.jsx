import { TableCell, TableRow } from '@mui/material';

const NoResultsTableRow = () => {
  return (
    <TableRow>
      <TableCell colSpan="100%">No results found.</TableCell>
    </TableRow>
  );
};

export default NoResultsTableRow;
