import { createActions, CreatedActions, createReducer } from "reduxsauce";

interface ICustomModalType {
  SET_OPEN: any;
  SET_CLOSE: any;
}
export const {
  Creators: CustomModalCreators,
  Types: CustomModalTypes,
}: { Creators: any; Types: ICustomModalType } = createActions({
  setOpen: ["payload"],
  setClose: [],
});
export interface ICustomModal {
  open: boolean;
  text: string;
  title: string;
}
const INITIAL_STATE: ICustomModal = {
  open: false,
  text: "",
  title: "",
};

function open(
  state = INITIAL_STATE,
  action: { payload: { text: string; title: string } }
) {
  return {
    ...state,
    open: true,
    text: action.payload.text,
    title: action.payload.title,
  };
}

function close(state = INITIAL_STATE) {
  return {
    ...state,
    open: false,
    text: "",
    title: "",
  };
}

export default createReducer(INITIAL_STATE, {
  [CustomModalTypes.SET_OPEN]: open,
  [CustomModalTypes.SET_CLOSE]: close,
});
