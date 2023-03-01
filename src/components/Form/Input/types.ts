import { TextFieldProps } from '@mui/material';

export type iInputProps = {
  label: string;
  validateError?: string;
} & TextFieldProps;
