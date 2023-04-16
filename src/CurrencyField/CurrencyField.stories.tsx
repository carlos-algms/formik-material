import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import FormDemo from '../shared/FormDemo';
import CurrencyField from './CurrencyField';

const initialValues = { value: 12.45 };

const meta: Meta<typeof CurrencyField> = {
  title: 'Currency Field',
  component: CurrencyField,
};

export default meta;

type Story = StoryObj<{}>;

export const Basic: Story = {
  render: () => (
    <FormDemo onSubmit={action('submitted')} initialValues={initialValues}>
      <CurrencyField name="value" label="My Value:" />
    </FormDemo>
  ),
};
