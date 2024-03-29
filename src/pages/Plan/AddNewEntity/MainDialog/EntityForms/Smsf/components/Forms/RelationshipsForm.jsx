import { Fragment } from 'react';

import { Box } from '@mui/material';

import ControlledTextField from '@components/ControlledInputs/ControlledTextField';
import { FormSection, FormRow } from '..';

export const RelationshipsForm = ({ control }) => {
  return (
    <Fragment>
      <FormSection>
        <FormRow>
          {/* TODO: Replace with ControlledSelect */}
          <ControlledTextField
            control={control}
            name="xpm_relationship"
            label="XPM: Relationship Type"
            fullWidth
            required
          />

          {/* TODO: Replace with ControlledSelect */}
          <ControlledTextField
            control={control}
            name="xpm_relationship_type"
            label="Family Relationship Type"
            fullWidth
            required
          />
        </FormRow>
      </FormSection>
    </Fragment>
  );
};
