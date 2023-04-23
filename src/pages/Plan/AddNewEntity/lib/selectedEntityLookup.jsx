import Company from '../MainDialog/EntityForms/Company';
import IndividualFamilyMember from '../MainDialog/EntityForms/IndividualFamilyMember';
import IndividualNotRelated from '../MainDialog/EntityForms/IndividualNotRelated';
import Other from '../MainDialog/EntityForms/Other';
import Partnership from '../MainDialog/EntityForms/Partnership';
import Smsf from '../MainDialog/EntityForms/Smsf';
import Trust from '../MainDialog/EntityForms/Trust';

export const selectedEntityLookup = (val) => {
  let lookup = {
    individual_family_member: <IndividualFamilyMember />,
    individual_not_related: <IndividualNotRelated />,
    company: <Company />,
    trust: <Trust />,
    smsf: <Smsf />,
    partnership: <Partnership />,
    other: <Other />,
  };
  let result = lookup[val];
  return result;
};
