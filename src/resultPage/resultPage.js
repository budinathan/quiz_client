import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Result from "../components/result";
import { resetAllAction } from "../redux/questionReducer";
import { resetResultAction } from "../redux/resultReducer";
import { attempsNumber, earnPointsInt } from "../helper/helper";
import { usePublishresult } from "../hooks/setResult";

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
    <main className="px-5 py-6 h-screen flex flex-col items-center">
      <h1 className="title text-center">Mambo Quiz Result</h1>
      <section className="mt-5 w-1/2 border-gray-100 border-[1px] border-opacity-50 px-3">
        <div className="flex justify-between">
          <span>Username</span>
          <span>{userId}</span>
        </div>
        <div className="flex justify-between">
          <span>Total Score</span>
          <span>{earnPoints || 0}</span>
        </div>
      </section>
      <section>
        <Result />
      </section>
      <section className="mt-5">
        <Link
          className="border-gray-100 border-[1px] px-10 py-1"
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
