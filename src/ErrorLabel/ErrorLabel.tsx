import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useClasses = makeStyles({
  error: {
    color: 'red',
  },
});

const ErrorLabel = ({ error }: { error: any }) => {
  const classes = useClasses();
  return (
    <Typography variant="body2" component="div" className={`error-label ${classes.error}`}>
      {error}
    </Typography>
  );
};

export default ErrorLabel;
