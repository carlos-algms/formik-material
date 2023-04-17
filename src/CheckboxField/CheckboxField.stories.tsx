import Typography from '@mui/material/Typography';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import * as yup from 'yup';
import FormDemo from '../shared/FormDemo';
import CheckboxField from './CheckboxField';

const initialValues = {
  read: false,
  accept: true,
};

const meta: Meta<typeof CheckboxField> = {
  title: 'Checkbox Field',
  component: CheckboxField,
};

export default meta;

type Story = StoryObj<typeof CheckboxField>;

export const Basic: Story = {
  render: () => (
    <FormDemo onSubmit={action('submitted')} initialValues={initialValues}>
      <Typography variant="h5">Basic Example</Typography>
      <CheckboxField name="read" label="Read and accept our terms" />
      <CheckboxField name="accept" label="I accept receiving newsletter" color="secondary" />
    </FormDemo>
  ),
};

export const Validation: Story = {
  render: () => (
    <FormDemo
      onSubmit={action('submitted valid')}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <Typography variant="h5">Validation</Typography>
      <CheckboxField name="read" label="Read and accept our terms" />
      <CheckboxField name="accept" label="I accept receiving newsletter" color="secondary" />
    </FormDemo>
  ),
};

const validationSchema = yup.object().shape({
  read: yup.boolean().required().oneOf([true]),
  accept: yup.boolean().required(),
});
