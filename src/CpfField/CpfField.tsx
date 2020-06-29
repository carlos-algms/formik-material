import React from 'react';
import type { NumberFormatProps } from 'react-number-format';
import FormattedField from '../FormattedField';

const CpfField = (props: NumberFormatProps) => {
	return <FormattedField type="tel" mask="_" format="###.###.###-##" {...props} />;
};

export default CpfField;
