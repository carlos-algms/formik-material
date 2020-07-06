import { act, renderHook } from '@testing-library/react-hooks';
import useFormSubmittedValues from './useFormSubmittedValues';

test('should call with form data and set "submitting" to false', async () => {
  const handleSubmitMock = jest.fn();
  const setSubmittingMock = jest.fn();
  const values = {};

  const { result } = renderHook(() => useFormSubmittedValues(handleSubmitMock));

  await act(() => result.current(values, { setSubmitting: setSubmittingMock } as any));

  expect(handleSubmitMock).toHaveBeenCalledWith(values);
  expect(handleSubmitMock).toHaveBeenCalledTimes(1);

  expect(setSubmittingMock).toHaveBeenCalledWith(false);
  expect(setSubmittingMock).toHaveBeenCalledTimes(1);
});
