import { atomFamily, selectorFamily } from 'recoil';
import { IPost } from '../../../interfaces';
import { postObjectHierarchicInitSelector } from '../postObjectHierarchicInitSelector';

const postBodyFiledInitSelector = selectorFamily<string, number>({
  key: 'post-complex-origin/body/init',
  get: (id) => ({ get }) => {
    const post: IPost = get(postObjectHierarchicInitSelector(id));
    return post.body;
  },
});

export const postBodyFiledAtom = atomFamily<string, number>({
  key: 'post-complex-origin/body',
  default: postBodyFiledInitSelector,
});
