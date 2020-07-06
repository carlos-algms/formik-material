import { useFormikContext } from 'formik';
import get from 'lodash.get';
import { nanoid } from 'nanoid/non-secure';
import React, { useCallback, useState } from 'react';
import type { NumberFormatProps, NumberFormatValues } from 'react-number-format';
import FormattedField from '../FormattedField';

const NINTH_DIGIT = '9';
const NINTH_DIGIT_POSITION = 5;
const MOBILE = '(##) #####-####';
const LAND = '(##) ####-####';

const getFormat = (value = '') => (value[NINTH_DIGIT_POSITION] === NINTH_DIGIT ? MOBILE : LAND);

const BrazilianPhoneField = (props: NumberFormatProps) => {
  const { name = nanoid() } = props;
  const { values, setFieldValue } = useFormikContext();
  const value = get(values, name);

  // TODO check if it can be done with useRef instead
  const [format, setFormat] = useState(getFormat(value));

  const onValueChange = useCallback(
    ({ formattedValue }: NumberFormatValues) => {
      const newFormat = getFormat(formattedValue);
      if (newFormat !== format) {
        setFormat(newFormat);
      }
      setFieldValue(name, formattedValue);
    },
    [name, format, setFieldValue],
  );

  return (
    <FormattedField
      type="tel"
      mask=""
      onValueChange={onValueChange}
      format={format}
      {...props}
      name={name}
    />
  );
};

export default BrazilianPhoneField;
