import Question from "../components/question";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  moveNextQuestion,
  movePreviousQuestion,
} from "../redux/questionReducer";
import { PushAnswer } from "../hooks/setResult";
import { Navigate } from "react-router-dom";

const QuizPage = () => {
  const [check, setCheck] = useState(null);
  const result = useSelector((state) => state.result.result);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  function onNext() {
    console.log("Next Question");
    if (trace < queue.length) {
      dispatch(moveNextQuestion());
      //inset new result
      if (result.length <= trace) {
        dispatch(PushAnswer(check));
      }
    }
    setCheck(undefined);
  }
  function onPrevious() {
    console.log("Previous Question");
    if (trace > 0) {
      dispatch(movePreviousQuestion());
    }
  }

  function onChecked(check) {
    console.log(check);
    setCheck(check);
  }

  // Finish quiz
  if (result.length && result.length >= queue.length) {
    return <Navigate to="/result" replace="true"></Navigate>;
  }
  return (
    <main className="px-5 py-6 h-screen flex flex-col">
      <h1 className="title text-center">Mambo Quiz</h1>
      <Question onChecked={onChecked} />
      <div className="items-center justify-center flex gap-24">
        {trace > 0 ? (
          <button
            className="border-gray-100 border-[1px] px-10 py-1 text-base"
            onClick={onPrevious}
          >
            Previous
          </button>
        ) : (
          <></>
        )}

        <button
          className="border-gray-100 border-[1px] px-10 py-1 text-base"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default QuizPage;
