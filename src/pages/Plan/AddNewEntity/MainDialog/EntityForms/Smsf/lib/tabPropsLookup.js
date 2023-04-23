import {
  DetailsForm,
  RelationshipsForm,
  NotesForm,
  MembersForm,
} from '../components';

export const tabPropsLookup = {
  details: {
    id: 'details',
    label: 'Details',
    form: DetailsForm,
  },
  members: {
    id: 'members',
    label: 'Members',
    form: MembersForm,
  },
  relationships: {
    id: 'relationships',
    label: 'Relationships',
    form: RelationshipsForm,
  },
  notes: {
    id: 'notes',
    label: 'Notes',
    form: NotesForm,
  },
};
