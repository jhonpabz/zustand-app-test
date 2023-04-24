import * as yup from 'yup';

export const smsfMembersSchema = yup.object().shape({
  //MEMBERS
  members: yup.string().required('Members is required.'), // - done
  member_status: yup.string().required('Member Status is required.'), // - done

  member_balance: yup.string().required('Member Balance is required.'), // - done
});
