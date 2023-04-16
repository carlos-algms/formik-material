import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import FormDemo from '../shared/FormDemo';
import CpfField from './CpfField';

const initialValues = { cpf: '123.456.789.00' };

const meta: Meta<typeof CpfField> = {
  title: 'CPF Field',
  component: CpfField,
};

export default meta;

type Story = StoryObj<typeof CpfField>;

export const Basic: Story = {
  render: () => (
    <FormDemo onSubmit={action('submitted')} initialValues={initialValues}>
      <CpfField name="cpf" label="My CPF:" />
    </FormDemo>
  ),
};
