import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { iRegisterData } from './types';
import schema from './validation';
import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { UserContext } from '../../../contexts/UserContext';

const RegisterForm = () => {
  const { userRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterData>({
    resolver: yupResolver(schema),
  });

  const submit: SubmitHandler<iRegisterData> = (formData) => {
    // eslint-disable-next-line no-param-reassign
    delete formData['confirm-password'];
    userRegister(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        {...register('name')}
        validateError={errors.name}
        label='Nome'
        type='text'
      />
      <Input
        {...register('email')}
        validateError={errors.email}
        label='Email'
        type='text'
      />
      <Input
        {...register('password')}
        validateError={errors.password}
        label='Senha'
        type='text'
      />
      <Input
        {...register('confirm-password')}
        validateError={errors['confirm-password']}
        label='Confirme sua senha'
        type='text'
      />
      <StyledButton $buttonSize='default' $buttonStyle='gray' type='submit'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
