import * as yup from 'yup';

export const clientInfoSchema = yup.object().shape({
  clientPrimaryContactName: yup
    .string()
    .required('Client Primary Contact Name is required'),
  casualName: yup.string().required('Casual Name is required.'),
  clientEmail: yup
    .string()
    .required('Email is required.')
    .email('Must be a valid email'),
  protectedAssetsForFuture: yup
    .string()
    .required('Protected Assets For Future is required.'),
  protectedAssetsFromAttack: yup
    .string()
    .required('Protected Assets From Attack is required.'),
  assetsThatYouCanPass: yup
    .string()
    .required('Assets That You Can Pass is required.'),
  customTopic0: yup.string().required('Custom Topic is required.'),
});
