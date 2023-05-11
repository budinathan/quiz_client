import { useEffect, useState } from "react";
import { getServerData } from "../helper/helper";
import { Link } from "react-router-dom";

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
    <main className="mt-5 flex gap-8 max-sm:flex-col mb-5">
      <section>
        <h1 className="text mb-1 text-center">Informasi</h1>
        <div className="flex flex-col px-3  py-1 max-md:text-sm  gap-2 max-md:text-center ">
          <a
            href="/"
            download
            className="hover:scale-110 ease-in-out duration-200 bg-yellow-600 rounded-md text-gray-800 text-center"
          >
            Download Solusi
          </a>
          <span className="hover:scale-110 ease-in-out duration-200 bg-yellow-600 rounded-md text-gray-800 text-center">
            Informasi lebih
          </span>
          <Link className="animate-pulse  hover:scale-110 bg-yellow-600 rounded-md text-gray-800 text-center">
            Beli sekarang!
          </Link>
          <Link
            to="/"
            className=" animate-pulse  hover:scale-110 ease-in-out duration-200 bg-yellow-600 rounded-md text-gray-800 text-center"
          >
            Chat dengan admin
          </Link>
        </div>
      </section>
      <section>
        <h1 className="text mb-1 text-center">Leaderboard</h1>
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
                  <td>{item?.points} </td>
                </tr>
              );
            })}
            {!data ?? <div>No Data</div>}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Result;
