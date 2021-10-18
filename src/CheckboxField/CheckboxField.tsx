import { Checkbox, CheckboxProps, FormControl, FormControlLabel } from '@material-ui/core';
import { Field, FieldProps } from 'formik';
import { nanoid } from 'nanoid/non-secure';
import React, { ReactNode } from 'react';
import ErrorLabel from '../ErrorLabel';

export type CheckboxFieldProps = Omit<CheckboxProps, 'form' | 'checked' | 'defaultChecked'> & {
  label?: ReactNode;
};

export default function CheckboxField({
  label = '',
  name = nanoid(),
  className,
  color = 'primary',
  ...checkBoxProps
}: CheckboxFieldProps): JSX.Element {
  return (
    <Field type="checkbox" name={name}>
      {({ field, meta: { error, touched } }: FieldProps) => {
        const { value, checked = false } = field;
        const indeterminate = !Array.isArray(value) && value === null;
        const isErrorState = Boolean(error && touched);

        return (
          <FormControl error={isErrorState} className={className}>
            <FormControlLabel
              label={label}
              control={
                <Checkbox
                  indeterminate={indeterminate}
                  checked={checked}
                  {...checkBoxProps}
                  {...field}
                  color={color}
                />
              }
            />

            {isErrorState && <ErrorLabel error={error} />}
          </FormControl>
        );
      }}
    </Field>
  );
}
