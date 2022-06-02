import { failNoReturn, IRetorno, success } from ".";
import { apiReddit } from "./apiReddit";
import { IUser } from "./user.service";

//get sum of upvotes
export async function getUserUpvotePostUpvotesService({
  id,
}: {
  id: number;
}): Promise<IRetorno> {
  try {
    const RESPONSE = await apiReddit.get(
      `/userupvotepost/get/sum/upvote/post/${id}`
    );
    return success(RESPONSE);
  } catch (e) {
    return failNoReturn();
  }
}

export interface IUserUpvotePost {
  upvotes: number;
}

export async function callGetUserUpvotePostUpvotesService({
  id,
}: {
  id: number;
}): Promise<IUserUpvotePost | null> {
  const { response, funcionou } = await getUserUpvotePostUpvotesService({
    id: id,
  });
  if (funcionou) {
    return {
      upvotes: response.data.userUpvotePost[0].upvotes,
    };
  }
  return null;
}

// get avaliation
export async function getUserUpvotePostAvaliationService({
  userid,
  postid,
}: {
  userid: number;
  postid: number;
}) {
  try {
    const RESPONSE = await apiReddit.get(
      `/userupvotepost/get/avaliation/user/${userid}/post/${postid}`
    );
    return success(RESPONSE);
  } catch (e) {
    return failNoReturn();
  }
}

export interface IUserUpvotePostAvaliation {
  userid: number;
  postid: number;
  upvote: number;
}

export async function callGetUserUpvotePostAvaliationService({
  userid,
  postid,
}: {
  userid: number;
  postid: number;
}): Promise<IUserUpvotePostAvaliation | null> {
  const { response, funcionou } = await getUserUpvotePostAvaliationService({
    userid: userid,
    postid: postid,
  });
  if (funcionou) {
    return {
      upvote: response.data.userUpvotePost.upvote,
      postid: response.data.userUpvotePost.postid,
      userid: response.data.userUpvotePost.userid,
    };
  }
  return null;
}

//avaliate

export async function avaliateUserUpdatePostService({
  userid,
  postid,
  upvote,
}: {
  userid: number;
  postid: number;
  upvote: number;
}): Promise<IRetorno> {
  try {
    const RESPONSE = await apiReddit.put(`userupvotepost/avaliate`, {
      userid: userid,
      postid: postid,
      upvote: upvote,
    });
    return success(RESPONSE);
  } catch (e) {
    return failNoReturn();
  }
}

export async function callAvaliateUserUpdatePostService({
  userid,
  postid,
  upvote,
}: {
  userid: number;
  postid: number;
  upvote: number;
}): Promise<boolean> {
  const { response, funcionou } = await avaliateUserUpdatePostService({
    userid: userid,
    postid: postid,
    upvote: upvote,
  });
  if (funcionou) {
    return true;
  }
  return false;
}

//create post
export async function createPostService({
  subredditid,
  title,
  text,
  userid,
}: {
  subredditid: number;
  title: string;
  text?: string | null;
  userid: number;
}): Promise<IRetorno> {
  try {
    const RESPONSE = await apiReddit.post(`post/create`, {
      subredditid: subredditid,
      title: title,
      text: !!text ? text : null,
      userid: userid,
    });
    return success(RESPONSE);
  } catch (e) {
    return failNoReturn();
  }
}

export async function callCreatePostService({
  subredditid,
  title,
  text,
  userid,
}: {
  subredditid: number;
  title: string;
  text?: string;
  userid: number;
}): Promise<boolean> {
  const { response, funcionou } = await createPostService({
    subredditid: subredditid,
    title: title,
    text: !!text ? text : null,
    userid: userid,
  });
  if (funcionou) {
    return true;
  }
  return false;
}
interface IPost {
  id: number;
  title: string;
  user: IUser;
}

interface IGetPostByIdServiceReturn extends IRetorno {
  obj?: IPost;
}
//get post by id
export async function getPostByIdService({
  id,
}: {
  id: number;
}): Promise<IGetPostByIdServiceReturn> {
  try {
    const RESPONSE = await apiReddit.get(`post/get/${id}`);
    return success(RESPONSE, `Success get post by id`, {
      id: RESPONSE.data.post.id,
      title: RESPONSE.data.post.title,
      user: RESPONSE.data.post.user,
    });
  } catch (e) {
    return failNoReturn();
  }
}
