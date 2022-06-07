import React, { useEffect } from "react";
import Header from "../../components/Header";
import { flavor } from "../../flavor";
import { Container2, MainContainer } from "./styles";
import * as Styles from "./styles";
import * as GlobalStyles from "../../global/globalStyled";
import { useDispatch } from "react-redux";
import { CustomModalTypes } from "../../store/ducks/CustomModal";
// import { Container } from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: CustomModalTypes.SET_OPEN,
      payload: { text: "Home", title: "Titulo" },
    });
  }, []);
  return (
    <MainContainer>
      <Header />
      <Styles.BodyContainer>
        <GlobalStyles.LeftContainer>
          <Styles.CreatePostCard>dsa</Styles.CreatePostCard>
        </GlobalStyles.LeftContainer>
        <GlobalStyles.RightContainer>
          <Styles.CreatePostCard>dsa</Styles.CreatePostCard>
        </GlobalStyles.RightContainer>
      </Styles.BodyContainer>
    </MainContainer>
  );
};

export default Home;
