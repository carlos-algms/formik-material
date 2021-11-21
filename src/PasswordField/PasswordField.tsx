import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { TextFieldProps } from '@mui/material/TextField';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
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
            <IconButton onClick={() => setIsVisible(!isVisible)} size="large">
              {isVisible ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
