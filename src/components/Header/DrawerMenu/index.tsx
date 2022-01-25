import React, { useEffect, useState } from 'react';
import * as Styles from './styles';
// import { Container } from './styles';
import { FaHome } from 'react-icons/fa';
import { getUserSubredditService } from '../../../services/user.service';
interface IDrawerMenu {
  user: { user: { username: string; id: number }; logado: boolean } | null;
  title?: string;
}
const DrawerMenu: React.FC<IDrawerMenu> = ({ user, title }) => {
  const [showContent, setShowContent] = useState<boolean>(true);
  const [subreddits, setSubreddits] = useState<
    Array<{ id: number; nome: string }>
  >([]);
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
        console.log(SUBREDDITS_TRATADOS);

        if (SUBREDDITS_TRATADOS !== undefined) {
          setSubreddits(SUBREDDITS_TRATADOS);
        }
      }
    })();
  }, [user]);
  return (
    <Styles.MainContainer>
      <FaHome style={{ position: 'absolute', left: 10 }} />

      <Styles.Button
        onClick={() => {
          setShowContent(!showContent);
        }}
      >
        {!!title ? title : 'Home'}
      </Styles.Button>

      <Styles.Container style={{ display: showContent ? 'block' : 'none' }}>
        <Styles.Title>MY COMMUNITIES</Styles.Title>
        {/* <Styles.ButtonInside>dsads</Styles.ButtonInside> */}
        {subreddits.map((v, i) => (
          <Styles.ButtonInside>{v.nome}</Styles.ButtonInside>
        ))}
      </Styles.Container>
    </Styles.MainContainer>
  );
};

export default DrawerMenu;
