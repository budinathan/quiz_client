import { useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserId } from "../redux/resultReducer";

const LandingPage = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  function startQuiz() {
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current?.value));
    }
  }
  return (
    <main className="px-5 py-6 h-screen flex flex-col items-center justify-center">
      <h1 className="title">MamBo Quiz</h1>
      {/* <p className="text">oleh HIMATIKA ITS</p> */}
      <form id="form" className="mt-5">
        <input
          ref={inputRef}
          placeholder="Username"
          type="text"
          className="text-base border-gray-100 border-[1px] px-2 py-1 bg-transparent"
        />
      </form>
      <div className="mt-5">
        <Link
          className="border-gray-100 border-[1px] px-10 py-1"
          to="/quiz"
          onClick={startQuiz}
        >
          Start
        </Link>
      </div>
    </main>
  );
};

export default LandingPage;
