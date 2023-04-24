import {
  DetailsForm,
  RelationshipsForm,
  NotesForm,
  MembersForm,
} from '../components';

import {
  smsfDetailsSchema,
  smsfEntitySchema,
  smsfMembersSchema,
  smsfRelationshipSchema,
} from '../schema';

export const tabPropsLookup = {
  details: {
    id: 'details',
    label: 'Details',
    form: DetailsForm,
    schema: smsfDetailsSchema,
  },
  members: {
    id: 'members',
    label: 'Members',
    form: MembersForm,
    schema: smsfMembersSchema,
  },
  relationships: {
    id: 'relationships',
    label: 'Relationships',
    form: RelationshipsForm,
    schema: smsfRelationshipSchema,
  },
  notes: {
    id: 'notes',
    label: 'Notes',
    form: NotesForm,
    schema: smsfDetailsSchema,
  },
};
