import { Box } from '@mui/material';

const PageWrapper = ({
  children,
  withHeader = true,
  footerFixed = false,
  sx = {},
}) => {
  const padding = withHeader ? '0 24px 24px 24px' : '24px';
  const maxHeight = footerFixed ? 'calc(100vh - 64px - 42px)' : 'unset';
  const overflow = footerFixed ? 'auto' : 'unset';

  return (
    <Box
      sx={{
        width: '100%',
        padding,
        maxHeight,
        overflow,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default PageWrapper;
