import { createActions, createReducer } from "reduxsauce";

export const { Types: HeaderTypes, Creators: HeaderCreators } = createActions({
  setOpenSubreddits: [],
  setOpenUserDrawer: [],
});

const INITIAL_STATE: {
  subredditOpen: boolean;
  userDrawerOpen: boolean;
} = {
  subredditOpen: false,
  userDrawerOpen: false,
};

function open(state = INITIAL_STATE) {
  return {
    ...state,
    subredditOpen: !state.subredditOpen,
  };
}

function openUserDrawer(state = INITIAL_STATE) {
  return {
    ...state,
    userDrawerOpen: !state.userDrawerOpen,
  };
}

export default createReducer(INITIAL_STATE, {
  [HeaderTypes.SET_OPEN_SUBREDDITS]: open,
  [HeaderTypes.SET_OPEN_USER_DRAWER]: openUserDrawer,
});
