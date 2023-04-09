import * as yup from 'yup';

export const clientGroupSchema = yup.object().shape({
  clientGroup: yup.string().required('Client Group is required.'),
});
