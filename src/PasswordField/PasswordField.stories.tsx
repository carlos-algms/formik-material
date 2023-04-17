import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import FormDemo from '../shared/FormDemo';
import PasswordField from './PasswordField';

const initialValues = { password: 'abc123%' };

const meta: Meta<typeof PasswordField> = {
  title: 'Password Field',
  component: PasswordField,
};

export default meta;

type Story = StoryObj<typeof PasswordField>;

export const Basic: Story = {
  render: () => (
    <FormDemo onSubmit={action('submitted')} initialValues={initialValues}>
      <PasswordField name="password" label="Password:" />
    </FormDemo>
  ),
};
