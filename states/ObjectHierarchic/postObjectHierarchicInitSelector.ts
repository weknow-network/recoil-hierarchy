import { selectorFamily } from 'recoil';
import { IPost } from '../../interfaces';
import { postByIdProxy } from './postByIdProxy';

export const postObjectHierarchicInitSelector = selectorFamily<IPost, number>({
  key: 'object-hierarchic-post-init',
  get: (id) => async (/*{ get }*/) => {
    return await postByIdProxy(id);
  },
});
