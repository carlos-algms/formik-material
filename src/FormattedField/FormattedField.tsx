import TextField from '@mui/material/TextField';
import { Field, FieldProps } from 'formik';
import { nanoid } from 'nanoid/non-secure';
import React from 'react';
import NumberFormat, { NumberFormatProps } from 'react-number-format';
import ErrorLabel from '../ErrorLabel';

type Props = NumberFormatProps & { fullWidth?: boolean };

const FormattedField = ({
  name = nanoid(),
  className,
  fullWidth = true,
  onBlur = identity,
  onChange = identity,
  ...fieldProps
}: Props) => {
  return (
    <Field name={name}>
      {({ field, meta: { error, touched } }: FieldProps) => {
        const isErrorState = Boolean(error && touched);
        const { onBlur: formikOnBlur, onChange: formikOnChange, ...formikFieldProps } = field;

        return (
          <div className={className}>
            <NumberFormat
              customInput={TextField}
              {...fieldProps}
              {...formikFieldProps}
              fullWidth={fullWidth}
              error={isErrorState}
              onBlur={(e) => {
                formikOnBlur(e);
                onBlur(e);
              }}
              onChange={(e) => {
                formikOnChange(e);
                onChange(e);
              }}
            />
            {isErrorState && <ErrorLabel error={error} />}
          </div>
        );
      }}
    </Field>
  );
};

export default FormattedField;

function identity(v: any) {
  return v;
}
