import React from "react";
import { CSSProperties } from "styled-components";
import * as Styles from "./styles";
// import { Container } from './styles';
interface IPostCard {
  style?: CSSProperties;
}
const PostCard: React.FC<IPostCard> = ({ style }) => {
  return (
    <Styles.Container style={style}>
      {/* <Styles.LeftContainer>
        <Styles.LeftContainerButton
          onClick={() => {
            if (upordown !== 1) {
              setUpordown(1);
              changeAvaliation(1);
            } else {
              setUpordown(0);
              changeAvaliation(0);
            }
          }}
        >
          {!!isUp && isUp.upvote === 1 ? (
            <flavor.icons.whiteUpArrow />
          ) : (
            <flavor.icons.blackUpArrow />
          )}
        </Styles.LeftContainerButton>
        <Styles.LeftContainerDiv>{totalUp}</Styles.LeftContainerDiv>
        <Styles.LeftContainerButton
          onClick={() => {
            if (upordown !== -1) {
              setUpordown(-1);
              changeAvaliation(-1);
            } else {
              setUpordown(0);
              changeAvaliation(0);
            }
          }}
        >
          {!!isUp && isUp.upvote === -1 ? (
            <flavor.icons.whiteDownArrow />
          ) : (
            <flavor.icons.blackDownArrow />
          )}
        </Styles.LeftContainerButton>
      </Styles.LeftContainer>
      <Styles.RightContainer></Styles.RightContainer> */}
    </Styles.Container>
  );
};

export default PostCard;
