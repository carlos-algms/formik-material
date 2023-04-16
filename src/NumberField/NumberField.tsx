import { useFormikContext } from 'formik';
import { nanoid } from 'nanoid/non-secure';
import FormattedField, { FormattedFieldProps } from '../FormattedField';

export type NumberFieldProps = Omit<FormattedFieldProps, 'type'>;

export default function NumberField(props: NumberFieldProps) {
  const { name = nanoid(), onValueChange = () => null } = props;
  const { setFieldValue } = useFormikContext();

  const handleOnValueChange: FormattedFieldProps['onValueChange'] = (values, sourceInfo) => {
    setFieldValue(name, values.floatValue);
    onValueChange(values, sourceInfo);
  };

  return (
    <FormattedField
      decimalSeparator=","
      thousandSeparator="."
      decimalScale={0}
      fixedDecimalScale
      allowNegative={false}
      {...props}
      type="tel"
      onValueChange={handleOnValueChange}
    />
  );
}
