import { Switch } from '@mui/material';
import { Controller } from 'react-hook-form';

const ControlledSwitch = ({ control, name }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return <Switch {...field} checked={field.value} />;
      }}
    />
  );
};

export default ControlledSwitch;
