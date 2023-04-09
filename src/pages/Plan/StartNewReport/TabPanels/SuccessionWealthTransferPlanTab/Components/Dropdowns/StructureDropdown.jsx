import { useState } from 'react';
import { Box, FormControl, InputLabel, Select } from '@mui/material';
import CheckedMenuItem from '@components/Select/CheckedMenuItem';
import { structureList } from '@lib/Pages/EstatePlanning/StartNewReport/SuccessionWealthTransferPlan/wealthOwnerForm';

const inputLabelId = 'structure-label';
const selectId = 'structure-select';

const StructureDropdown = () => {
  const [selectedStructure, setSelectedStructure] = useState('');

  const handleChangeStructure = (event) => {
    const newStructure = event.target.value;
    setSelectedStructure(newStructure);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: '240px' }}>
      <FormControl fullWidth>
        <InputLabel id={inputLabelId}>Structure</InputLabel>

        <Select
          labelId={inputLabelId}
          id={selectId}
          label="Structure"
          value={selectedStructure}
          onChange={handleChangeStructure}
          renderValue={(selected) =>
            structureList.find((structure) => structure.value === selected)
              .label
          }
        >
          {structureList.map((structure) => (
            <CheckedMenuItem
              key={structure.value}
              value={structure.value}
              isSelected={structure.value === selectedStructure}
            >
              {structure.label}
            </CheckedMenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default StructureDropdown;
