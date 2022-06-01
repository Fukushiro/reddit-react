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
import { log } from "console";
interface IDrawerMenu {
  user: { user: { username: string; id: number }; logado: boolean } | null;
  title?: string;
  style?: CSSProperties;
  refresh?: boolean;
}
const DrawerMenu: React.FC<IDrawerMenu> = ({ user, title, style, refresh }) => {
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
        console.log("DrawerMenu getUserSubredditService", response, funcionou);

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
    <Styles.MainContainer style={style} data-testid={"mainContainer"}>
      <FaHome style={{ position: "absolute", left: 10 }} />

      <Styles.Button
        onClick={() => {
          setShowContent(!showContent);
          dispatch({ type: HeaderTypes.SET_OPEN_SUBREDDITS });
        }}
        data-testid={"button"}
      >
        {!!title ? title : "Home"}
      </Styles.Button>

      <Styles.Container
        data-testid={"container"}
        style={{ display: header.subredditOpen ? "block" : "none" }}
      >
        <Styles.Title>MY COMMUNITIES</Styles.Title>
        {/* <Styles.ButtonInside>dsads</Styles.ButtonInside> */}
        {subreddits.map((v, i) => (
          <Styles.ButtonDiv key={i}>
            <Styles.ButtonInside
              data-testid={`button_coisa${i}`}
              onClick={() => {
                console.log("Button clicked");

                navigate(
                  urls.subreddit.replace(":subredditid", v.id.toString())
                );
                dispatch({ type: HeaderTypes.SET_OPEN_SUBREDDITS });
              }}
            >
              {v.nome}
            </Styles.ButtonInside>
          </Styles.ButtonDiv>
        ))}
      </Styles.Container>
    </Styles.MainContainer>
  );
};

export default DrawerMenu;
