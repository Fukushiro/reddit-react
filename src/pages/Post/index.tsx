import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostByIdService } from "../../services/post.service";
import * as Styles from "./styles";
import PostCard from "../../components/PostCard";
// import { Container } from './styles';

const Post: React.FC = () => {
  const { postid } = useParams();
  useEffect(() => {
    (async () => {
      if (postid === undefined) {
        return;
      }
      const { funcionou, obj, message } = await getPostByIdService({
        id: Number(postid),
      });
      if (funcionou) {
        console.log(obj);
      }
    })();
  }, [postid]);
  return (
    <Styles.Container>
      <PostCard style={{ marginTop: 20 }} />
    </Styles.Container>
  );
};

export default Post;
