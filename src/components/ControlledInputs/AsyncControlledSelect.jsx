import { TextField } from '@mui/material';

import { Controller } from 'react-hook-form';

import CheckedMenuItem from '@components/Select/CheckedMenuItem';
import LoadingMenuItem from '@components/Select/LoadingMenuItem';
import NoDocumentsFound from '@components/Select/NoDocumentsFound';
import ErrorFetching from '@components/Select/ErrorFetching';

const AsyncControlledSelect = ({
  control,
  name,
  id,
  label,
  selection,
  sx,
  disabled,
  fullWidth = true,
  required = false,
  open,
  onOpen,
  onClose,
  isLoading,
  isFetchError,
  idName = 'id',
  labelName = 'name',
  disabledFlag,
  refetch = () => {},
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
              open,
              onOpen,
              onClose,
              renderValue: (selected) =>
                selection.find((element) => element[`${idName}`] === selected)[
                  `${labelName}`
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
            {isLoading && <LoadingMenuItem key={crypto.randomUUID()} />}

            {!isLoading &&
              !isFetchError &&
              selection.length > 0 &&
              selection.map((element) => {
                const id = element[`${idName}`];
                const label = element[`${labelName}`];
                return (
                  <CheckedMenuItem
                    key={id}
                    value={id}
                    isSelected={id === field.value}
                    disabled={disabledFlag ? element[`${disabledFlag}`] : false}
                  >
                    {label}
                  </CheckedMenuItem>
                );
              })}

            {!isLoading && !isFetchError && selection.length === 0 && (
              <NoDocumentsFound />
            )}

            {isFetchError && <ErrorFetching refetch={refetch} />}
          </TextField>
        );
      }}
    />
  );
};

export default AsyncControlledSelect;
