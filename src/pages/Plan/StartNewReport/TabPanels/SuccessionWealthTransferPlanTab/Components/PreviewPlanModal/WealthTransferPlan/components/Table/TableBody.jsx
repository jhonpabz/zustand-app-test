import { TableBody as MuiTableBody } from '@mui/material';

import PrimaryBenificiariesRow from './PrimaryBenificiariesRow';
import SecondaryBeneficiariesRow from './SecondaryBeneficiariesRow';
import TertiaryBeneficiaries from './TertiaryBeneficiaries';

export const TableBody = ({ data }) => {
  return (
    <MuiTableBody>
      <PrimaryBenificiariesRow />
      <SecondaryBeneficiariesRow />
      <TertiaryBeneficiaries />
    </MuiTableBody>
  );
};
