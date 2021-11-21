import type { NumberFormatProps } from 'react-number-format';
import FormattedField from '../FormattedField';

export type DateFieldProps = Omit<NumberFormatProps, 'format'> & {
  /**
   * @default '##/##/####'
   */
  format?: '##/##/####' | '##.##.####' | '####-##-##';
};

export default function DateField(props: DateFieldProps) {
  return <FormattedField type="tel" mask="_" format="##/##/####" {...props} />;
}
