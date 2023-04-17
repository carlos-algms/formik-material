import TextField, { TextFieldProps } from '@mui/material/TextField';
import { useField } from 'formik';
import { nanoid } from 'nanoid/non-secure';
import { PatternFormat, PatternFormatProps } from 'react-number-format';
import ErrorLabel from '../ErrorLabel';

export type FormattedFieldProps = Omit<
  PatternFormatProps<TextFieldProps>,
  'customInput' | 'error' | 'size' | 'color' | 'value'
>;

export default function FormattedField({
  name = nanoid(),
  className,
  fullWidth = true,
  onBlur = identity,
  onChange = identity,
  ...props
}: FormattedFieldProps) {
  const [field, { error, touched }] = useField(name);
  const isErrorState = Boolean(error && touched);

  return (
    <div className={className}>
      <PatternFormat
        customInput={TextField}
        {...field}
        {...props}
        fullWidth={fullWidth}
        error={isErrorState}
        onBlur={(e: any) => {
          field.onBlur(e);
          onBlur(e);
        }}
        onChange={(e: any) => {
          field.onChange(e);
          onChange(e);
        }}
      />
      {isErrorState && <ErrorLabel error={error} />}
    </div>
  );
}

function identity(v: any) {
  return v;
}
