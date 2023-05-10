import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getServerData } from "../helper/helper";

import * as Action from "../redux/questionReducer";

export const useFetchQuestion = () => {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState({
    Loading: false,
    apiData: [],
    serverError: null,
  });

  useEffect(() => {
    setGetData((prev) => ({ ...prev, Loading: true }));
    (async () => {
      try {
        const [{ questions, answers }] = await getServerData(
          `${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`,
          (Data) => Data
        );
        if (questions.length > 0) {
          setGetData((prev) => ({ ...prev, Loading: false }));
          setGetData((prev) => ({ ...prev, apiData: questions }));
          dispatch(Action.startExamAction({ question: questions, answers }));
        } else {
          throw new Error("No question available");
        }
      } catch (err) {
        setGetData((prev) => ({ ...prev, Loading: false }));
        setGetData((prev) => ({ ...prev, serverError: false }));
      }
    })();
  }, [dispatch]);
  return [getData, setGetData];
};

export const moveNextQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.moveNextQuestion());
  } catch (err) {
    console.log(err);
  }
};

export const movePreviousQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.movePreviousQuestion());
  } catch (err) {
    console.log(err);
  }
};
