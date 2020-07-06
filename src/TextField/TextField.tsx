import MUITextField, { TextFieldProps } from '@material-ui/core/TextField';
import { Field, FieldProps } from 'formik';
import { nanoid } from 'nanoid/non-secure';
import React from 'react';
import ErrorLabel from '../ErrorLabel';

const TextField = ({
  name = nanoid(),
  className,
  fullWidth = true,
  ...textFieldProps
}: TextFieldProps) => {
  return (
    <Field name={name}>
      {({ field, meta: { error, touched } }: FieldProps) => {
        const isErrorState = Boolean(error && touched);

        return (
          <div className={className}>
            <MUITextField
              {...textFieldProps}
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

export default TextField;
