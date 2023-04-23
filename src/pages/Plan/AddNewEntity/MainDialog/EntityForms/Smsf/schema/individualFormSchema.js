import * as yup from 'yup';

export const individualFormSchema = yup.object().shape({
  // *************
  // * Details
  // *************
  first_name: yup.string().required('Please enter a first name.'),
  middle_name: yup.string().optional(),
  last_name: yup.string().required('Please enter a last name.'),
  is_key_person: yup.boolean(),
  street: yup.string().required('Please enter a street.'),
  suburb: yup.string().required('Please enter a suburb.'),
  city: yup.string().required('Please enter a city.'),
  state: yup.string().required('Please enter a state.'),
  post_code: yup.string().required('Please enter a post code.'),
  country: yup.string().required('Please enter a country.'),
  dob: yup
    .date()
    .required('Please select a date of birth.')
    .typeError('Please select a date of birth.'),
  gender: yup.string().required('Please select a gender.'),
  marital_status: yup.string().optional(),
  risk_type: yup.string().required('Please select a risk type'), // NOTE: Not yet available in model / Available as 'is_risk_taker'
  is_existing_client: yup.boolean(),
  email: yup
    .string()
    .required('Please enter an email.')
    .email('Please enter valid email'),
  is_risk_taker: yup.boolean(),
  is_family_member: yup.boolean(),
  is_au_resident: yup.boolean(),

  // *************
  // * Relationships
  // *************
  relationship_type: yup
    .string()
    .required('Please select a relationship type.'),
  family_relationship_type: yup
    .string()
    .required('Please select a family relationship type.'),
  related_entity: yup.string().required('Please select a related entity.'),
  asset_liabilities_profile: yup
    .string()
    .required('Please select an asset and reliabilities profile.'),

  // *************
  // * Notes
  // *************
  notes_by_user: yup.string().optional(),
});
