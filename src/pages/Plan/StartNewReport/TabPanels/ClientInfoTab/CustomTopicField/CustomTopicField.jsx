import React from 'react';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';

const CustomTopicField = (props) => {
  const {
    control,
    name,
    label,
    errors,
    type,
    style,
    variant = 'outlined',
    required = false,
    disabled = false,
    autoFocus = false,
    sx,
    multiline = false,
    rows,
    index,
    handleChange,
    item,
  } = props;

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: required }}
      render={({
        field: {
          onChange = (event) => handleChange(event, index),
          value = item.name,
        },
      }) => (
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
          style={style}
          sx={{ ...sx }}
          multiline={multiline}
          rows={rows}
        />
      )}
    />
  );
};

export default CustomTopicField;
