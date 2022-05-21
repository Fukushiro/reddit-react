import styled from "styled-components";

export const MainContainer = styled.div``;

export const CreatePostContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;
export const CreatePostMainContainer = styled.div`
  /* background-color: red; */
  width: 740px;
`;

export const CreatePostContainerTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  color: #d7dadc;
  border-bottom: 1px solid gray;
`;

export const CreatePostContainerForm = styled.div`
  background-color: #1a1a1b;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CreatePostContainerFormTextArea = styled.textarea`
  width: 95%;
  margin-top: 10px;
  background-color: #1a1a1b;
  border: 1px solid grey;
  padding: 10px;
  color: gray;
  &:focus {
    border: 1px solid white;
  }
`;

export const CreatePostContainerFormButtonDiv = styled.div`
  display: flex;

  width: 100%;
  justify-content: flex-end;
`;
