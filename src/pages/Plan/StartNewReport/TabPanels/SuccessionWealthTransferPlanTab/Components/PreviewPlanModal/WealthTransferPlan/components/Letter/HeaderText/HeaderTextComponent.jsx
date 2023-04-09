import { Typography } from '@mui/material';

const HeaderTextComponent = ({ children, sx, mt = 5 }) => {
  return (
    <Typography variant="h6" fontWeight={700} mt={mt} sx={{ ...sx }}>
      {children}
    </Typography>
  );
};
export default HeaderTextComponent;
