import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Field, FieldProps } from 'formik';
import type { ReactElement } from 'react';
import ErrorLabel from '../ErrorLabel';

export type CheckboxFieldProps = Omit<CheckboxProps, 'form' | 'checked' | 'defaultChecked'> & {
  label?: string | ReactElement;
};

let idCount = 0;

export default function CheckboxField({
  label = '',
  name = `CheckboxField-${idCount++}`,
  className,
  color = 'primary',
  onBlur = identity,
  onChange = identity,
  ...checkBoxProps
}: CheckboxFieldProps): JSX.Element {
  return (
    <Field type="checkbox" name={name}>
      {({ field, meta: { error, touched } }: FieldProps) => {
        const { value, checked = false } = field;
        const indeterminate = !Array.isArray(value) && value === null;
        const isErrorState = Boolean(error && touched);
        const { onBlur: formikOnBlur, onChange: formikOnChange, ...formikFieldProps } = field;

        return (
          <FormControl error={isErrorState} className={className}>
            <FormControlLabel
              label={label}
              control={
                <Checkbox
                  indeterminate={indeterminate}
                  checked={checked}
                  {...checkBoxProps}
                  {...formikFieldProps}
                  onBlur={(e) => {
                    formikOnBlur(e);
                    onBlur(e);
                  }}
                  onChange={(e, newValue) => {
                    formikOnChange(e);
                    onChange(e, newValue);
                  }}
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

function identity(v: any) {
  return v;
}
