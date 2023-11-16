import MUITextField, { TextFieldProps } from '@mui/material/TextField';
import { Field, FieldProps } from 'formik';
import ErrorLabel from '../ErrorLabel';

const identity = (a: any) => a;

let idCount = 0;

const TextField = ({
  name = `TextField-${idCount++}`,
  className,
  fullWidth = true,
  onBlur = identity,
  onChange = identity,
  ...textFieldProps
}: TextFieldProps) => {
  return (
    <Field name={name}>
      {({ field, meta: { error, touched } }: FieldProps) => {
        const isErrorState = Boolean(error && touched);
        const { onBlur: formikOnBlur, onChange: formikOnChange, ...formikFieldProps } = field;

        return (
          <div className={className}>
            <MUITextField
              {...textFieldProps}
              {...formikFieldProps}
              onBlur={(e) => {
                formikOnBlur(e);
                onBlur(e);
              }}
              onChange={(e) => {
                formikOnChange(e);
                onChange(e);
              }}
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
