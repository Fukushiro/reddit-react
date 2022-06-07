import { combineReducers } from "redux";
import User from "./User";
import Header from "./Header";
import CustomModal from "./CustomModal";
import { ICustomModal } from "./CustomModal";

export type RootState = {
  User: any;
  CustomModal: ICustomModal;
  Header: any;
};
export default combineReducers({ User, Header, CustomModal });
