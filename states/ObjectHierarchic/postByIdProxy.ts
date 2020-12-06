import { IPost } from '../../interfaces';

/**
 * REST call
 * @param id
 */
export const postByIdProxy = async (id: number): Promise<IPost> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  // console.log(JSON.stringify(post));
  return post;
};
