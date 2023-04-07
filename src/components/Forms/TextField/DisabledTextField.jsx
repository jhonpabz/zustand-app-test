import { Box, TextField } from '@mui/material';

const DisabledTextField = ({ value = 'Text Here', sx, label }) => {
  return (
    <Box sx={{ pt: 2 }}>
      <TextField
        id="outlined-basic"
        value={value}
        label={label}
        variant="outlined"
        disabled
        fullWidth
        sx={{ ...sx }}
      />
    </Box>
  );
};

export default DisabledTextField;
