import { Form as FormikForm, Formik, FormikErrors, FormikHelpers, FormikProps } from 'formik';
import React from 'react';
import type PropsBase from '../shared/PropsBase';

export type OnSubmitFormCallback<T = any, R = any> = {
  (values: T, formikHelpers: FormikHelpers<T>): R | Promise<R>;
};

export type FormProps<T> = PropsBase<FormikProps<T>> & {
  initialValues?: T;
  onSubmitForm: OnSubmitFormCallback<T>;
  validationSchema?: any | (() => any);
  validate?: (values: T) => FormikErrors<T> | Promise<FormikErrors<T>>;
};

/**
 * Form Component
 */
export default function Form<T>({
  children,
  initialValues,
  onSubmitForm,
  validationSchema,
  validate,
  className,
}: FormProps<T>) {
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
      {(formikProps) => {
        return (
          <FormikForm noValidate autoComplete="off" className={className}>
            {typeof children === 'function' ? children(formikProps) : children}
          </FormikForm>
        );
      }}
    </Formik>
  );
}
