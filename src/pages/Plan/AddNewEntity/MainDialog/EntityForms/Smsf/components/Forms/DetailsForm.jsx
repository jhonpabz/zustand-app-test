import { Fragment } from 'react';

import { Box, FormControlLabel, Typography } from '@mui/material';

import ControlledTextField from '@components/ControlledInputs/ControlledTextField';
import ControlledSwitch from '@components/ControlledInputs/ControlledSwitch';
import ControlledDatePicker from '@components/ControlledInputs/ControlledDatePicker';

import { FormSection, FormRow } from '..';

export const DetailsForm = ({ control }) => {
  return (
    <Fragment>
      <FormSection title="SMSF">
        <FormRow>
          <ControlledTextField
            control={control}
            name="smsf_name"
            label="SMSF Name"
            fullWidth
            required
          />

          <ControlledTextField
            control={control}
            name="owner_director"
            label="Owner/Director"
            fullWidth
          />

          <ControlledTextField
            control={control}
            name="abn"
            label="ABN"
            fullWidth
            required
          />
        </FormRow>

        <FormRow>
          <ControlledTextField
            control={control}
            name="total_balance"
            label="Total Balance"
            fullWidth
            required
          />

          <ControlledTextField
            control={control}
            name="status"
            label="Status"
            fullWidth
            required
          />

          <ControlledDatePicker
            control={control}
            name="as_at_date"
            label="Date"
            fullWidth
            required
          />
        </FormRow>

        <FormRow>
          <ControlledTextField
            control={control}
            name="notes_by"
            label="Notes By"
            fullWidth
            required
          />
        </FormRow>
      </FormSection>
    </Fragment>
  );
};
