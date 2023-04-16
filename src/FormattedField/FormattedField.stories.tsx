import Typography from '@mui/material/Typography';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import FormDemo from '../shared/FormDemo';
import FormattedField from './FormattedField';

const initialValues = { age: 1234 };

const meta: Meta<typeof FormattedField> = {
  title: 'Formatted Field',
  component: FormattedField,
};

export default meta;

type Story = StoryObj<typeof FormattedField>;

export const Basic: Story = {
  render: () => (
    <FormDemo onSubmit={action('submitted')} initialValues={initialValues}>
      <Typography component="p">
        Encapsulates <code>react-number-format.</code>
      </Typography>
      <Typography component="p" mb={5}>
        It accepts all the props from{' '}
        <a
          href="https://github.com/s-yadav/react-number-format#props"
          target="_blank"
          rel="nofollow noreferrer noopener"
        >
          react-number-format
        </a>
      </Typography>
      <FormattedField name="age" label="My Value:" />
    </FormDemo>
  ),
};
