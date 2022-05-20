import { failNoReturn, IRetorno, RetornoPadrao, success } from '.';
import { apiReddit } from './apiReddit';

interface IUserJoinSubreddit extends IRetorno {
  obj?: {};
}

export async function userJoinSubreddit({
  subredditid,
  userid,
}: {
  userid: number;
  subredditid: number;
}): Promise<IUserJoinSubreddit> {
  try {
    const RESPONSE = await apiReddit.post('usersubreddit/create', {
      userid: userid,
      subredditid: subredditid,
    });
    return success(RESPONSE, RESPONSE.data.message);
  } catch (e: any) {
    let returnMessage = '';
    if (e.response) {
      returnMessage += `${e.response.data.message}`;
    }
    return failNoReturn(returnMessage);
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

    return success(RESPONSE, 'Coisa', {
      isInSubreddit: RESPONSE.data.userIsInSubreddit,
    });
  } catch (e) {
    return failNoReturn('erro userIsInSubreddit ' + e);
  }
}

export async function userRemoveSubreddit({
  subredditid,
  userid,
}: {
  userid: number;
  subredditid: number;
}): Promise<IRetorno> {
  console.log(
    `usersubreddit/remove/userid/${userid}/subredditid/${subredditid}`
  );
  try {
    const RESPONSE = await apiReddit.delete(
      `usersubreddit/remove/userid/${userid}/subredditid/${subredditid}`
    );

    console.log(RESPONSE.data);

    return success(RESPONSE, RESPONSE.data.message, {
      isInSubreddit: RESPONSE.data.userIsInSubreddit,
    });
  } catch (e: any) {
    return failNoReturn(e.response.data.message);
  }
}
