import { RecoilValue } from 'recoil';
import { IObjectHierarchic } from '.';
import { useLoadableObjectHierarchic } from './useLoadableObjectHierarchic';

export const useLoadableObjectHierarchicFamily = <
  T extends object,
  TParam extends unknown
>(
  origin: (param: TParam) => RecoilValue<T>,
  param: TParam
): IObjectHierarchic<T> => useLoadableObjectHierarchic(origin(param));
