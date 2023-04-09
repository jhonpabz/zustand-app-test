import { Typography } from '@mui/material';

const TitleTextComponent = ({ children, sx }) => {
  return (
    <Typography variant="h5" fontWeight={700} sx={{ ...sx }}>
      {children}
    </Typography>
  );
};
export default TitleTextComponent;
