import NumberField from '../NumberField';
import type { NumberFieldProps } from '../NumberField/NumberField';

const CurrencyField = (props: NumberFieldProps) => {
  return <NumberField prefix="R$ " decimalScale={2} fixedDecimalScale {...props} />;
};

export default CurrencyField;
