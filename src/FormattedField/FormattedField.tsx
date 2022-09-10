import TextField, { TextFieldProps } from '@mui/material/TextField';
import { Field, FieldProps } from 'formik';
import { nanoid } from 'nanoid/non-secure';
import NumberFormat, { NumberFormatProps } from 'react-number-format';
import ErrorLabel from '../ErrorLabel';

export type FormattedFieldProps = Omit<
  NumberFormatProps<TextFieldProps>,
  'customInput' | 'error' | 'size' | 'color'
>;

const FormattedField = ({
  name = nanoid(),
  className,
  fullWidth = true,
  onBlur = identity,
  onChange = identity,
  ...fieldProps
}: FormattedFieldProps) => {
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
              onBlur={(e: any) => {
                formikOnBlur(e);
                onBlur(e);
              }}
              onChange={(e: any) => {
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
