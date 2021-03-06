import { Formik, FormikErrors, FormikHelpers, FormikProps } from 'formik';
import React, { ReactNode } from 'react';
import type PropsBase from '../shared/PropsBase';

export type OnSubmitFormCallback<T = any, R = any> = {
  (values: T, formikActions: FormikHelpers<T>): R | Promise<R>;
};

export type FormProps<T> = PropsBase & {
  initialValues?: T;
  onSubmitForm: OnSubmitFormCallback<T>;
  validationSchema?: any | (() => any);
  validate?: (values: T) => FormikErrors<T> | Promise<FormikErrors<T>>;
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
  validate,
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
      validate={validate}
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
