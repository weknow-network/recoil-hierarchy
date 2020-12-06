import { RecoilValue, useRecoilValueLoadable } from 'recoil';
import { IObjectHierarchic } from '.';

/**
 * Abstract mutable component pattern
 * @param param0
 */
export const useLoadableObjectHierarchic = <T extends object>(
  originValue: RecoilValue<T>
): IObjectHierarchic<T> => {
  const loadable = useRecoilValueLoadable(originValue);

  const isLoading = loadable.state === 'loading';
  const error = loadable.state === 'hasError' ? loadable.contents : undefined;

  if (loadable.state !== 'hasValue') {
    return {
      isLoading,
      error,
    };
  }

  const data = loadable.contents;

  return data;
};
