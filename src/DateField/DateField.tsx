import FormattedField, { FormattedFieldProps } from '../FormattedField';

export type DateFieldProps = Omit<FormattedFieldProps, 'format' | 'type'> & {
  /**
   * @default '##/##/####'
   */
  format?: '##/##/####' | '##.##.####' | '####-##-##';
};

export default function DateField(props: DateFieldProps) {
  return <FormattedField mask="_" format="##/##/####" {...props} type="tel" />;
}
