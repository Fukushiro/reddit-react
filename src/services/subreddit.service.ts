import { failNoReturn, IRetorno, RetornoPadrao, success } from ".";
import { apiReddit } from "./apiReddit";

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
export interface IGetSubredditService extends RetornoPadrao {
  id: number;
  nome: string;
  about: string;
  title: string;
}
export async function callGetSubredditService({
  id,
}: {
  id: number;
}): Promise<IGetSubredditService> {
  const { response, funcionou } = await getSubredditService({ id: id });
  if (funcionou) {
    return {
      id: response.data.subreddit.id,
      nome: response.data.subreddit.nome,
      about: response.data.subreddit.about,
      title: response.data.subreddit.title,
    };
  }
  return {
    id: -1,
    nome: "",
    erro: true,
    message: `Erro ${response}`,
    about: "",
    title: "",
  };
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
// get subreddit by name

export async function getSubredditByNameService({
  name,
}: {
  name: string;
}): Promise<IRetorno> {
  try {
    const RESPONSE = await apiReddit.get(`subreddit/get/name/${name}`);
    return success(RESPONSE);
  } catch (e) {
    return failNoReturn();
  }
}

export interface IGetSubredditByName {
  id: number;
  nome: string;
  subscribes: number;
}

interface IGetSubredditByNameService extends RetornoPadrao {
  retorno?: {
    subreddits: Array<IGetSubredditByName>;
  };
}

export async function callGetSubredditByName({
  name,
}: {
  name: string;
}): Promise<IGetSubredditByNameService> {
  const { response, funcionou } = await getSubredditByNameService({
    name: name,
  });
  if (funcionou) {
    return {
      retorno: {
        subreddits: response.data.subreddit,
      },
      message: "Sucesso",
    };
  }
  return {
    erro: true,
    message: "Erro",
  };
}

export async function createSubredditService({
  about,
  nome,
  title,
}: {
  nome: string;
  title: string;
  about: string;
}): Promise<IRetorno> {
  try {
    const RESPONSE = await apiReddit.post(`subreddit/create`, {
      nome: nome,
      title: title,
      about: about,
    });

    console.log(RESPONSE.data);

    return success(RESPONSE, RESPONSE.data.message);
  } catch (e: any) {
    return failNoReturn(e.response.data.message);
  }
}
