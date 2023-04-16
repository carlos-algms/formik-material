import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import SubmitButton from '../SubmitButton';
import TextField from '../TextField';
import useFormSubmittedValues from '../useFormSubmittedValues';
import Form from './Form';

const initialValues = { name: 'initial name' };

const meta: Meta<typeof Form> = {
  title: 'Form Component',
  component: Form,
};

export default meta;

type Story = StoryObj<typeof Form>;

export const Basic: Story = {
  render: () => {
    const handle = useFormSubmittedValues(action('submitted'));
    return (
      <Form onSubmitForm={handle} initialValues={initialValues}>
        <TextField name="name" label="Name: " />
        <p>
          <SubmitButton>Submit</SubmitButton>
        </p>
      </Form>
    );
  },
};

export const ChildFn: Story = {
  name: 'Render children as function',
  render: () => {
    const handle = useFormSubmittedValues(action('submitted'));
    return (
      <Form onSubmitForm={handle} initialValues={initialValues}>
        {() => (
          <>
            <TextField name="name" label="Name: " />
            <p>
              <SubmitButton>Submit</SubmitButton>
            </p>
          </>
        )}
      </Form>
    );
  },
};
