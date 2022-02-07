import * as Styles from './styles';
import { flavor } from '../../flavor';
import { useSelector } from 'react-redux';
import React, { CSSProperties, useState } from 'react';
import { IGetSubredditPost } from '../../services/subreddit.service';
// import { Container } from './styles';
interface ICard {
  post: IGetSubredditPost;
  style?: CSSProperties;
}
const Card: React.FC<ICard> = ({ post, style }) => {
  //useState
  const [upordown, setUpordown] = useState<number>(0);
  //user
  const user = useSelector((state: any) => state.User);

  return (
    <Styles.MainContainer style={style}>
      <Styles.LeftContainer>
        <Styles.LeftContainerButton
          onClick={() => {
            if (upordown != 1) {
              setUpordown(1);
            } else {
              setUpordown(0);
            }
          }}
        >
          {upordown === 1 ? (
            <flavor.icons.whiteUpArrow />
          ) : (
            <flavor.icons.blackUpArrow />
          )}
        </Styles.LeftContainerButton>
        <Styles.LeftContainerDiv>50</Styles.LeftContainerDiv>
        <Styles.LeftContainerButton
          onClick={() => {
            if (upordown != -1) {
              setUpordown(-1);
            } else {
              setUpordown(0);
            }
          }}
        >
          {upordown === -1 ? (
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
