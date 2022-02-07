import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import {
  callGetSubredditPostsService,
  callGetSubredditService,
  getSubredditService,
  IGetSubredditService,
} from '../../services/subreddit.service';
import * as Styles from './styles';
// import { Container } from './styles';
import { IGetSubredditPostsService } from './../../services/subreddit.service';
import Card from '../../components/Card';

const Subreddit: React.FC = () => {
  //useStates
  const [subreddit, setSubreddit] = useState<IGetSubredditService>();

  const [posts, setPosts] = useState<IGetSubredditPostsService>();
  //
  const { subredditid } = useParams();
  const location = useLocation();
  //useEffect
  // refresh current subreddit
  useEffect(() => {
    (async () => {
      if (subredditid) {
        const subreddit = await callGetSubredditService({
          id: Number(subredditid),
        });
        if (subreddit != null) {
          setSubreddit(subreddit);
          const posts = await callGetSubredditPostsService({
            id: Number(subredditid),
          });
          if (posts) {
            setPosts(posts);
          }
        }
      }
    })();
  }, [subredditid]);
  return (
    <Styles.MainContainer>
      <Header />
      <Styles.BackgroundImage src="https://placeholder.pics/svg/1000x900" />
      <Styles.InfosContainer>
        <Styles.IconImage src="https://placeholder.pics/svg/100x100" />
        <Styles.InfosTextContainer>
          <Styles.InfosTextLabel>
            Sion is love, Sion is life
          </Styles.InfosTextLabel>
          <Styles.InfosTextTitle>r/{subreddit?.nome}</Styles.InfosTextTitle>
        </Styles.InfosTextContainer>
      </Styles.InfosContainer>
      <Styles.BodyContainer>
        <Styles.LeftContainer>
          {posts?.posts.map((v, i) => {
            return <Card post={v} style={{ marginBottom: 10 }} key={i} />;
          })}
        </Styles.LeftContainer>
        <Styles.RightContainer></Styles.RightContainer>
      </Styles.BodyContainer>
    </Styles.MainContainer>
  );
};

export default Subreddit;
