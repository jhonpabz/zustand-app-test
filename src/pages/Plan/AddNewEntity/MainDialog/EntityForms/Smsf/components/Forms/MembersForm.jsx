import { Fragment } from 'react';

import { Box, FormControlLabel, Typography } from '@mui/material';

import ControlledTextField from '@components/ControlledInputs/ControlledTextField';
import ControlledSwitch from '@components/ControlledInputs/ControlledSwitch';
import ControlledDatePicker from '@components/ControlledInputs/ControlledDatePicker';

import { FormSection, FormRow } from '..';

export const MembersForm = ({ control }) => {
  return (
    <Fragment>
      <FormSection title="Members">
        <FormRow>
          <ControlledTextField
            control={control}
            name="members"
            label="Members"
            fullWidth
            required
          />

          <ControlledTextField
            control={control}
            name="member_status"
            label="Members Status"
            fullWidth
          />

          <ControlledTextField
            control={control}
            name="member_balance"
            label="Member Balance"
            fullWidth
          />
        </FormRow>
      </FormSection>
    </Fragment>
  );
};
