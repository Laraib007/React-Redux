import { createStoreHook } from "react-redux";
import reducer from "./reducer";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

export const store = createStoreHook(reducer, {}, applyMiddleware(thunk))