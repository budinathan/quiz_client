import { useEffect, useState } from "react";
import { getServerData } from "../helper/helper";

const Result = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getServerData(
      `${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`,
      (res) => setData(res)
    );
  });

  const pointAscending = [...data].sort((a, b) => b.points - a.points);
  return (
    <main className="mt-5">
      <h1 className="text mb-2 ">Leader Board</h1>
      <table className="w-full">
        <thead className="text-base text-center  bg-gray-700">
          <tr>
            <td className="px-5">Username</td>
            <td className="px-5">Points</td>
          </tr>
        </thead>
        <tbody className="text-base text-center px-5">
          {pointAscending.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item?.username || ""}</td>
                <td>{item?.points || 0} </td>
              </tr>
            );
          })}
          {!data ?? <div>No Data</div>}
        </tbody>
      </table>
    </main>
  );
};

export default Result;
