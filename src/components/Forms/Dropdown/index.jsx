import React from 'react';
import {
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
  MenuItem,
} from '@mui/material';
import { Controller } from 'react-hook-form';

const DropdownComponent = (props) => {
  const {
    name,
    control,
    defaultValue,
    label,
    errors,
    variant,
    id,
    labelId,
    selectId,
    options,
    sx,
    width = '250px',
    disabled = false,
  } = props;

  return (
    <>
      <FormControl
        variant={variant}
        fullWidth
        error={errors[name]?.message ? true : false}
        disabled={disabled}
      >
        <InputLabel id={id}>{label}</InputLabel>
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          render={({ field: { onChange, value } }) => (
            <Select
              sx={{ ...sx, width: width }}
              labelId={labelId}
              id={selectId}
              label={label}
              onChange={onChange}
              value={value || ''}
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        <FormHelperText>{errors[name]?.message}</FormHelperText>
      </FormControl>
    </>
  );
};

export default DropdownComponent;
