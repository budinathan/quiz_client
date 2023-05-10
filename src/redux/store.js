import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ResultReducer from "./resultReducer";
import QuestionReducer from "./questionReducer";

const rootReducer = combineReducers({
  questions: QuestionReducer,
  result: ResultReducer,
});

export default configureStore({ reducer: rootReducer });
