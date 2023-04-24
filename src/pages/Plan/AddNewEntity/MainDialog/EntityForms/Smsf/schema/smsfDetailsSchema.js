import * as yup from 'yup';

import { format } from 'date-fns';

const minDate = new Date('1900');
const maxDate = new Date('2099');

export const smsfDetailsSchema = yup.object().shape({
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
});
