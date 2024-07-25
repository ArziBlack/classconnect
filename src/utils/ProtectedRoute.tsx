import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '../hooks/reactReduxHooks';

export default function PrivateRoute() {
    const location = useLocation();
    const { data } = useAppSelector((store) => store.auth);
    const isUserLoggedIn = sessionStorage.getItem('token') !== null || data;

    return isUserLoggedIn ? (
        <Outlet />
    ) : (
        <Navigate to="/signin" state={{ from: location }} replace />
    );
}