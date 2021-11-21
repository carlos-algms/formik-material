import type { ReactNode } from 'react';
import Form, { FormProps } from '../Form';
import SubmitButton from '../SubmitButton';
import useFormSubmittedValues from '../useFormSubmittedValues';

type Props = Pick<FormProps<object>, 'initialValues' | 'validationSchema'> & {
  children?: ReactNode;
  onSubmit: any;
};

const FormDemo = ({ children, onSubmit, initialValues, validationSchema }: Props) => {
  const handle = useFormSubmittedValues(onSubmit);

  return (
    <Form onSubmitForm={handle} initialValues={initialValues} validationSchema={validationSchema}>
      {children}
      <p />
      <SubmitButton>Submit</SubmitButton>
    </Form>
  );
};

export default FormDemo;
