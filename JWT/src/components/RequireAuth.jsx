import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken, selectCurrentUser } from "../features/auth/authSlice";

const RequireAuth = ({ allowedRoles }) => {
    const token = useSelector(selectCurrentToken);
    const user = useSelector(selectCurrentUser);
    const location = useLocation();

    return (
        // Authorization check: Does the user role match the required roles?
        user?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : token 
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}
export default RequireAuth;