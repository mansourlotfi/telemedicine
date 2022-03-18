import { useAppDispatch, useAppSelector } from "_redux/hooks";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "_redux/store";
import { useEffect } from "react";
import { signIn } from "_redux/slices/AuthenticationSlice";
import { setProfile } from "_redux/slices/ProfileSlice";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const dispatch = useAppDispatch();
  let phone = localStorage.getItem("phone");

  useEffect(() => {
    if (phone?.length === 11) {
      dispatch(signIn());
      dispatch(setProfile({ phone: phone }));
    }
  }, []);

  let location = useLocation();
  const isSignedIn =
    useAppSelector((S: RootState) => S.Authentication)?.isSignedIn || false;

  if (!isSignedIn) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
