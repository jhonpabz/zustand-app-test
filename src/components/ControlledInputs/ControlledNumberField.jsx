import { forwardRef } from 'react';

import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';

const NumericFormatCustom = forwardRef(function NumericFormatCustom(
  props,
  ref
) {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      valueIsNumericString
      prefix="$"
      decimalScale={2}
      fixedDecimalScale
      allowNegative={false}
    />
  );
});

const ControlledNumberField = ({
  control,
  name,
  label,
  sx,
  fullWidth = true,
  required = false,
  disabled = false,
  margin = 'none',
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { ref, ...field }, fieldState: { error } }) => (
        <TextField
          fullWidth={fullWidth}
          label={label}
          required={required}
          disabled={disabled}
          margin={margin}
          sx={sx}
          error={!!error}
          helperText={error?.message}
          {...field}
          InputProps={{
            inputRef: ref,
            inputComponent: NumericFormatCustom,
          }}
        />
      )}
    />
  );
};

export default ControlledNumberField;
