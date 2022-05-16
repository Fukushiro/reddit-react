import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
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
import { urls } from '../../route';
import Button from '../../components/Button';
import { Box, Modal, Typography } from '@mui/material';
import CustomModal from '../../components/CustomModal';

const Subreddit: React.FC = () => {
  //useStates
  const [subreddit, setSubreddit] = useState<IGetSubredditService>();

  const [posts, setPosts] = useState<IGetSubredditPostsService>();
  // modals
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>('');
  //
  const { subredditid } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  //useEffect
  // refresh current subreddit
  useEffect(() => {
    (async () => {
      if (subredditid) {
        const subreddit = await callGetSubredditService({
          id: Number(subredditid),
        });
        if (!subreddit?.erro) {
          setSubreddit(subreddit);
          const posts = await callGetSubredditPostsService({
            id: Number(subredditid),
          });
          if (posts) {
            setPosts(posts);
          }
        } else {
          if (subreddit.message) {
            setModalMessage(subreddit.message);
            setModalOpen(true);
          }
        }
      }
    })();
  }, [subredditid]);
  //functions
  //create post button handler
  function handlerCreatePost() {
    if (subredditid) {
      navigate(
        urls.createPost.replace(':subredditid', subredditid?.toString())
      );
    }
  }
  return (
    <Styles.MainContainer>
      <CustomModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        title="Retorno"
        text={modalMessage}
      />
      <Header isSubreddit currentSubreddit={subreddit} />
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
        <Styles.RightContainer>
          <Styles.RightContainerAbout>
            <Styles.RightContainerAboutTitle>
              About Community
            </Styles.RightContainerAboutTitle>
            <Styles.RightContainerAboutText>
              You play Sion? You belong here! Share your games, share your
              strategies, cheeses, big plays, guides, etc. Sion is a champion
              from the game League of Legends.
            </Styles.RightContainerAboutText>

            <Button
              onClick={handlerCreatePost}
              text={'Create post'}
              style={{ width: '100%' }}
            />
          </Styles.RightContainerAbout>
        </Styles.RightContainer>
      </Styles.BodyContainer>
    </Styles.MainContainer>
  );
};

export default Subreddit;
