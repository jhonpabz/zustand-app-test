import { Typography } from '@mui/material';

const BodyTextComponent = ({ children, sx }) => {
  return (
    <Typography mt={1} sx={{ ...sx }}>
      {children}
    </Typography>
  );
};
export default BodyTextComponent;
