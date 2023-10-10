import { UserInterface } from 'interfaces/user';
import { CarInterface } from 'interfaces/car';
import { GetQueryInterface } from 'interfaces';

export interface OperationInterface {
  id?: string;
  staff_id: string;
  car_id: string;
  operation_type: string;
  operation_time: any;
  operation_status: string;
  notes?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  car?: CarInterface;
  _count?: {};
}

export interface OperationGetQueryInterface extends GetQueryInterface {
  id?: string;
  staff_id?: string;
  car_id?: string;
  operation_type?: string;
  operation_status?: string;
  notes?: string;
}
