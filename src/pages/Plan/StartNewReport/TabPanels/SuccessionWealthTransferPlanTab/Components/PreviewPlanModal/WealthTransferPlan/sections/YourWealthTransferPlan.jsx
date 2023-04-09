import { Stack, Table, TableContainer } from '@mui/material';

import HeaderTextComponent from '../components/Letter/HeaderText/HeaderTextComponent';

import { TableHead, TableBody } from '../components';

export const YourWealthTransferPlan = () => {
  return (
    <Stack spacing={4}>
      <HeaderTextComponent>Your Wealth Transfer Plan:</HeaderTextComponent>

      <TableContainer>
        <Table>
          <TableHead />
          <TableBody />
        </Table>
      </TableContainer>
    </Stack>
  );
};
