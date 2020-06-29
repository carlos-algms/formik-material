import Button from '@material-ui/core/Button';
import { useFormikContext } from 'formik';
import React, { memo } from 'react';
import type PropsBase from '../shared/PropsBase';

function SubmitButton({ children, className }: PropsBase) {
	const { isSubmitting } = useFormikContext();

	return (
		<div className={className}>
			<Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
				{children}
			</Button>
		</div>
	);
}

export default memo(SubmitButton);
