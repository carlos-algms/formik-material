import Button, { ButtonProps } from '@mui/material/Button';
import { useFormikContext } from 'formik';
import { memo } from 'react';
import type PropsBase from '../shared/PropsBase';

type SubmitButtonProps = PropsBase & ButtonProps;

const SubmitButton = ({ children, className, disabled, ...restProps }: SubmitButtonProps) => {
  const { isSubmitting, isValidating } = useFormikContext();
  const isDisabled = disabled || (isSubmitting && !isValidating);

  return (
    <div className={className}>
      <Button
        {...restProps}
        variant="contained"
        color="primary"
        role="button"
        type="submit"
        disabled={isDisabled}
      >
        {children}
      </Button>
    </div>
  );
};

export default memo(SubmitButton);
