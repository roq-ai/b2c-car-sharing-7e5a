import queryString from 'query-string';
import { ManagerInterface, ManagerGetQueryInterface } from 'interfaces/manager';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getManagers = async (query?: ManagerGetQueryInterface): Promise<PaginatedInterface<ManagerInterface>> => {
  return fetcher('/api/managers', {}, query);
};

export const createManager = async (manager: ManagerInterface) => {
  return fetcher('/api/managers', { method: 'POST', body: JSON.stringify(manager) });
};

export const updateManagerById = async (id: string, manager: ManagerInterface) => {
  return fetcher(`/api/managers/${id}`, { method: 'PUT', body: JSON.stringify(manager) });
};

export const getManagerById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/managers/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteManagerById = async (id: string) => {
  return fetcher(`/api/managers/${id}`, { method: 'DELETE' });
};
