import { failNoReturn, IRetorno, success } from '.';
import { apiReddit } from './apiReddit';

export async function userJoinSubreddit({
  subredditid,
  userid,
}: {
  userid: number;
  subredditid: number;
}): Promise<IRetorno> {
  try {
    const RESPONSE = await apiReddit.post('/usersubreddit/create', {
      userid: userid,
      subredditid: subredditid,
    });
    return success(RESPONSE);
  } catch (e) {
    return failNoReturn();
  }
}
