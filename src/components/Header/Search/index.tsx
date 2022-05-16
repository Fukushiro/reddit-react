import React, { useEffect, useState } from 'react';
import { CSSProperties } from 'styled-components';
import {
  callGetSubredditByName,
  IGetSubredditByName,
} from '../../../services/subreddit.service';
import * as Styles from './styles';
// import { Container } from './styles';
interface ISearch {
  style?: CSSProperties;
}
const Search: React.FC<ISearch> = ({ style }) => {
  const [text, setText] = useState<string>('');
  const [subReddits, setSubReddits] = useState<Array<IGetSubredditByName>>([]);
  const [refresh, setRefresh] = useState<boolean>(false);
  // functions
  async function searchSubredditByName() {
    const { retorno, erro, message } = await callGetSubredditByName({
      name: text,
    });

    // retorno?.subreddits;
    if (!erro) {
      if (retorno?.subreddits !== undefined) {
        setSubReddits(retorno?.subreddits);
      }
    }
  }
  // useEffects
  useEffect(() => {
    if (text === '') {
      return;
    }
    searchSubredditByName();
  }, [text]);

  useEffect(() => {
    setRefresh(!refresh);
  }, [subReddits]);
  return (
    <Styles.MainContainer style={style}>
      <Styles.Icon></Styles.Icon>
      <Styles.Input
        type={'text'}
        placeholder="Search reddit"
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></Styles.Input>

      <Styles.Container style={{ display: text != '' ? 'block' : 'none' }}>
        {subReddits.map((subreddit, index) => (
          <Styles.ButtonDiv key={index}>
            <Styles.ButtonInside
              onClick={() => {
                // navigate(
                //   urls.subreddit.replace(':subredditid', v.id.toString())
                // );
                // dispatch({ type: HeaderTypes.SET_OPEN_SUBREDDITS });
                console.log(subreddit.nome);
              }}
            >
              {subreddit.nome}
            </Styles.ButtonInside>
          </Styles.ButtonDiv>
        ))}
      </Styles.Container>
    </Styles.MainContainer>
  );
};

export default Search;
