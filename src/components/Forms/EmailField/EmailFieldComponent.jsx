import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

const EmailFieldComponent = ({
  control,
  name,
  required,
  label,
  disabled = false,
  autoFocus,
  type,
  variant = 'outlined',
  style,
  sx,
}) => {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const isValidEmail = (email) => {
    return emailRegex.test(email);
  };

  const validateEmail = (error, value) => {
    if (!error && !isValidEmail(value) && value) {
      return (error = {
        message: 'Must be valid a email',
        type: 'required',
        ref: { name: 'email' },
      });
    }

    if (!error && !isValidEmail(value) && value === '') {
      return (error = {
        message: 'Email is required',
        type: 'required',
        ref: { name: 'email' },
      });
    }
    return error;
  };

  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          error = validateEmail(error, value);

          return (
            <TextField
              variant={variant}
              label={label || 'Email'}
              value={value || ''}
              onChange={onChange}
              disabled={disabled}
              autoFocus={autoFocus}
              error={!!error}
              helperText={error ? error.message : null}
              fullWidth
              type={type || 'email'}
              style={style}
              sx={{ ...sx }}
            />
          );
        }}
      />
    </>
  );
};

export default EmailFieldComponent;
