import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useClasses = makeStyles({
  error: {
    color: 'red',
  },
});

const ErrorLabel = ({ error }: { error: any }) => {
  const classes = useClasses();
  return <div className={classes.error}>{error}</div>;
};

export default ErrorLabel;
