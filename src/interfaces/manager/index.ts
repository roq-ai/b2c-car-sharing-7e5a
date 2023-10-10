import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface ManagerInterface {
  id?: string;
  user_id: string;
  company_id: string;
  hire_date: any;
  position: string;
  salary: number;
  manager_status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {};
}

export interface ManagerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  company_id?: string;
  position?: string;
  manager_status?: string;
}
