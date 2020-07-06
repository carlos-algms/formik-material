import TextField from '@material-ui/core/TextField';
import { Field, FieldProps } from 'formik';
import { nanoid } from 'nanoid/non-secure';
import React from 'react';
import NumberFormat, { NumberFormatProps } from 'react-number-format';
import ErrorLabel from '../ErrorLabel';

const FormattedField = ({
  name = nanoid(),
  className,
  fullWidth = true,
  ...fieldProps
}: NumberFormatProps & { fullWidth?: boolean }) => {
  return (
    <Field name={name}>
      {({ field, meta: { error, touched } }: FieldProps) => {
        const isErrorState = Boolean(error && touched);

        return (
          <div className={className}>
            <NumberFormat
              customInput={TextField}
              {...fieldProps}
              {...field}
              fullWidth={fullWidth}
              error={isErrorState}
            />
            {isErrorState && <ErrorLabel error={error} />}
          </div>
        );
      }}
    </Field>
  );
};

export default FormattedField;
