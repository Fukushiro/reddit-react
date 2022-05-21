import React from "react";
import Header from "../../components/Header";
import { flavor } from "../../flavor";
import { Container2, MainContainer } from "./styles";
import * as Styles from "./styles";
// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <MainContainer>
      <Header />
      <Styles.BodyContainer>
        <Styles.LeftContainer></Styles.LeftContainer>
        <Styles.RightContainer>
          <Styles.CreatePostCard>dsa</Styles.CreatePostCard>
        </Styles.RightContainer>
      </Styles.BodyContainer>
    </MainContainer>
  );
};

export default Home;
