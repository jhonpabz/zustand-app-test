import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

const ControlledTextField = ({
  control,
  name,
  sx,
  fullWidth = true,
  label,
  required = false,
  disabled = false,
  multiline = false,
  rows,
  placeholder,
  margin = 'none',
  autoComplete = 'off',
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { ref, ...field }, fieldState: { error } }) => (
        <TextField
          inputRef={ref}
          {...field}
          fullWidth={fullWidth}
          disabled={disabled}
          label={label}
          sx={sx}
          error={!!error}
          required={required}
          helperText={error?.message}
          multiline={multiline}
          rows={rows}
          placeholder={placeholder}
          margin={margin}
          autoComplete={autoComplete}
        />
      )}
    />
  );
};

export default ControlledTextField;
