import * as yup from 'yup';

export const coverLetterSchema = yup.object().shape({
  taxReturns: yup.string().required('2022 Income Tax Returns is required'),
  subHeader: yup.string().required('Sub-Header is required.'),
  meeting: yup.string().required('Meeting Link is required.'),
  borrower: yup.string().required('Borrower Name is required.'),
});
