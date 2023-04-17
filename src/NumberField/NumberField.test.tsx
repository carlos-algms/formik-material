import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormDemo from '../shared/FormDemo';
import NumberField from './NumberField';

test('should set the value as number', async () => {
  const handler = jest.fn();

  const { container } = render(
    <FormDemo initialValues={{ age: '0' }} onSubmit={handler}>
      <NumberField name="age" data-testid="age" />
    </FormDemo>,
  );

  const field = container.querySelector('input') as HTMLInputElement;
  expect(field).toBeInTheDocument();

  const user = userEvent.setup();
  await user.type(field, '30');
  await user.click(screen.getByRole('button'));

  await waitFor(() => {
    const [values] = handler.mock.lastCall;
    return expect(values).toStrictEqual({
      age: 30,
    });
  });
});
