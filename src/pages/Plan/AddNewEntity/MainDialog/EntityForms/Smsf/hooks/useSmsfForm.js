import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { smsfEntitySchema } from '../schema';

export const useSmsfForm = ({
  // *************
  // * Details
  // *************
  smsf_name,
  owner_director,
  abn,
  as_at_date,
  total_balance,
  status,
  notes_by,
  // *************
  // * Members
  // *************
  members,
  member_status,
  member_balance,
  // *************
  // * Relationships
  // *************
  xpm_relationship,
  xpm_relationship_type,
  // *************
  // * Notes
  // *************
  notes,
}) => {
  const smsfDataForm = useForm({
    defaultValues: {
      // *************
      // * Details
      // *************
      smsf_name,
      owner_director,
      abn,
      as_at_date,
      total_balance,
      status,
      notes_by,
      // *************
      // * Members
      // *************
      members,
      member_status,
      member_balance,
      // *************
      // * Relationships
      // *************
      xpm_relationship,
      xpm_relationship_type,
      // *************
      // * Notes
      // *************
      notes,
    },
    resolver: yupResolver(smsfEntitySchema),
    mode: 'onBlur',
    shouldFocusError: true,
    criteriaMode: 'firstError',
  });

  return smsfDataForm;
};
