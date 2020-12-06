import { IObjectHierarchic } from '.';
import { IObjectHierarchicLoad } from './IObjectHierarchicLoad';

export const guardObjectHierarchicLoad = <T extends unknown>(
  candidate: IObjectHierarchic<T>
): candidate is IObjectHierarchicLoad =>
  (candidate as any)?.isLoading || (candidate as any)?.error;
