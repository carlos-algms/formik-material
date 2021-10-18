import React from 'react';
import type { NumberFormatProps } from 'react-number-format';
import FormattedField from '../FormattedField';

const CpfField = (props: Omit<NumberFormatProps, 'format'>) => {
  return <FormattedField type="tel" mask="_" {...props} format="###.###.###-##" />;
};

export default CpfField;
