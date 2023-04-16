import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import FormDemo from '../shared/FormDemo';
import NumberField from './NumberField';

const initialValues = { age: 1234 };

const meta: Meta<typeof NumberField> = {
  title: 'Number field',
  component: NumberField,
};

export default meta;

type Story = StoryObj<typeof NumberField>;

export const Basic: Story = {
  render: () => (
    <FormDemo onSubmit={action('submitted')} initialValues={initialValues}>
      <NumberField name="age" label="My Value:" />
    </FormDemo>
  ),
};
