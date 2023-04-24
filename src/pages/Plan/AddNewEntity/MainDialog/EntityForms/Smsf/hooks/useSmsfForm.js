import React from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useCurrentSchemaStore } from '../stores';

export const useSmsfForm = () => {
  const { schema } = useCurrentSchemaStore((state) => ({
    schema: state.schema,
  }));
  const smsfDataForm = useForm({
    defaultValues: {
      // *************
      // * Details
      // *************
      smsf_name: '',
      owner_director: '',
      abn: '',
      as_at_date: '',
      total_balance: '',
      status: '',
      notes_by: '',
      // *************
      // * Members
      // *************
      members: '',
      member_status: '',
      member_balance: '',
      // *************
      // * Relationships
      // *************
      xpm_relationship: '',
      xpm_relationship_type: '',
      // *************
      // * Notes
      // *************
      notes: '',
    },
    resolver: yupResolver(schema),
    mode: 'onBlur',
    shouldFocusError: true,
    criteriaMode: 'firstError',
  });

  return smsfDataForm;
};
