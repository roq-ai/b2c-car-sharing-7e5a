import * as yup from 'yup';

export const managerValidationSchema = yup.object().shape({
  hire_date: yup.date().required(),
  position: yup.string().required(),
  salary: yup.number().integer().required(),
  manager_status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
