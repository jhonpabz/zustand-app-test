import { Stack, Typography } from '@mui/material';

export const FormSection = ({ title, children }) => {
  return (
    <Stack spacing={2} mt={!title && 2}>
      {title && <Typography fontWeight={600}>{title}</Typography>}

      <Stack spacing={3}>{children}</Stack>
    </Stack>
  );
};
