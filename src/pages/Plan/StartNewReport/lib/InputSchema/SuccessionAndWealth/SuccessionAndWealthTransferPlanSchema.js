import * as yup from 'yup';

export const SuccessionAndWealthTransferPlanSchema = yup.object().shape({
  leadingMember: yup.string().required('Leading Member is required'),
  firstSuccessorLeadingMember: yup
    .string()
    .required('First Successor is required'),
  secondSuccessorLeadingMember: yup
    .string()
    .required('Second Successor is required'),
});
