import React from 'react';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';

const NumberFieldComponent = (props) => {
  const {
    control,
    name,
    label,
    errors,
    type = 'number',
    variant = 'outlined',
    required = false,
    disabled = false,
    autoFocus = false,
    sx,
  } = props;

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: required }}
      render={({ field: { onChange, value } }) => (
        <TextField
          name={name}
          value={value || ''}
          variant={variant}
          label={label}
          onChange={onChange}
          disabled={disabled}
          autoFocus={autoFocus}
          error={errors[name]?.message ? true : false}
          helperText={errors[name]?.message}
          fullWidth
          type={type}
          sx={sx ? { sx } : { my: 1.5 }}
        />
      )}
    />
  );
};

export default NumberFieldComponent;
