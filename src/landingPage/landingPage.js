import { useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserId } from "../redux/resultReducer";
import logo from "../assets/logo.png";

const LandingPage = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  function startQuiz() {
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current?.value));
    }
  }
  return (
    <main className="px-5 py-6 h-screen flex flex-col items-center justify-center relative">
      <section className="top-5 right-5 fixed">
        <img src={logo} className="w-10 max-md:w-8 max-sm:w-6" alt="logo" />
      </section>
      <h1 className="title text-center text-blue-200 text-5xl max-md:text-4xl max-sm:text-3xl">
        Mathematics Book Quiz
      </h1>
      {/* <p className="text">oleh HIMATIKA ITS</p> */}
      <form id="form" className="mt-3">
        <input
          ref={inputRef}
          placeholder="Username.."
          type="text"
          className="text-xl max-md:text-lg max-sm:text-base border-gray-100 border-[1px] px-2 max-md:px-1 py-1 ring-1 rounded-sm bg-transparent text-blue-200"
        />
      </form>
      <div className="mt-5 hover:scale-110 ease-in-out duration-200 rounded-sm ">
        <Link
          className="border-gray-100 border-[1px] px-10 py-1   bg-yellow-600 "
          to="/quiz"
          onClick={startQuiz}
        >
          Start
        </Link>
      </div>
      <section className="absolute bottom-10">
        <h1 className="subtext text-sm text-center max-sm:text-xs">
          Oleh Himpunan Mahasiwa Matematika ITS berkolaborasi dengan Asisten
          Dosen Matematika ITS
        </h1>
      </section>
    </main>
  );
};

export default LandingPage;
