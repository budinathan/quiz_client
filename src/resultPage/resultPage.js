import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Result from "../components/result";
import { resetAllAction } from "../redux/questionReducer";
import { resetResultAction } from "../redux/resultReducer";
import { attempsNumber, earnPointsInt } from "../helper/helper";
import { usePublishresult } from "../hooks/setResult";
import logo from "../assets/logo.png";

const ResultPage = () => {
  const dispatch = useDispatch();
  const {
    questions: { answers },
    result: { result, userId },
  } = useSelector((state) => state);

  const attempts = attempsNumber(result);
  const earnPoints = earnPointsInt(result, answers, 10);

  //store user result
  usePublishresult({ result, username: userId, attempts, points: earnPoints });

  function onRestart() {
    console.log("Restarting");
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }
  return (
    <main className="px-5 py-6 h-screen overflow-auto flex flex-col items-center">
      <section className="top-5 right-5 fixed">
        <img src={logo} className="w-10 max-md:w-8 max-sm:w-6" alt="logo" />
      </section>
      <h1 className="title text-center text-blue-200 text-5xl max-md:text-4xl max-sm:text-3xl">
        Quiz Result
      </h1>
      <section className="mt-5 w-3/4 max-md:w-full border-gray-100 border-[1px] border-opacity-50 px-3">
        <div className="flex justify-between">
          <span className="max-md:text-sm">Username</span>
          <span className="max-md:text-sm">{userId}</span>
        </div>
        <div className="flex justify-between">
          <span className="max-md:text-sm">Total Score</span>
          <span className="max-md:text-sm">{earnPoints || 0}</span>
        </div>
      </section>
      <section>
        <Result />
      </section>
      <section className="mt-5 hover:scale-110 ease-in-out duration-200 rounded-sm">
        <Link
          className="border-gray-100 border-[1px] px-10 py-1   bg-yellow-600 "
          to="/"
          onClick={onRestart}
        >
          Restart
        </Link>
      </section>
    </main>
  );
};

export default ResultPage;
