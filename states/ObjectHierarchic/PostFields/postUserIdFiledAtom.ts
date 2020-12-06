import { atomFamily, selectorFamily } from 'recoil';
import { IPost } from '../../../interfaces';
import { postObjectHierarchicInitSelector } from '../postObjectHierarchicInitSelector';

const postUserIdFiledInitSelector = selectorFamily<number, number>({
  key: 'post-complex-origin/user-id/init',
  get: (id) => ({ get }) => {
    const post: IPost = get(postObjectHierarchicInitSelector(id));
    return post.userId;
  },
});

export const postUserIdFiledAtom = atomFamily<number, number>({
  key: 'post-complex-origin/user-id',
  default: postUserIdFiledInitSelector,
});
