import {
  Formik,
  FormikErrors,
  Form as FormikForm,
  FormikHelpers,
  FormikProps,
  FormikValues,
} from 'formik';
import type { ReactNode } from 'react';

export type OnSubmitFormCallback<T = any, R = any> = {
  (values: T, formikHelpers: FormikHelpers<T>): R | Promise<R>;
};

export type FormProps<T extends FormikValues> = {
  // TODO this could extend from FormikConfig<Values> to make it more extendable
  initialValues?: T;
  onSubmitForm: OnSubmitFormCallback<T>;
  validationSchema?: any | (() => any);
  validate?: (values: T) => FormikErrors<T> | Promise<FormikErrors<T>>;
  children?: ReactNode | ((props: FormikProps<T>) => ReactNode);
  className?: string;
};

/**
 * Form Component
 */
export default function Form<T extends FormikValues>({
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
