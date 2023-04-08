import Typography from '@mui/material/Typography';

const FormLabelComponent = ({ children, sx }) => {
  return (
    <>
      <Typography
        sx={{
          fontSize: {
            lg: '16px',
            md: '16px',
            sm: '13px',
            sx: '13px',
          },
          fontWeight: '600',
          ...sx,
        }}
      >
        {children}
      </Typography>
    </>
  );
};

export default FormLabelComponent;
