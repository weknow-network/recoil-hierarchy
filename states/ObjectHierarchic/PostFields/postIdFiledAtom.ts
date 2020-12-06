import { atomFamily, selectorFamily } from 'recoil';
import { IPost } from '../../../interfaces';
import { postObjectHierarchicInitSelector } from '../postObjectHierarchicInitSelector';

// just for getting the right portion out of the root init selector
const postIdFiledInitSelector = selectorFamily<number, number>({
  key: 'post-complex-origin/id/init',
  get: (id) => ({ get }) => {
    const post: IPost = get(postObjectHierarchicInitSelector(id));
    return post.id;
  },
});

// the actual atom
export const postIdFiledAtom = atomFamily<number, number>({
  key: 'post-complex-origin/id',
  default: postIdFiledInitSelector,
});
