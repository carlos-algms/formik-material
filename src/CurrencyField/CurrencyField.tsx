import React from 'react';
import type { NumberFormatProps } from 'react-number-format';
import NumberField from '../NumberField';

const CurrencyField = (props: NumberFormatProps) => {
  return <NumberField prefix="R$ " decimalScale={2} fixedDecimalScale type="text" {...props} />;
};

export default CurrencyField;
