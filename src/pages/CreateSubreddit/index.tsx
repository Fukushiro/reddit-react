// <<<<<<< HEAD
import React, { useEffect, useState } from "react";
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
  createSubredditService,
  IGetSubredditService,
} from "../../services/subreddit.service";
import * as Styles from "./styles";
// import { Container } from './styles';

const CreateSubreddit: React.FC = () => {
  //useStates

  //form
  const [title, setTitle] = useState<string>();
  const [name, setName] = useState<string>();
  const [about, setAbout] = useState<string>();
  //button bar

  //navigation

  const navigate = useNavigate();
  //useEffects

  //functions
  async function createSubreddit() {
    if (!!title && !!name && !!about) {
      await createSubredditService({ nome: name, title: title, about: about });
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
          {/* formulario para criação de post */}
          <Styles.CreatePostContainerForm>
            {/* campo para colocar nome do subreddit */}
            <TextInput
              value={name}
              setValue={setName}
              placeholder="Name"
              styles={{ width: "95%", marginTop: "10px" }}
            />

            <TextInput
              value={title}
              setValue={setTitle}
              placeholder="Title"
              styles={{ width: "95%", marginTop: "10px" }}
            />
            {/* text area para colocar about */}
            <Styles.CreatePostContainerFormTextArea
              placeholder="Text"
              value={about}
              onChange={(v) => {
                setAbout(v.target.value);
              }}
              required={true}
            />
            {/* container para botões */}
            <Styles.CreatePostContainerFormButtonDiv>
              {/* botão de postar */}
              <Button
                onClick={createSubreddit}
                text="Criar subreddit"
                style={{ width: 150, marginTop: "10px" }}
              />
            </Styles.CreatePostContainerFormButtonDiv>
          </Styles.CreatePostContainerForm>
        </Styles.CreatePostMainContainer>
      </Styles.CreatePostContainer>
    </Styles.MainContainer>
  );
};

export default CreateSubreddit;
