import Question from "../components/question";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  moveNextQuestion,
  movePreviousQuestion,
} from "../redux/questionReducer";
import { PushAnswer } from "../hooks/setResult";
import { Navigate } from "react-router-dom";
import logo from "../assets/logo.png";
import logoasdos from "../assets/logoasdos.jpeg";

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
    <main className="px-5 py-6 h-screen overflow-auto flex flex-col">
      <section className="top-5 right-3 absolute flex gap-2">
        <img src={logo} className="w-10 max-md:w-8 max-sm:w-6" alt="logo" />
        <img
          src={logoasdos}
          className="w-10 max-md:w-8 max-sm:w-6"
          alt="logo"
        />
      </section>
      <h1 className="title text-center text-blue-200 text-5xl max-md:text-4xl max-sm:text-3xl">
        Mambo Quiz
      </h1>
      <Question onChecked={onChecked} />
      <div className="items-center justify-center flex gap-24 mt-10">
        {trace > 0 ? (
          <button
            className="text-gray-800 text-sm p-1 w-20 bg-yellow-600 hover:scale-110 ease-in-out duration-200 rounded-sm"
            onClick={onPrevious}
          >
            Previous
          </button>
        ) : (
          <></>
        )}

        <button
          className=" text-gray-800 p-1 text-sm w-20 hover:scale-110 ease-in-out duration-200 rounded-sm bg-yellow-600"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default QuizPage;
