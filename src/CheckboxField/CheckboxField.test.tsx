import { act, fireEvent, render } from '@testing-library/react';
import React from 'react';
import Form from '../Form';
import SubmitButton from '../SubmitButton';
import { delay } from '../tests/helpers';
import CheckboxField from './CheckboxField';

test('should render a MUI Checkbox and error label', async () => {
  const submitMock = jest.fn();
  const values = { testField: false };
  const validateMock = jest.fn(() => ({
    testField: 'Not valid',
  }));

  const { container, getByRole } = render(
    <Form onSubmitForm={submitMock} initialValues={values} validate={validateMock}>
      <CheckboxField name="testField" label="Test Checkbox" className="checkbox-test-class" />
      <SubmitButton>Send</SubmitButton>
    </Form>,
  );

  const submitButton = getByRole('button');

  await act(async () => {
    fireEvent.click(submitButton);
    await delay();
  });

  const wrapper = container.querySelector('.checkbox-test-class');
  expect(wrapper).toMatchSnapshot();
});
