import { Box, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

export const ListItem = ({ sx, children }) => {
  return (
    <Box
      component="li"
      display="flex"
      gap={3}
      ml={2}
      sx={{ ...sx, listStyle: 'none' }}
    >
      <CircleIcon
        sx={{
          fontSize: 8,
          mt: 1,
        }}
      />
      <Typography>{children}</Typography>
    </Box>
  );
};
