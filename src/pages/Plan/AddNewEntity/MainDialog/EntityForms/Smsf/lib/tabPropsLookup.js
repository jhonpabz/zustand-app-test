import { DetailsForm, RelationshipsForm, NotesForm } from '../components';

export const tabPropsLookup = {
  details: {
    id: 'details',
    label: 'Details',
    form: DetailsForm,
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
