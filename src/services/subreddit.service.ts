import { failNoReturn, IRetorno, success } from '.';
import { apiReddit } from './apiReddit';
//get subreddit by id
export async function getSubredditService({
  id,
}: {
  id: number;
}): Promise<IRetorno> {
  try {
    const RESPONSE = await apiReddit.get(`/subreddit/get/${id}`);
    return success(RESPONSE);
  } catch (e) {
    return failNoReturn();
  }
}
export interface IGetSubredditService {
  id: number;
  nome: string;
}
export async function callGetSubredditService({
  id,
}: {
  id: number;
}): Promise<IGetSubredditService | null> {
  const { response, funcionou } = await getSubredditService({ id: id });
  if (funcionou) {
    return {
      id: response.data.subreddit.id,
      nome: response.data.subreddit.nome,
    };
  }
  return null;
}

//get posts

export async function getSubredditPostsService({
  id,
}: {
  id: number;
}): Promise<IRetorno> {
  try {
    const RESPONSE = await apiReddit.get(`/post/get/subreddit/${id}`);
    return success(RESPONSE);
  } catch (e) {
    return failNoReturn();
  }
}
export interface IGetSubredditPost {
  id: number;
  title: string;
  text: string | null;
}
export interface IGetSubredditPostsService {
  posts: Array<IGetSubredditPost>;
}

export async function callGetSubredditPostsService({
  id,
}: {
  id: number;
}): Promise<IGetSubredditPostsService | null> {
  const { response, funcionou } = await getSubredditPostsService({ id: id });
  if (funcionou) {
    return {
      posts: response.data.posts,
    };
  }
  return null;
}
