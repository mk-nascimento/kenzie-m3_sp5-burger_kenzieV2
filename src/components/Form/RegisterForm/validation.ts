import * as yup from 'yup';

const schema = yup
  .object({
    name: yup.string().required('Campo "Nome" obrigatório'),
    email: yup
      .string()
      .required('Campo "Email" obrigatório')
      .email('Insira um email válido'),
    'confirm-password': yup
      .string()
      .required('Confirme sua Senha')
      .oneOf([yup.ref('password')], 'Senhas não conferem'),
    password: yup
      .string()
      .required('Campo "Senha" obrigatório')
      .min(6, 'Senha deve ter no mínimo 6 caractéres'),
  })
  .required();

export default schema;
