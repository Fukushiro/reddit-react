import { createActions, createReducer } from 'reduxsauce';

export const { Types: HeaderTypes, Creators: HeaderCreators } = createActions({
  setOpenSubreddits: [],
});

const INITIAL_STATE: {
  subredditOpen: boolean;
} = {
  subredditOpen: false,
};

function open(state = INITIAL_STATE, action: { subredditOpen: boolean }) {
  return {
    ...state,
    subredditOpen: !state.subredditOpen,
  };
}

export default createReducer(INITIAL_STATE, {
  [HeaderTypes.SET_OPEN_SUBREDDITS]: open,
});
