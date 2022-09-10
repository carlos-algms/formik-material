import FormattedField from '../FormattedField';
import type { FormattedFieldProps } from '../FormattedField/FormattedField';

const CpfField = (props: Omit<FormattedFieldProps, 'format' | 'type'>) => {
  return <FormattedField mask="_" {...props} type="tel" format="###.###.###-##" />;
};

export default CpfField;
