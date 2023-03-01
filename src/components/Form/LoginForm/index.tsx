import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import schema from './validation';
import { iLoginFormData } from './types';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';
import { UserContext } from '../../../contexts/UserContext';

const LoginForm = () => {
  const { userLogin } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormData>({
    resolver: yupResolver(schema),
  });

  const submit: SubmitHandler<iLoginFormData> = (formData) =>
    userLogin(formData);

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        {...register('email')}
        validateError={errors.email?.message}
        label='Email'
        type='text'
      />
      <Input
        {...register('password')}
        validateError={errors.password?.message}
        label='Senha'
        type='Password'
      />
      <StyledButton $buttonSize='default' $buttonStyle='green' type='submit'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
