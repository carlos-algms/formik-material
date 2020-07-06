import { Formik, FormikHelpers, FormikProps } from 'formik';
import React, { ReactNode } from 'react';
import type PropsBase from '../shared/PropsBase';

export type OnSubmitFormCallback<T = any, R = any> = {
  (values: T, formikActions: FormikHelpers<T>): R;
  (values: T, formikActions: FormikHelpers<T>): Promise<R>;
};

export type FormProps<T> = PropsBase & {
  initialValues?: T;
  onSubmitForm: OnSubmitFormCallback<T>;
  validationSchema?: any | (() => any);
  children?: ReactNode;
};

/**
 * Form Component
 */
export default function Form({
  children,
  initialValues,
  onSubmitForm,
  validationSchema,
  className,
}: FormProps<any>) {
  if (!initialValues) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('No initial values provided to the <Form> Component');
    }
    return null;
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitForm}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }: FormikProps<any>) => {
        return (
          <form onSubmit={handleSubmit} noValidate autoComplete="off" className={className}>
            {children}
          </form>
        );
      }}
    </Formik>
  );
}
