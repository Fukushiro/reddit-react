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

// usersubreddit/isInSubreddit/userid/{userid}/subredditid/{subredditid}
interface IUserIsInSubreddit extends IRetorno {
  obj?: {
    isInSubreddit: boolean;
  };
}
export async function userIsInSubreddit({
  subredditid,
  userid,
}: {
  userid: number;
  subredditid: number;
}): Promise<IUserIsInSubreddit> {
  try {
    const RESPONSE = await apiReddit.get(
      `usersubreddit/isInSubreddit/userid/${userid}/subredditid/${subredditid}`
    );
    console.log(RESPONSE.data);

    return success(RESPONSE, 'Coisa', { isInSubreddit: true });
  } catch (e) {
    return failNoReturn('erro userIsInSubreddit ' + e);
  }
}
