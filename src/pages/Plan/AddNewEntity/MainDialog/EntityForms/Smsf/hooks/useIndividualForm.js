import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { individualFormSchema } from '../schema';

export const useIndividualForm = ({
  // *************
  // * Details
  // *************
  first_name,
  middle_name,
  last_name,
  is_key_person,
  street,
  suburb,
  city,
  state,
  post_code,
  country,
  dob,
  gender,
  marital_status,
  risk_type = 'Asset Holder', // NOTE: Not yet available in model / Available as 'is_risk_taker'
  is_existing_client = false,
  email,
  is_risk_taker,
  is_family_member,
  is_au_resident,
  // *************
  // * Relationships
  // *************
  relationship_type,
  family_relationship_type,
  related_entity,
  asset_liabilities_profile,
  // *************
  // * Notes
  // *************
  notes_by_user,
}) => {
  const individualDataForm = useForm({
    defaultValues: {
      // *************
      // * Details
      // *************
      first_name,
      middle_name,
      last_name,
      is_key_person,
      street,
      suburb,
      city,
      state,
      post_code,
      country,
      dob,
      gender,
      marital_status,
      risk_type, // NOTE: Not yet available in model / Available as 'is_risk_taker'
      is_existing_client,
      email,
      is_risk_taker,
      is_family_member,
      is_au_resident,
      // *************
      // * Relationships
      // *************
      relationship_type,
      family_relationship_type,
      related_entity,
      asset_liabilities_profile,
      // *************
      // * Notes
      // *************
      notes_by_user,
    },
    resolver: yupResolver(individualFormSchema),
    mode: 'onBlur',
    shouldFocusError: true,
    criteriaMode: 'firstError',
  });

  return individualDataForm;
};
