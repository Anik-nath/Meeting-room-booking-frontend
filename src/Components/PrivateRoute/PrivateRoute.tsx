import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../Redux/hook";
import { RootState } from "../../Redux/store";

const PrivateRoute = () => {
  const { token } = useAppSelector((state: RootState) => state.user);

  return token ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
