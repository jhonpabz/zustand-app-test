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
            name="relationship_type"
            label="XPM: Relationship Type (Individual)"
            fullWidth
            required
          />

          {/* TODO: Replace with ControlledSelect */}
          <ControlledTextField
            control={control}
            name="family_relationship_type"
            label="Family Relationship Type (Individual)"
            fullWidth
            required
          />

          {/* TODO: Replace with ControlledSelect */}
          <ControlledTextField
            control={control}
            name="related_entity"
            label="Related Entity"
            fullWidth
            required
          />
        </FormRow>

        <FormRow>
          <ControlledTextField
            control={control}
            name="asset_liabilities_profile"
            label="Asset & Liabilities Profile"
            fullWidth
            required
          />
          <Box width="100%" />
          <Box width="100%" />
        </FormRow>
      </FormSection>
    </Fragment>
  );
};
