import { TextField } from '@mui/material';

import { FormSection } from '..';

export const Notes = ({ control }) => {
  return (
    <FormSection>
      <TextField
        multiline
        rows={8}
        label="Notes"
        placeholder="Enter your notes here..."
      />
    </FormSection>
  );
};
