import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextFieldProps } from '@material-ui/core/TextField';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import React, { useState } from 'react';
import TextField from '../TextField';

export default function PasswordField(props: TextFieldProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { InputProps = {} } = props;

  return (
    <TextField
      {...props}
      type={isVisible ? 'text' : 'password'}
      InputProps={{
        ...InputProps,
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setIsVisible(!isVisible)}>
              {isVisible ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
