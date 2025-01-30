
import { createStore } from "redux";
import studReducer from "../reducer/studReducer";
import { createStoreHook } from "react-redux";

const store=createStore(studReducer);
export default store;