import { Routes, Route } from "react-router-dom";
import { CheckUserExist } from "./helper/helper";
import LandingPage from "./landingPage/landingPage";
import QuizPage from "./quizPage/quizPage";
import ResultPage from "./resultPage/resultPage";

function App() {
  return (
    <main className=" max-w-7xl px-12 mx-auto max-md:px-4 bg-gray-900 text-gray-100">
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>

      <CheckUserExist>
        <Routes>
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </CheckUserExist>
    </main>
  );
}

export default App;
