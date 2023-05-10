import { useEffect, useState } from "react";
import { useFetchQuestion } from "../hooks/fetchQuestion";
import { useDispatch, useSelector } from "react-redux";
import { UpdateResult } from "../hooks/setResult";

const Question = ({ onChecked }) => {
  const [check, setChecked] = useState(undefined);
  const [{ Loading, serverError }] = useFetchQuestion();
  const { trace } = useSelector((state) => state.questions);
  const result = useSelector((state) => state.result.result);
  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UpdateResult({ trace, check }));
  }, [check]);

  function onSelect(index) {
    onChecked(index);
    setChecked(index);
  }

  if (Loading) return <h1>Loading</h1>;
  if (serverError) return <h1>{serverError || "unknown error"}</h1>;
  return (
    <main className="flex flex-col">
      <h1 className="subtext">{questions?.question}</h1>
      <ul key={questions?.id}>
        {questions?.options.map((item, index) => {
          return (
            <li key={index}>
              <input
                type="radio"
                value={false}
                name="options"
                id={`item${index}-option`}
                onChange={() => onSelect(index)}
              />
              <label htmlFor={`item${index}-option`}>{item}</label>
              <div
                className={`check ${result[trace] === index ? "checked" : ""}`}
              ></div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Question;
