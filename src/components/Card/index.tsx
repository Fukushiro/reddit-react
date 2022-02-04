import React from 'react';
import { IGetSubredditPost } from '../../services/subreddit.service';
import * as Styles from './styles';
// import { Container } from './styles';
interface ICard {
  post: IGetSubredditPost;
}
const Card: React.FC<ICard> = ({ post }) => {
  return <Styles.MainContainer>{post.title}</Styles.MainContainer>;
};

export default Card;
