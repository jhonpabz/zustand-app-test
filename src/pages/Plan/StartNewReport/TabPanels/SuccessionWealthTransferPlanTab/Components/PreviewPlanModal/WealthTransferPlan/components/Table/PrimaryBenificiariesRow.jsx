import { Box, Chip, Stack, TableRow, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';

import BorderedTableCell from './BorderedTableCell';

const ColoredStack = styled(Stack)({
  borderRadius: '6px',
  backgroundColor: '#FFF7E2',
});

const PrimaryBenificiariesRow = () => {
  return (
    <TableRow>
      <BorderedTableCell>
        <Typography fontSize={14} fontWeight={600}>
          Primary Benificiaries
        </Typography>
      </BorderedTableCell>

      <BorderedTableCell>
        <ColoredStack alignItems="center" spacing={1} paddingY={2}>
          <Chip
            variant="outlined"
            size="small"
            label="Will Testamentary Trust"
          />
          <FamilyRestroomIcon />
          <Typography fontSize={14}>Mary Smith</Typography>
        </ColoredStack>
      </BorderedTableCell>

      <BorderedTableCell>
        <ColoredStack
          alignItems="center"
          spacing={1}
          height="100%"
          paddingY={2}
        >
          <Chip variant="outlined" size="small" label="Leading Member" />
          <ManIcon />
          <Typography fontSize={14}>John Smith</Typography>
        </ColoredStack>
      </BorderedTableCell>

      <BorderedTableCell></BorderedTableCell>

      <BorderedTableCell
        sx={{
          position: 'relative',
        }}
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          padding={2}
        >
          <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent="center"
            gap={2}
            alignItems="flex-end"
            bgcolor="#FFF7E2"
            py={2}
            sx={{
              borderRadius: '6px',
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={1}
            >
              <WomanIcon />
              <Typography fontSize={14}>Mary Smith</Typography>
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={1}
            >
              <ManIcon />
              <Typography fontSize={14}>John Smith</Typography>
            </Box>
          </Box>
        </Box>
      </BorderedTableCell>
    </TableRow>
  );
};

export default PrimaryBenificiariesRow;
