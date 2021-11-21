import Typography from '@mui/material/Typography';
import React from 'react';

const ErrorLabel = ({ error }: { error: any }) => {
  return (
    <Typography variant="body2" component="div" className={`error-label`} color="red">
      {error}
    </Typography>
  );
};

export default ErrorLabel;
