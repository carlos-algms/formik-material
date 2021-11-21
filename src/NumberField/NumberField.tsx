import { useFormikContext } from 'formik';
import { nanoid } from 'nanoid/non-secure';
import { useCallback } from 'react';
import type { NumberFormatProps } from 'react-number-format';
import FormattedField from '../FormattedField';

const NumberField = (props: NumberFormatProps) => {
  const { name = nanoid() } = props;
  const { setFieldValue } = useFormikContext();

  const onValueChange = useCallback(
    ({ floatValue }: any) => {
      setFieldValue(name, floatValue);
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
      type="tel"
      {...props}
      onValueChange={onValueChange}
    />
  );
};

export default NumberField;
