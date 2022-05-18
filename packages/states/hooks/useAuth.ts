import {useRecoilState} from "recoil";
import { UserType } from "../../types";
import authState from "../atoms/AuthState";

const useAuth = () => {
  const [user, setUser] = useRecoilState(authState);

  const logOut = () => {
    setUser({role: UserType.Unauthenticated});
  }

  return {
    user,
    logIn: setUser,
    logOut,
  }
}

export default useAuth;