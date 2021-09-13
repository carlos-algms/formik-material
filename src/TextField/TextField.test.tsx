import { act, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Form from '../Form';
import SubmitButton from '../SubmitButton';
import { delay } from '../tests/helpers';
import TextField from './TextField';

test('should render a MUI field and error label', () => {
  const submitMock = jest.fn();
  const values = { firstName: 'John' };

  const { container } = render(
    <Form onSubmitForm={submitMock} initialValues={values} initialError>
      <TextField name="firstName" className="wrapper-class" />
    </Form>,
  );

  const wrapper = container.querySelector('.wrapper-class');

  expect(wrapper).toMatchSnapshot();
});

test('should render error label', async () => {
  const submitMock = jest.fn();
  const validateMock = jest.fn(() => ({
    firstName: 'Not valid',
  }));

  const values = { firstName: 'Jane' };

  const { container } = render(
    <Form validate={validateMock} onSubmitForm={submitMock} initialValues={values} initialError>
      <TextField name="firstName" className="wrapper-class" />
      <SubmitButton>Send</SubmitButton>
    </Form>,
  );

  const submitButton = screen.getByRole('button');

  await act(async () => {
    fireEvent.click(submitButton);
    await delay();
  });

  const wrapper = container.querySelector('.wrapper-class');

  expect(wrapper).toMatchSnapshot();
});
