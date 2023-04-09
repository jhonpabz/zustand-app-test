import {
  Chip,
  Stack,
  TableHead as MuiTableHead,
  TableRow,
  TableCell,
  Typography,
} from '@mui/material';
import ManIcon from '@mui/icons-material/Man';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import LockIcon from '@mui/icons-material/Lock';

import BorderedTableCell from './BorderedTableCell';

export const TableHead = () => {
  return (
    <MuiTableHead>
      <TableRow>
        <BorderedTableCell
          sx={{
            width: '140px',
          }}
        >
          Wealth Owner
        </BorderedTableCell>

        <BorderedTableCell
          sx={{
            width: '180px',
          }}
        >
          <Stack alignItems="center" spacing={1}>
            <ManIcon />
            <Typography fontSize={14}>John Smith</Typography>
          </Stack>
        </BorderedTableCell>

        <BorderedTableCell
          sx={{
            width: '180px',
          }}
        >
          <Stack alignItems="center" spacing={1}>
            <Chip
              label="Family Protection Trust"
              variant="outlined"
              size="small"
            />
            <FamilyRestroomIcon />
          </Stack>
        </BorderedTableCell>

        <BorderedTableCell
          sx={{
            width: '180px',
          }}
        >
          <Stack alignItems="center" spacing={1}>
            <Chip
              label="Family Protection Trust"
              variant="outlined"
              size="small"
            />
            <LockIcon />
          </Stack>
        </BorderedTableCell>

        <BorderedTableCell
          sx={{
            width: '180px',
          }}
        >
          <Stack alignItems="center" spacing={1}>
            <Chip
              label="Family Protection Trust"
              variant="outlined"
              size="small"
            />
            <LockIcon />
          </Stack>
        </BorderedTableCell>
      </TableRow>
    </MuiTableHead>
  );
};
