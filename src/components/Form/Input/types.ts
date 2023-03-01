import { TextFieldProps } from '@mui/material';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

export type iInputProps = {
  label: string;
  validateError?: FieldError | Merge<FieldError, FieldErrorsImpl>;
} & TextFieldProps;
