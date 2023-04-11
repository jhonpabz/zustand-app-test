import { Fragment } from 'react';

import { TableCell, TableRow as MuiTableRow } from '@mui/material';

const TableRow = ({ data: clientGroupData }) => {
  // const { showDeleteDialog, showEditDialog, closeDialog, ActionButtons } =
  //   useActionButtons();

  return (
    <Fragment>
      <MuiTableRow>
        {/* Status */}
        <TableCell>
          <Chip status={clientGroupData.status} />
        </TableCell>

        {/* Client Group Name */}
        <TableCell>{clientGroupData.group_name}</TableCell>

        {/* Related Entities */}
        <TableCell>{clientGroupData.related_entity}</TableCell>

        {/* Leading Member */}
        <TableCell>{clientGroupData.leading_member}</TableCell>
      </MuiTableRow>
    </Fragment>
  );
};

export default TableRow;
