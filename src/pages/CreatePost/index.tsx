// <<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import ButtonsBar from "../../components/ButtonsBar";
import Header from "../../components/Header";
import TextInput from "../../components/TextInput";
import { urls } from "../../route";
import { callCreatePostService } from "../../services/post.service";
// =======
// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import Button from '../../components/Button';
// import Header from '../../components/Header';
// import TextInput from '../../components/TextInput';
// import { urls } from '../../route';
// import { callCreatePostService } from '../../services/post.service';
// >>>>>>> 8295daaf9117960950154e57f49089cfdb9c87cf
import {
  callGetSubredditPostsService,
  callGetSubredditService,
  IGetSubredditService,
} from "../../services/subreddit.service";
import * as Styles from "./styles";
// import { Container } from './styles';

const CreatePost: React.FC = () => {
  //user
  const user: { user: { username: string; id: number }; logado: boolean } =
    useSelector((v: any) => v.User);
  //useStates
  const [subreddit, setSubreddit] = useState<IGetSubredditService>();
  const [hasText, setHasText] = useState<boolean>(false);
  //form
  const [title, setTitle] = useState<string>();
  const [text, setText] = useState<string>();
  //button bar
  const [selectedButton, setSelectedButton] = useState<number>(0);
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
        if (!subreddit.erro) {
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
    if (selectedButton === 0 && !!subreddit && !!title) {
      if (!text && selectedButton === 0) {
        return;
      }
      await callCreatePostService({
        subredditid: subreddit.id,
        title: title,
        text: !!text ? text : undefined,
        userid: user.user.id,
      });
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
          {/* formulario para cria????o de post */}
          <Styles.CreatePostContainerForm>
            <ButtonsBar
              botoes={["Post", "Image", "Link", "Poll"]}
              width={"100%"}
              selected={selectedButton}
              setSelected={setSelectedButton}
            />
            {/* campo para colocar titulo */}
            <TextInput
              value={title}
              setValue={setTitle}
              placeholder="Title"
              styles={{ width: "95%", marginTop: "10px" }}
            />
            {/* text area para colocar texto */}
            {selectedButton === 0 && (
              <Styles.CreatePostContainerFormTextArea
                placeholder="Text"
                value={text}
                onChange={(v) => {
                  setText(v.target.value);
                }}
                required={selectedButton === 0}
              />
            )}
            {/* container para bot??es */}
            <Styles.CreatePostContainerFormButtonDiv>
              {/* bot??o de postar */}
              <Button onClick={createPost} text="Criar post" />
            </Styles.CreatePostContainerFormButtonDiv>
          </Styles.CreatePostContainerForm>
        </Styles.CreatePostMainContainer>
      </Styles.CreatePostContainer>
    </Styles.MainContainer>
  );
};

export default CreatePost;
