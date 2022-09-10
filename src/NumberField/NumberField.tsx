import { useFormikContext } from 'formik';
import { nanoid } from 'nanoid/non-secure';
import { useCallback } from 'react';
import FormattedField, { FormattedFieldProps } from '../FormattedField';

export type NumberFieldProps = Omit<FormattedFieldProps, 'type'>;

const NumberField = (props: NumberFieldProps) => {
  const { name = nanoid(), onValueChange = () => null } = props;
  const { setFieldValue } = useFormikContext();

  const handleOnValueChange = useCallback(
    (values, sourceInfo) => {
      setFieldValue(name, values.floatValue);
      onValueChange(values, sourceInfo);
    },
    [name, setFieldValue],
  );

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
};

export default NumberField;
