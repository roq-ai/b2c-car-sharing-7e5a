import * as yup from 'yup';

export const operationValidationSchema = yup.object().shape({
  operation_type: yup.string().required(),
  operation_time: yup.date().required(),
  operation_status: yup.string().required(),
  notes: yup.string().nullable(),
  staff_id: yup.string().nullable().required(),
  car_id: yup.string().nullable().required(),
});
