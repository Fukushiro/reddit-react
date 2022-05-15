import * as Styles from './styles';
import { flavor } from '../../flavor';
import { useSelector } from 'react-redux';
import React, { CSSProperties, useEffect, useState } from 'react';
import { IGetSubredditPost } from '../../services/subreddit.service';
import {
  callAvaliateUserUpdatePostService,
  callGetUserUpvotePostAvaliationService,
  callGetUserUpvotePostUpvotesService,
  IUserUpvotePostAvaliation,
} from '../../services/post.service';
// import { Container } from './styles';
interface ICard {
  post: IGetSubredditPost;
  style?: CSSProperties;
}
const Card: React.FC<ICard> = ({ post, style }) => {
  //useState
  const [upordown, setUpordown] = useState<number>(0);
  const [isUp, setIsUp] = useState<IUserUpvotePostAvaliation | null>(null);
  const [totalUp, setTotalUp] = useState<number>(0);
  const [update, setUpdate] = useState<boolean>(false);
  //user
  const user = useSelector((state: any) => state.User);

  //functions
  async function changeAvaliation(upvote: number) {
    await callAvaliateUserUpdatePostService({
      postid: post.id,
      upvote: upvote,
      userid: user.user.id,
    });
    setUpordown(upvote);
    setUpdate(!update);
  }

  useEffect(() => {
    (async () => {
      const up = await callGetUserUpvotePostUpvotesService({
        id: post.id,
      });

      if (up?.upvotes != null) {
        setTotalUp(up.upvotes);
      } else {
        setTotalUp(0);
      }
    })();
  }, [update, post]);
  useEffect(() => {
    (async () => {
      const at = await callGetUserUpvotePostAvaliationService({
        postid: post.id,
        userid: user.user.id,
      });
      if (at) {
        setIsUp(at);
      } else {
        setIsUp(null);
      }
    })();
  }, [user, post, update]);

  return (
    <Styles.MainContainer style={style}>
      <Styles.LeftContainer>
        <Styles.LeftContainerButton
          onClick={() => {
            if (upordown !== 1) {
              setUpordown(1);
              changeAvaliation(1);
            } else {
              console.log('Aqui');

              setUpordown(0);
              changeAvaliation(0);
            }
          }}
        >
          {!!isUp && isUp.upvote === 1 ? (
            <flavor.icons.whiteUpArrow />
          ) : (
            <flavor.icons.blackUpArrow />
          )}
        </Styles.LeftContainerButton>
        <Styles.LeftContainerDiv>{totalUp}</Styles.LeftContainerDiv>
        <Styles.LeftContainerButton
          onClick={() => {
            if (upordown !== -1) {
              setUpordown(-1);
              changeAvaliation(-1);
            } else {
              setUpordown(0);
              changeAvaliation(0);
            }
          }}
        >
          {!!isUp && isUp.upvote === -1 ? (
            <flavor.icons.whiteDownArrow />
          ) : (
            <flavor.icons.blackDownArrow />
          )}
        </Styles.LeftContainerButton>
      </Styles.LeftContainer>
      <Styles.RightContainer>
        <Styles.TopContainer>
          <Styles.Spam>Posted by u/Nome</Styles.Spam>
        </Styles.TopContainer>
        <Styles.TitleContainer>
          <Styles.TitleContainerTitle>{post.title}</Styles.TitleContainerTitle>
        </Styles.TitleContainer>

        {post?.text}
      </Styles.RightContainer>
    </Styles.MainContainer>
  );
};

export default Card;
