import { postServerData } from "../helper/helper";
import * as Action from "../redux/resultReducer";

export const PushAnswer = (result) => async (dispatch) => {
  try {
    await dispatch(Action.pushResultAction(result));
  } catch (err) {
    console.log(err);
  }
};

export const UpdateResult = (index) => async (dispatch) => {
  try {
    dispatch(Action.updateResultAction(index));
  } catch (err) {
    console.log(err);
  }
};

//insert use data
export const usePublishresult = (resultData) => {
  const { result, username } = resultData;
  (async () => {
    try {
      if (result !== [] && !username) throw new Error("Could not get result");
      await postServerData(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`,
        resultData,
        (Data) => Data
      );
    } catch (err) {
      console.log(err);
    }
  })();
};
