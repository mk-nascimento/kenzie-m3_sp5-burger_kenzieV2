import { forwardRef } from 'react';
import { iInputProps } from './types';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

const Input = forwardRef<HTMLInputElement, iInputProps>(
  ({ label, type, validateError, ...rest }, ref) => (
    <fieldset>
      <StyledTextField label={label} type={type} ref={ref} {...rest} />
      {validateError ? (
        <StyledParagraph fontColor='red'>
          {validateError.message}
        </StyledParagraph>
      ) : null}
    </fieldset>
  )
);

export default Input;
