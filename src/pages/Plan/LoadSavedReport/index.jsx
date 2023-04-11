import { TableContainer, Table } from '@mui/material';
import TableWithPaginationContainer from '@components/Table/TableWithPaginationContainer';
import TableHead from './components/Table/TableHead';
import TableBody from './components/Table/TableBody';

const LoadSavedReport = () => {
  return (
    <>
      <TableWithPaginationContainer>
        <TableContainer>
          <Table>
            <TableHead />

            <TableBody />
          </Table>
        </TableContainer>
      </TableWithPaginationContainer>
    </>
  );
};
export default LoadSavedReport;
