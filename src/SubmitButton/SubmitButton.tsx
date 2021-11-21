import Button, { ButtonProps } from '@mui/material/Button';
import { useFormikContext } from 'formik';
import React, { memo } from 'react';
import type PropsBase from '../shared/PropsBase';

const SubmitButton = ({ children, className, ...restProps }: PropsBase & ButtonProps) => {
  const { isSubmitting, isValidating } = useFormikContext();

  return (
    <div className={className}>
      <Button
        {...restProps}
        variant="contained"
        color="primary"
        role="button"
        type="submit"
        disabled={isSubmitting && !isValidating}
      >
        {children}
      </Button>
    </div>
  );
};

export default memo(SubmitButton);
