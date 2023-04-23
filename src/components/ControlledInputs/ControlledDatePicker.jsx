import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { Controller } from 'react-hook-form';

const ControlledDatePicker = ({
  control,
  name,
  label,
  fullWidth = true,
  disabled = false,
  required = false,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { ref, onBlur, ...field }, fieldState: { error } }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              {...field}
              inputRef={ref}
              label={label}
              disabled={disabled}
              renderInput={(inputProps) => (
                <TextField
                  {...inputProps}
                  onBlur={onBlur}
                  required={required}
                  fullWidth={fullWidth}
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
          </LocalizationProvider>
        );
      }}
    />
  );
};

export default ControlledDatePicker;
