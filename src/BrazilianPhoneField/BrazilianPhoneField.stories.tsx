import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import FormDemo from '../shared/FormDemo';
import BrazilianPhoneField from './BrazilianPhoneField';

const initialValues = { phone: '(19) 3727-2737' };

const meta: Meta<typeof BrazilianPhoneField> = {
  title: 'Brazilian Phone Field',
  component: BrazilianPhoneField,
};

export default meta;

type Story = StoryObj<typeof BrazilianPhoneField>;

export const Basic: Story = {
  render: () => (
    <FormDemo onSubmit={action('submitted')} initialValues={initialValues}>
      <BrazilianPhoneField name="phone" label="My Phone:" />
    </FormDemo>
  ),
};
