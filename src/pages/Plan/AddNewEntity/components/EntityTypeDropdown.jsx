import { TextField } from '@mui/material';

import CheckedMenuItem from '@components/Select/CheckedMenuItem';
import { useEntityTypeStore } from '../stores/index';

const list = [
  {
    label: 'Individual (Family Member)',
    value: 'individual_family_member',
  },
  {
    label: 'Individual (Not Related)',
    value: 'individual_not_related',
  },
  {
    label: 'Company',
    value: 'company',
  },
  {
    label: 'Trust',
    value: 'trust',
  },
  {
    label: 'SMSF',
    value: 'smsf',
  },
  {
    label: 'Partnership',
    value: 'partnership',
  },
  {
    label: 'Other',
    value: 'other',
  },
];

const EntityTypeDropdown = () => {
  const setSelectedType = useEntityTypeStore((state) => state.setSelectedType);

  const { selectedType } = useEntityTypeStore((state) => ({
    selectedType: state.selectedType,
  }));

  const handleChange = (event) => {
    setSelectedType(event.target.value);
  };
  console.log('selectedType: ', selectedType);
  return (
    <TextField
      id="client-groups-type-select"
      label="Entity Type"
      select
      onChange={handleChange}
      value={selectedType}
      SelectProps={{
        autoWidth: true,
        renderValue: (selected) =>
          list.find((type) => type.value === selected).label,
      }}
      sx={{
        minWidth: '240px',
      }}
    >
      {list.map((type) => {
        const { label, value } = type;
        return (
          <CheckedMenuItem
            key={value}
            value={value}
            isSelected={value === selectedType}
            sx={{
              minWidth: '240px',
            }}
          >
            {label}
          </CheckedMenuItem>
        );
      })}
    </TextField>
  );
};

export default EntityTypeDropdown;
