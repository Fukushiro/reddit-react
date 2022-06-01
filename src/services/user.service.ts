import { failNoReturn, IRetorno, success } from ".";
import { apiReddit } from "./apiReddit";

export async function createUserService({
  username,
  password,
}: {
  username: string;
  password: string;
}): Promise<IRetorno> {
  try {
    const RESPONSE = await apiReddit.post("/user/create", {
      username: username,
      password: password,
    });
    return success(RESPONSE);
  } catch (e) {
    return failNoReturn();
  }
}

export async function authUserService({
  username,
  password,
}: {
  username: string;
  password: string;
}): Promise<IRetorno> {
  try {
    const RESPONSE = await apiReddit.post("/user/auth", {
      username: username,
      password: password,
    });

    return success(RESPONSE);
  } catch (e) {
    return failNoReturn();
  }
}
interface IRetornoSubreddit {
  response: {
    data: {
      subreddits: Array<{ id: number; nome: string }>;
    } | null;
  } | null;
  funcionou: boolean;
}
export async function getUserSubredditService(
  id: number
): Promise<IRetornoSubreddit> {
  try {
    const RESPONSE = await apiReddit.post("/user/get/subreddit", {
      userid: id,
    });

    return success(RESPONSE);
  } catch (e) {
    return failNoReturn();
  }
}
