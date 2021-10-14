import type { FormikHelpers } from 'formik';
import useFormSubmit from './useFormSubmit';

/**
 * Receives a function that will handle the form value passed as the first parameter.
 * Sets 'submitting' to false after await for the callback result;
 * @param callback Accepts sync and async functions
 */
function useFormSubmittedValues<T>(callback: (values: T, formikHelpers: FormikHelpers<T>) => any) {
  const handleSubmit = useFormSubmit<T>(
    async (values, formikHelpers) => {
      const { setSubmitting } = formikHelpers;
      const result = await callback(values, formikHelpers);
      setSubmitting(false);
      return result;
    },
    [callback],
  );

  return handleSubmit;
}

export default useFormSubmittedValues;
