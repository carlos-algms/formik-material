import { CssBaseline } from '@mui/material';

const withMui = (Story) => (
  <>
    <CssBaseline />
    <Story />
  </>
);

export const decorators = [withMui];
export const tags = ['autodocs'];
