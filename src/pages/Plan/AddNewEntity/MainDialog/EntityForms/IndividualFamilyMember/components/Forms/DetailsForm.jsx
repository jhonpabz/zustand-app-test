import { Fragment } from 'react';

import { Box, FormControlLabel, Typography } from '@mui/material';

import ControlledTextField from '@components/ControlledInputs/ControlledTextField';
import ControlledSwitch from '@components/ControlledInputs/ControlledSwitch';
import ControlledDatePicker from '@components/ControlledInputs/ControlledDatePicker';

import { FormSection, FormRow } from '..';

export const DetailsForm = ({ control }) => {
  return (
    <Fragment>
      {/* Name */}
      <FormSection title="Name">
        <FormRow>
          <ControlledTextField
            control={control}
            name="first_name"
            label="First Name"
            fullWidth
            required
          />

          <ControlledTextField
            control={control}
            name="middle_name"
            label="Middle Name"
            fullWidth
          />

          <ControlledTextField
            control={control}
            name="last_name"
            label="Last Name"
            fullWidth
            required
          />
        </FormRow>

        <FormRow>
          <FormControlLabel
            control={
              <ControlledSwitch control={control} name="is_key_person" />
            }
            label={
              <Typography fontSize={14} fontWeight={400}>
                Key Person (Leading Member)
              </Typography>
            }
          />
        </FormRow>
      </FormSection>

      {/* Address */}
      <FormSection title="Home Address">
        <FormRow>
          <ControlledTextField
            control={control}
            name="street"
            label="Street"
            fullWidth
            required
          />

          <ControlledTextField
            control={control}
            name="suburb"
            label="Suburb"
            fullWidth
            required
          />

          <ControlledTextField
            control={control}
            name="city"
            label="City"
            fullWidth
            required
          />
        </FormRow>

        <FormRow>
          <ControlledTextField
            control={control}
            name="state"
            label="State"
            fullWidth
            required
          />

          <ControlledTextField
            control={control}
            name="post_code"
            label="Post Code"
            fullWidth
            required
          />

          <ControlledTextField
            control={control}
            name="country"
            label="Country"
            fullWidth
            required
          />
        </FormRow>
      </FormSection>

      {/* Personal Details */}
      <FormSection title="Personal Information">
        <FormRow>
          <ControlledDatePicker
            control={control}
            name="dob"
            label="Date of Birthday"
            fullWidth
            required
          />

          {/* TODO: Replace with ControlledSelect */}
          <ControlledTextField
            control={control}
            name="gender"
            label="Gender"
            fullWidth
            required
          />

          {/* TODO: Replace with ControlledSelect */}
          <ControlledTextField
            control={control}
            name="marital_status"
            label="Marital Status"
            fullWidth
            required
          />
        </FormRow>

        <FormRow>
          <ControlledTextField
            control={control}
            name="email"
            label="Email Address"
            fullWidth
            required
          />

          {/* TODO: Replace with ControlledSelect */}
          <ControlledTextField
            control={control}
            name="risk_type"
            label="Risk Type"
            fullWidth
            required
          />
          <Box width="100%" />
        </FormRow>

        <FormRow>
          <Box width="100%">
            <FormControlLabel
              control={
                <ControlledSwitch control={control} name="is_existing_client" />
              }
              label={
                <Typography fontSize={14} fontWeight={400}>
                  Existing Client
                </Typography>
              }
            />
          </Box>

          <Box width="100%">
            <FormControlLabel
              control={
                <ControlledSwitch control={control} name="is_au_resident" />
              }
              label={
                <Typography fontSize={14} fontWeight={400}>
                  Australian Resident
                </Typography>
              }
            />
          </Box>

          <Box width="100%" display="flex" alignItems="center">
            <FormControlLabel
              control={
                <ControlledSwitch control={control} name="is_family_member" />
              }
              label={
                <Typography fontSize={14} fontWeight={400}>
                  Family Member
                </Typography>
              }
            />
          </Box>
        </FormRow>
      </FormSection>
    </Fragment>
  );
};
