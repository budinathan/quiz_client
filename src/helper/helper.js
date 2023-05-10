import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from "axios";

export function attempsNumber(result) {
  return result.filter((r) => r !== undefined).length;
}
export function earnPointsInt(result, answer, point) {
  return result
    .map((item, index) => answer[index] === item)
    .filter((index) => index)
    .map((index) => point)
    .reduce((prev, current) => prev + current, 0);
}

export function CheckUserExist({ children }) {
  const auth = useSelector((state) => state.result.userId);
  return auth ? children : <Navigate to="/" replace={true}></Navigate>;
}

//get server data
export async function getServerData(url, callback) {
  const data = await (await axios.get(url))?.data;
  return callback ? callback(data) : data;
}

//post server data
export async function postServerData(url, result, callback) {
  const data = await (await axios.post(url, result))?.data;
  return callback ? callback(data) : data;
}
