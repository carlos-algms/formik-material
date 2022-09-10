import { useFormikContext } from 'formik';
import get from 'lodash.get';
import { nanoid } from 'nanoid/non-secure';
import { useCallback, useState } from 'react';
import type { NumberFormatValues, SourceInfo } from 'react-number-format';
import FormattedField, { type FormattedFieldProps } from '../FormattedField';

const NINTH_DIGIT = '9';
const NINTH_DIGIT_POSITION = 5;
const MOBILE = '(##) #####-####';
const LAND = '(##) ####-####';

const getFormat = (value = '') => (value[NINTH_DIGIT_POSITION] === NINTH_DIGIT ? MOBILE : LAND);

const BrazilianPhoneField = (props: Omit<FormattedFieldProps, 'format' | 'type' | 'mask'>) => {
  const { name = nanoid(), onValueChange = () => null } = props;
  const { values, setFieldValue } = useFormikContext();
  const value = get(values, name);

  // TODO check if it can be done with useRef instead
  const [format, setFormat] = useState(getFormat(value));

  const handleOnValueChange = useCallback(
    (numberFormatValues: NumberFormatValues, sourceInfo: SourceInfo) => {
      const { formattedValue } = numberFormatValues;
      const newFormat = getFormat(formattedValue);
      if (newFormat !== format) {
        setFormat(newFormat);
      }
      setFieldValue(name, formattedValue);
      onValueChange(numberFormatValues, sourceInfo);
    },
    [name, format, setFieldValue],
  );

  return (
    <FormattedField
      {...props}
      type="tel"
      mask=""
      onValueChange={handleOnValueChange}
      format={format}
      name={name}
    />
  );
};

export default BrazilianPhoneField;
