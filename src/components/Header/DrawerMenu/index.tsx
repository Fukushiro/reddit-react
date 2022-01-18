import React, { useState } from 'react';
import * as Styles from './styles';
// import { Container } from './styles';
import { FaHome } from 'react-icons/fa';
const DrawerMenu: React.FC = () => {
  const [showContent, setShowContent] = useState<boolean>(true);
  return (
    <Styles.MainContainer>
      <FaHome style={{ position: 'absolute', left: 10 }} />

      <Styles.Button
        onClick={() => {
          setShowContent(!showContent);
        }}
      >
        dsadsa
      </Styles.Button>

      <Styles.Container style={{ display: showContent ? 'block' : 'none' }}>
        <Styles.Title>dsadas</Styles.Title>
        <Styles.ButtonInside>dsads</Styles.ButtonInside>
      </Styles.Container>
    </Styles.MainContainer>
  );
};

export default DrawerMenu;
