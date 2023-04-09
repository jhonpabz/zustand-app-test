import { Box, Stack, TableRow, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import BorderedTableCell from './BorderedTableCell';

const ColoredStack = styled(Stack)({
  borderRadius: '6px',
  backgroundColor: '#F0FEFF',
});

const TertiaryBeneficiaries = () => {
  return (
    <TableRow>
      <BorderedTableCell>
        <Typography fontSize={14} fontWeight={600}>
          Tertiary Beneficiaries
        </Typography>
      </BorderedTableCell>

      <BorderedTableCell>
        <ColoredStack alignItems="center" spacing={1} paddingY={2}>
          <Typography fontSize={14}>50% Family A</Typography>
          <Typography fontSize={14}>25% Charity</Typography>
          <Typography fontSize={14}>25% Family B</Typography>
        </ColoredStack>
      </BorderedTableCell>

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
          <ColoredStack
            height="100%"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            paddingY={2}
          >
            <Typography fontSize={14}>50% Family A</Typography>
            <Typography fontSize={14}>50% Family B</Typography>
          </ColoredStack>
        </Box>
      </BorderedTableCell>

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
          <ColoredStack
            height="100%"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            paddingY={2}
          >
            <Typography fontSize={14}>50% Family A</Typography>
            <Typography fontSize={14}>50% Family B</Typography>
          </ColoredStack>
        </Box>
      </BorderedTableCell>

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
          <ColoredStack
            height="100%"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            paddingY={2}
          >
            <Typography fontSize={14}>50% Family A</Typography>
            <Typography fontSize={14}>50% Family B</Typography>
          </ColoredStack>
        </Box>
      </BorderedTableCell>
    </TableRow>
  );
};

export default TertiaryBeneficiaries;
