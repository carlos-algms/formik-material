import type { NumberFormatProps } from 'react-number-format';
import NumberField from '../NumberField';

const CurrencyField = (props: NumberFormatProps) => {
  return <NumberField prefix="R$ " decimalScale={2} fixedDecimalScale {...props} />;
};

export default CurrencyField;
