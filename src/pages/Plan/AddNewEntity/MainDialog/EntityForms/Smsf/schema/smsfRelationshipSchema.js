import * as yup from 'yup';

export const smsfRelationshipSchema = yup.object().shape({
  //RELATIONSHIP
  xpm_relationship: yup.string().required('XPM Relationship is required.'), // - done
  xpm_relationship_type: yup
    .string()
    .required('XPM Relationship Type is required.'), // - done
});
