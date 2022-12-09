import { useLocation, Navigate } from "react-router-dom";
import { useAccount } from "wagmi";
const PrivateRoute = ({ children }) => {
  let { isConnected } = useAccount();
  let location = useLocation();
  console.log(isConnected);
  if (!isConnected) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
