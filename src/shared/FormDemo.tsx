import React, { ReactNode } from 'react';
import Form from '../Form';
import SubmitButton from '../SubmitButton';
import useFormSubmittedValues from '../useFormSubmittedValues';

type Props = {
  children?: ReactNode;
  onSubmit: any;
  initialValues: any;
};

const FormDemo = ({ children, onSubmit, initialValues }: Props) => {
  const handle = useFormSubmittedValues(onSubmit);

  return (
    <Form onSubmitForm={handle} initialValues={initialValues}>
      {children}
      <p />
      <SubmitButton>Submit</SubmitButton>
    </Form>
  );
};

export default FormDemo;
