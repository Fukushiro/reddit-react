import React, { useEffect, useState } from "react";
import * as Styles from "./styles";
// import { Container } from './styles';
import { FaHome } from "react-icons/fa";
import { getUserSubredditService } from "../../../services/user.service";
import { useNavigate } from "react-router-dom";
import { urls } from "../../../route";
import { useDispatch, useSelector } from "react-redux";
import { HeaderTypes } from "../../../store/ducks/Header";
import { CSSProperties } from "styled-components";
import { IGetSubredditService } from "../../../services/subreddit.service";
interface IDrawerMenu {
  user: { user: { username: string; id: number }; logado: boolean } | null;

  style?: CSSProperties;
  refresh?: boolean;
}
const UserDrawer: React.FC<IDrawerMenu> = ({ user, style, refresh }) => {
  //redux
  const dispatch = useDispatch();
  const header = useSelector((state: any) => state.Header);

  //
  const [showContent, setShowContent] = useState<boolean>(false);
  const [subreddits, setSubreddits] = useState<
    Array<{ id: number; nome: string }>
  >([]);
  //nav
  const navigate = useNavigate();
  // useEffects
  useEffect(() => {
    (async () => {
      if (user?.logado) {
        const { funcionou, response } = await getUserSubredditService(
          user.user.id
        );

        const SUBREDDITS_TRATADOS:
          | Array<{ id: number; nome: string }>
          | undefined = response?.data?.subreddits.map(
          (v, i): { id: number; nome: string } => {
            return { id: v.id, nome: v.nome };
          }
        );

        if (SUBREDDITS_TRATADOS !== undefined) {
          setSubreddits(SUBREDDITS_TRATADOS);
        }
      }
    })();
  }, [user, refresh]);
  return (
    <Styles.MainContainer style={style}>
      <FaHome style={{ position: "absolute", left: 10 }} />

      <Styles.Button
        onClick={() => {
          setShowContent(!showContent);
          dispatch({ type: HeaderTypes.SET_OPEN_USER_DRAWER });
        }}
      >
        {user?.user.username}
      </Styles.Button>

      <Styles.Container
        style={{ display: header.userDrawerOpen ? "block" : "none" }}
      >
        <Styles.Title>My Stuff</Styles.Title>
        <Styles.Division />
        <Styles.Title>Options</Styles.Title>
        <Styles.Division />
        <Styles.ButtonDiv>
          <Styles.ButtonInside
            onClick={() => {
              navigate(urls.createSubreddit);
              dispatch({ type: HeaderTypes.SET_OPEN_USER_DRAWER });
            }}
          >
            create a subreddit
          </Styles.ButtonInside>
        </Styles.ButtonDiv>

        {/* <Styles.ButtonInside>dsads</Styles.ButtonInside> */}
        {/* {subreddits.map((v, i) => (
          <Styles.ButtonDiv key={i}>
            <Styles.ButtonInside
              onClick={() => {
                navigate(
                  urls.subreddit.replace(":subredditid", v.id.toString())
                );
                dispatch({ type: HeaderTypes.SET_OPEN_SUBREDDITS });
              }}
            >
              {v.nome}
            </Styles.ButtonInside>
          </Styles.ButtonDiv>
        ))} */}
      </Styles.Container>
    </Styles.MainContainer>
  );
};

export default UserDrawer;
