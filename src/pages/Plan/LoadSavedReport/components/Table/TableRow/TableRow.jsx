import { Fragment } from 'react';

import { TableCell, TableRow as MuiTableRow } from '@mui/material';

const TableRow = ({ data: reportData }) => {
  // const { showDeleteDialog, showEditDialog, closeDialog, ActionButtons } =
  //   useActionButtons();

  return (
    <Fragment>
      <MuiTableRow>
        {/* Client Group Name */}
        <TableCell>{reportData.reportId}</TableCell>

        {/*  */}
        <TableCell>{reportData.reportId}</TableCell>

        {/* Leading Member */}
        <TableCell>{reportData.reportId}</TableCell>
      </MuiTableRow>
    </Fragment>
  );
};

export default TableRow;
