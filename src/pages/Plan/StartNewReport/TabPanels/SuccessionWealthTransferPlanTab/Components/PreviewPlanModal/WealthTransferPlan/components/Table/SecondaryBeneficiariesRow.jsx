import { Chip, Stack, TableRow, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import WomanIcon from '@mui/icons-material/Woman';
import BoyIcon from '@mui/icons-material/Boy';

import BorderedTableCell from './BorderedTableCell';

const ColoredStack = styled(Stack)({
  borderRadius: '6px',
  backgroundColor: '#F0FFDD',
});

const SecondaryBeneficiariesRow = () => {
  return (
    <TableRow>
      <BorderedTableCell>
        <Typography fontSize={14} fontWeight={600}>
          Secondary Beneficiaries
        </Typography>
      </BorderedTableCell>

      <BorderedTableCell>
        <ColoredStack alignItems="center" spacing={1} paddingY={2}>
          <Chip
            variant="outlined"
            size="small"
            label="Will Testamentary Trust"
          />
          <BoyIcon />
          <Typography fontSize={14}>Mary Smith</Typography>
        </ColoredStack>
      </BorderedTableCell>

      <BorderedTableCell>
        <ColoredStack alignItems="center" spacing={1} paddingY={2}>
          <Chip variant="outlined" size="small" label="Leading Member" />
          <WomanIcon />
          <Typography fontSize={14}>Mary Smith</Typography>
        </ColoredStack>
      </BorderedTableCell>

      <BorderedTableCell>
        <ColoredStack alignItems="center" spacing={1} paddingY={2}>
          <Chip
            variant="outlined"
            size="small"
            label="2nd Successor Leading Member"
            sx={{
              maxWidth: '20ch',
            }}
          />
          <BoyIcon />
          <Typography fontSize={14}>Nancy Smith</Typography>
        </ColoredStack>
      </BorderedTableCell>

      <BorderedTableCell>
        <ColoredStack alignItems="center" spacing={1} paddingY={2}>
          <Chip
            variant="outlined"
            size="small"
            label="SMSF Death Benefit Trust"
          />
          <BoyIcon />
          <Typography fontSize={14}>Nancy Smith</Typography>
        </ColoredStack>
      </BorderedTableCell>
    </TableRow>
  );
};

export default SecondaryBeneficiariesRow;
