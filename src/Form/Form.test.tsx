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

test('should render children when a function is passed', () => {
  const submitMock = jest.fn();
  const initialValues = { name: 'foo' };
  let childrenProps: any;

  render(
    <Form onSubmitForm={submitMock} initialValues={initialValues}>
      {(props) => {
        childrenProps = props;
        return <SubmitButton>Send</SubmitButton>;
      }}
    </Form>,
  );

  const submitButton = screen.getByRole('button');
  expect(submitButton).toBeInTheDocument();

  expect(childrenProps.values).toEqual(initialValues);
  expect(childrenProps.isValid).toBeTruthy();
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

  await act(async () => {
    fireEvent.click(submitButton);
    await delay();
  });

  await delay(() => {
    expect(validateMock).toHaveBeenCalledTimes(1);
    expect(submitMock).not.toHaveBeenCalled();
  });

  validateMock.mockReturnValue({});
  await act(async () => {
    fireEvent.click(submitButton);
    await delay();
  });

  await delay(() => {
    expect(validateMock).toHaveBeenCalledTimes(2);
    expect(submitMock).toHaveBeenCalled();
  });
});
