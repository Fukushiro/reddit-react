import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import {
  callGetSubredditPostsService,
  callGetSubredditService,
  getSubredditService,
  IGetSubredditService,
} from "../../services/subreddit.service";
import * as Styles from "./styles";
// import { Container } from './styles';
import { IGetSubredditPostsService } from "./../../services/subreddit.service";
import Card from "../../components/Card";
import { urls } from "../../route";
import Button from "../../components/Button";
import { Box, Modal, Typography } from "@mui/material";
import CustomModal from "../../components/CustomModal";
import {
  userIsInSubreddit,
  userJoinSubreddit,
  userRemoveSubreddit,
} from "../../services/usersubreddit.service";
import { useSelector } from "react-redux";
import { medium } from "../../constants/sizes";

const Subreddit: React.FC = () => {
  const user: { user: { username: string; id: number }; logado: boolean } =
    useSelector((v: any) => v.User);
  //useStates
  const [refresh, setRefresh] = useState<boolean>(false);
  const [subreddit, setSubreddit] = useState<IGetSubredditService>();

  const [posts, setPosts] = useState<IGetSubredditPostsService>();
  const [userInSubreddit, setUserInSubreddit] = useState<boolean>(false);
  const [refreshUserInSubreddit, setRefreshUserInSubreddit] =
    useState<boolean>(false);
  // modals
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");
  //
  const { subredditid } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  //useEffect
  // refresh current subreddit
  useEffect(() => {
    (async () => {
      if (subreddit) {
        const { message, funcionou, obj } = await userIsInSubreddit({
          subredditid: subreddit?.id,
          userid: user.user.id,
        });

        if (funcionou) {
          if (obj?.isInSubreddit != null) {
            setUserInSubreddit(obj?.isInSubreddit);
          }
        } else {
          openModalText(message);
        }
      }
    })();
  }, [subreddit, user, refreshUserInSubreddit, refresh]);
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
  }, [subredditid, refresh]);
  //functions
  //create post button handler
  function handlerCreatePost() {
    if (subredditid) {
      navigate(
        urls.createPost.replace(":subredditid", subredditid?.toString())
      );
    }
  }
  async function joinSubreddit() {
    if (subreddit) {
      const { message, funcionou } = await userJoinSubreddit({
        subredditid: subreddit.id,
        userid: user.user.id,
      });

      if (funcionou) {
      } else {
      }
      openModalText(message);
      setRefresh(!refresh);
    }
  }
  async function leaveSubreddit() {
    if (subreddit) {
      const { funcionou, message, response } = await userRemoveSubreddit({
        subredditid: subreddit.id,
        userid: user.user.id,
      });

      if (funcionou) {
      } else {
      }
      openModalText(message);
      setRefresh(!refresh);
    }
  }
  async function joinOnClick() {
    // setUserInSubreddit(!userInSubreddit);
    if (userInSubreddit) {
      leaveSubreddit();
    } else {
      joinSubreddit();
    }
  }
  function openModalText(text: string) {
    setModalOpen(true);
    setModalMessage(text);
  }
  return (
    <Styles.MainContainer>
      <CustomModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        title="Retorno"
        text={modalMessage}
      />
      <Header isSubreddit currentSubreddit={subreddit} refresh={refresh} />
      <Styles.ImageContainer>
        <Styles.BackgroundImage src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sion_0.jpg" />
      </Styles.ImageContainer>
      {/* Icone e titulo do subreddit */}
      <Styles.InfosContainer>
        <Styles.IconImage src="https://placeholder.pics/svg/100x100" />
        <Styles.InfosTextContainer>
          <Styles.InfosTextLabelDiv>
            <Styles.InfosTextLabel>{subreddit?.title}</Styles.InfosTextLabel>
            <Button
              onClick={joinOnClick}
              text={!!userInSubreddit ? "Leave" : "Join"}
            />
          </Styles.InfosTextLabelDiv>
          <Styles.InfosTextTitle>r/{subreddit?.nome}</Styles.InfosTextTitle>
        </Styles.InfosTextContainer>
      </Styles.InfosContainer>
      {/* corpo da pagina */}
      <Styles.BodyContainer>
        {/* container da esquerda */}
        <Styles.LeftContainer>
          {posts?.posts.map((v, i) => {
            return <Card post={v} style={{ marginBottom: 10 }} key={i} />;
          })}
        </Styles.LeftContainer>
        {/* container da direita */}
        <Styles.RightContainer>
          <Styles.RightContainerAbout>
            <Styles.RightContainerAboutTitle>
              About Community
            </Styles.RightContainerAboutTitle>
            <Styles.RightContainerAboutText>
              {subreddit?.about}
            </Styles.RightContainerAboutText>

            <Button
              onClick={handlerCreatePost}
              text={"Create post"}
              style={{ width: "100%" }}
            />
          </Styles.RightContainerAbout>
        </Styles.RightContainer>
      </Styles.BodyContainer>
    </Styles.MainContainer>
  );
};

export default Subreddit;
