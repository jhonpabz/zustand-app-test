import { Stack } from '@mui/material';

import TitleTextComponent from '../components/Letter/TitleText/TitleTextComponent';
import BodyTextComponent from '../components/Letter/BodyText/BodyTextComponent';

export const Header = () => {
  return (
    <Stack>
      <TitleTextComponent
        sx={{
          textTransform: 'uppercase',
        }}
      >
        Your Wealth Transfer Plan
      </TitleTextComponent>

      <BodyTextComponent>
        You have instructed us that you would like your family wealth to be
        transferred in the following way:
      </BodyTextComponent>
    </Stack>
  );
};
