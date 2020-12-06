import { selectorFamily, waitForAll } from 'recoil';
import { guardRecoilDefaultValue } from '../../guards';
import { IPost } from '../../interfaces';
import {
  postBodyFiledAtom,
  postIdFiledAtom,
  postTitleFiledAtom,
  postUserIdFiledAtom,
} from './PostFields';

export const postObjectHierarchicSelector = selectorFamily<IPost, number>({
  key: 'object-hierarchic-post',
  get: (id) => ({ get }) => {
    const post: IPost = get(
      waitForAll({
        id: postIdFiledAtom(id),
        userId: postUserIdFiledAtom(id),
        title: postTitleFiledAtom(id),
        body: postBodyFiledAtom(id),
      })
    );

    return post;
  },
  set: (id) => async ({ set /*get */, reset }, post) => {
    // let value: IPost;
    if (guardRecoilDefaultValue(post)) {
      // value = await postByIdProxy(id);
      // console.log(`@@ [${id}] DEFAULT: ${JSON.stringify(value)}`);
      reset(postIdFiledAtom(id));
      reset(postUserIdFiledAtom(id));
      reset(postTitleFiledAtom(id));
      reset(postBodyFiledAtom(id));
      return;
    }
    //  else {
    //   value = post;
    //   console.log(`@@ [${id}] VALUE: ${JSON.stringify(value)}`);
    // }

    set(postIdFiledAtom(id), post.id);
    set(postUserIdFiledAtom(id), post.userId);
    set(postTitleFiledAtom(id), post.title);
    set(postBodyFiledAtom(id), post.body);
  },
});
