import { TextField } from '@mui/material';

import { Controller } from 'react-hook-form';

import CheckedMenuItem from '@components/Select/CheckedMenuItem';

const ControlledSelect = ({
  control,
  name,
  id,
  label,
  selection,
  sx,
  disabled,
  fullWidth = true,
  required = false,
  labelName = 'label',
  valueName = 'value',
}) => {
  return (
    <Controller
      control={control}
      name={name}
      label={label}
      render={({ field: { ref, ...field }, fieldState: { error } }) => {
        return (
          <TextField
            {...field}
            inputRef={ref}
            id={id}
            label={label}
            fullWidth={fullWidth}
            select
            disabled={disabled}
            required={required}
            helperText={!!error && error.message}
            sx={sx}
            SelectProps={{
              renderValue: (selected) =>
                selection.find((element) => element[valueName] === selected)?.[
                  labelName
                ],
              error: !!error,
            }}
            InputLabelProps={{
              error: !!error,
            }}
            FormHelperTextProps={{
              error: !!error,
            }}
          >
            {selection.map((element) => {
              return (
                <CheckedMenuItem
                  key={element[valueName]}
                  value={element[valueName]}
                  isSelected={element[valueName] === field.value}
                >
                  {element[labelName]}
                </CheckedMenuItem>
              );
            })}
          </TextField>
        );
      }}
    />
  );
};

export default ControlledSelect;
