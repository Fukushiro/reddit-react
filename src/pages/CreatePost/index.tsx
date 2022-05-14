import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import TextInput from "../../components/TextInput";
import { urls } from "../../route";
import { callCreatePostService } from "../../services/post.service";
import {
  callGetSubredditPostsService,
  callGetSubredditService,
  IGetSubredditService,
} from "../../services/subreddit.service";
import * as Styles from "./styles";
// import { Container } from './styles';

const CreatePost: React.FC = () => {
  //useStates
  const [subreddit, setSubreddit] = useState<IGetSubredditService>();
  //form
  const [title, setTitle] = useState<string>();
  //navigation
  const { subredditid } = useParams();
  const navigate = useNavigate();
  //useEffects
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
        }
      }
    })();
  }, [subredditid]);
  //functions
  async function createPost() {
    if (!!subreddit && !!title) {
      await callCreatePostService({ subredditid: subreddit.id, title: title });
      navigate(urls.subreddit.replace(":subredditid", subreddit.id.toString()));
    }
  }
  return (
    <Styles.MainContainer>
      <Header />
      <Styles.CreatePostContainer>
        <Styles.CreatePostMainContainer>
          <Styles.CreatePostContainerTitle>
            Create a post
          </Styles.CreatePostContainerTitle>
          <Styles.CreatePostContainerForm>
            <TextInput
              value={title}
              setValue={setTitle}
              placeholder="Title"
              styles={{ width: "100%" }}
            />
            <Styles.CreatePostContainerFormButtonDiv>
              <Button onClick={createPost} text="Criar post" />
            </Styles.CreatePostContainerFormButtonDiv>
          </Styles.CreatePostContainerForm>
        </Styles.CreatePostMainContainer>
      </Styles.CreatePostContainer>
    </Styles.MainContainer>
  );
};

export default CreatePost;
