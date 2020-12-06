import { atomFamily, selectorFamily } from 'recoil';
import { IPost } from '../../../interfaces';
import { postObjectHierarchicInitSelector } from '../postObjectHierarchicInitSelector';

const postIdFiledInitSelector = selectorFamily<number, number>({
  key: 'post-complex-origin/id/init',
  get: (id) => ({ get }) => {
    const post: IPost = get(postObjectHierarchicInitSelector(id));
    return post.id;
  },
});

export const postIdFiledAtom = atomFamily<number, number>({
  key: 'post-complex-origin/id',
  default: postIdFiledInitSelector,
});
