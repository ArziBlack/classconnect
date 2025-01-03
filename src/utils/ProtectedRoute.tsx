import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../hooks/reactReduxHooks";

export default function PrivateRoute() {
  const location = useLocation();
  const { data } = useAppSelector((store) => store.auth);
  let isUserLoggedIn = sessionStorage.getItem("token") !== null || data;
  isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}
