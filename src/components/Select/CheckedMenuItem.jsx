import { MenuItem } from '@mui/material';
import { styled } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const CheckedMenuItem = styled((props) => {
  const { children, isSelected, isManualMenu = false, sx, ...rest } = props;

  const manualMenuItemSelectedStyle = isSelected &&
    isManualMenu && {
      backgroundColor: primary,
      color: light,
      borderTop: `1px solid ${textLabelColor}`,
      borderBottom: `1px solid ${textLabelColor}`,
      '&:first-of-type': {
        borderTop: 'none',
      },
      '&:last-of-type': {
        borderBottom: 'none',
      },
      '&:hover': {
        backgroundColor: isSelected && primary,
      },
    };

  return (
    <MenuItem {...rest} sx={{ ...manualMenuItemSelectedStyle, ...sx }}>
      {children}

      {isSelected && <CheckIcon fontSize="small" />}
    </MenuItem>
  );
})({
  justifyContent: 'space-between',
});

export default CheckedMenuItem;
