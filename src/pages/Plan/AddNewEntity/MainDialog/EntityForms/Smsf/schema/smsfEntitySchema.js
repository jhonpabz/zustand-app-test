import * as yup from 'yup';

import { format } from 'date-fns';

const minDate = new Date('1900');
const maxDate = new Date('2099');

export const smsfEntitySchema = yup.object().shape({
  smsf_name: yup.string().required('SMSF Name is required.'), // - done
  owner_director: yup.string().required('Owner/Director is required.'), // - done

  abn: yup.string().required('ABN is required.'), // - done

  as_at_date: yup
    .date()
    .required('Valuation Date is required.')
    .typeError('Invalid date.')
    .min(minDate, `Date must be after ${format(minDate, 'MM/dd/yyyy')}`)
    .max(maxDate, `Date must be before ${format(maxDate, 'MM/dd/yyyy')}`), // - done
  total_balance: yup.string().required('Total Balance is required.'), // - done
  status: yup.string().required('Status is required.'), // - done
  notes_by: yup.string().required('Notes by is required.'),

  //MEMBERS
  members: yup.string().required('Members is required.'), // - done
  member_status: yup.string().required('Member Status is required.'), // - done

  member_balance: yup.string().required('Member Balance is required.'), // - done

  //RELATIONSHIP
  xpm_relationship: yup.string().required('XPM Relationship is required.'), // - done
  xpm_relationship_type: yup
    .string()
    .required('XPM Relationship Type is required.'), // - done

  //NOTES
  notes: yup.string().required('Notes is required.'), // - done
});
