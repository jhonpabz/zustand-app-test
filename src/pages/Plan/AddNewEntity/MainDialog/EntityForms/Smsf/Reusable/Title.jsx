import { Stack, Typography, Divider } from '@mui/material';

export const Title = ({ children }) => {
  return (
    <Stack width="100%" mt={3} spacing={2}>
      <Typography variant="h6">{children}</Typography>
      <Divider />
    </Stack>
  );
};
