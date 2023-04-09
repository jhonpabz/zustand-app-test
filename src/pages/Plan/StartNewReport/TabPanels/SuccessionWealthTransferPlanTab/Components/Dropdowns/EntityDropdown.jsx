import { useState } from 'react';
import { Box, FormControl, InputLabel, Select } from '@mui/material';
import CheckedMenuItem from '@components/Select/CheckedMenuItem';

const mockEntityList = [...Array(5).keys()].map((key) => ({
  label: `Entity ${key + 1}`,
  value: crypto.randomUUID(),
}));

const inputLabelId = 'add-new-client-group-label';
const selectId = 'add-new-client-select';

const EntityDropdown = () => {
  const [selectedEntity, setSelectedEntity] = useState('');

  const handleChangeClient = (event) => {
    const newClient = event.target.value;
    setSelectedEntity(newClient);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: '240px' }}>
      <FormControl fullWidth>
        <InputLabel id={inputLabelId}>Entity</InputLabel>

        <Select
          labelId={inputLabelId}
          id={selectId}
          label="Entity"
          value={selectedEntity}
          onChange={handleChangeClient}
          renderValue={(selected) =>
            mockEntityList.find((client) => client.value === selected).label
          }
        >
          {mockEntityList.map((entity) => (
            <CheckedMenuItem
              key={entity.value}
              value={entity.value}
              isSelected={entity.value === selectedEntity}
            >
              {entity.label}
            </CheckedMenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default EntityDropdown;
