import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import FormDemo from '../shared/FormDemo';
import DateField from './DateField';

const initialValues = { value: '12/11/2010' };

const meta: Meta<typeof DateField> = {
  title: 'Date Field',
  component: DateField,
};

export default meta;

type Story = StoryObj<{}>;

export const Basic: Story = {
  render: () => (
    <FormDemo onSubmit={action('submitted')} initialValues={initialValues}>
      <DateField name="value" label="My Value:" />
    </FormDemo>
  ),
};
