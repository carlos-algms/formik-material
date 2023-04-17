import TextField, { TextFieldProps } from '@mui/material/TextField';
import { useField } from 'formik';
import { nanoid } from 'nanoid/non-secure';
import { NumericFormat, NumericFormatProps } from 'react-number-format';
import ErrorLabel from '../ErrorLabel';

export type NumberFieldProps = Omit<
  NumericFormatProps<TextFieldProps>,
  'customInput' | 'error' | 'size' | 'color' | 'type' | 'value'
>;

export default function NumberField({
  name = nanoid(),
  className,
  fullWidth = true,
  onBlur = identity,
  onChange = identity,
  ...props
}: NumberFieldProps) {
  const [field, { error, touched }, { setValue }] = useField(name);

  const isErrorState = Boolean(error && touched);
  const { onValueChange = () => null } = props;

  const handleOnValueChange: NumberFieldProps['onValueChange'] = (values, sourceInfo) => {
    // Hacky solution because onChange is being called before the value is set here
    // causing the value to turn into a string
    setTimeout(() => {
      setValue(values.floatValue);
      onValueChange(values, sourceInfo);
    });
  };

  return (
    <div className={className}>
      <NumericFormat
        customInput={TextField}
        decimalSeparator=","
        thousandSeparator="."
        decimalScale={0}
        fixedDecimalScale
        allowNegative={false}
        {...field}
        {...props}
        type="tel"
        onValueChange={handleOnValueChange}
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
