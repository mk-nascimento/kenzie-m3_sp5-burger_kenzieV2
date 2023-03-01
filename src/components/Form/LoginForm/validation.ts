import * as yup from 'yup';

const schema = yup
  .object({
    email: yup
      .string()
      .required('Campo "Email" obrigatório')
      .email('Insira um email válido'),
    password: yup.string().required('Campo "Senha" obrigatório'),
  })
  .required();

export default schema;
