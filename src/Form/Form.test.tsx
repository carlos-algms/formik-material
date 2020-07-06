import { act, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import SubmitButton from '../SubmitButton';
import { delay } from '../tests/helpers';
import Form from './Form';

test('should render a form', () => {
  const submitMock = jest.fn();
  const { container } = render(
    <Form className="my-form" onSubmitForm={submitMock} initialValues={{ name: 'foo' }} />,
  );

  expect(container).toMatchSnapshot();
});

test('should not call onSubmit on fail validation', async () => {
  const validateMock = jest.fn();
  const submitMock = jest.fn();

  render(
    <Form validate={validateMock} onSubmitForm={submitMock} initialValues={{ name: 'foo' }}>
      <SubmitButton>Send</SubmitButton>
    </Form>,
  );

  let submitButton = screen.getByRole('button');

  validateMock.mockReturnValue({
    name: 'not valid',
  });

  await act(() => {
    fireEvent.click(submitButton);
    return delay();
  });

  await delay(() => {
    expect(validateMock).toHaveBeenCalledTimes(1);
    expect(submitMock).not.toHaveBeenCalled();
  });

  validateMock.mockReturnValue({});
  await act(() => {
    fireEvent.click(submitButton);
    return delay();
  });

  await delay(() => {
    expect(validateMock).toHaveBeenCalledTimes(2);
    expect(submitMock).toHaveBeenCalled();
  });
});
