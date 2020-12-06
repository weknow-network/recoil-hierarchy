import { atomFamily, selectorFamily } from 'recoil';
import { IPost } from '../../../interfaces';
import { postObjectHierarchicInitSelector } from '../postObjectHierarchicInitSelector';

const postTitleFiledInitSelector = selectorFamily<string, number>({
  key: 'post-complex-origin/Title/init',
  get: (id) => ({ get }) => {
    const post: IPost = get(postObjectHierarchicInitSelector(id));
    return post.title;
  },
});
export const postTitleFiledAtom = atomFamily<string, number>({
  key: 'post-complex-origin/title',
  default: postTitleFiledInitSelector,
});
