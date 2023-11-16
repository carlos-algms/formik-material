import { act, renderHook } from '@testing-library/react';
import useFormSubmittedValues from './useFormSubmittedValues';

test('should call with form data and set "submitting" to false', async () => {
  const handleSubmitMock = jest.fn();
  const setSubmittingMock = jest.fn();
  const values = {};

  const { result } = renderHook(() => useFormSubmittedValues(handleSubmitMock));

  const helpers = { setSubmitting: setSubmittingMock } as any;

  await act(() => result.current(values, helpers));

  expect(handleSubmitMock).toHaveBeenCalledWith(values, helpers);
  expect(handleSubmitMock).toHaveBeenCalledTimes(1);

  expect(setSubmittingMock).toHaveBeenCalledWith(false);
  expect(setSubmittingMock).toHaveBeenCalledTimes(1);
});
