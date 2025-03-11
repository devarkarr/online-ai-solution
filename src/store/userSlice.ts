import Cookies from "js-cookie";
import { StateCreator } from "zustand";

type User = {
  userId: string;
};

export interface UserSlice {
  user: User;
  setUser: (user: User) => void;
  resetUser: () => void;
}

const initialAuth = { userId: "" };

const createUserSlice: StateCreator<UserSlice> = (set) => {
  const cookieState = Cookies.get("userId");
  const initialAuthState = cookieState ? JSON.parse(cookieState) : initialAuth;
  return {
    user: initialAuthState,
    setUser: (user) =>
      set((state) => {
        Cookies.set("userId", JSON.stringify(user), {
          expires: 7,
          path: "/",
        });
        return { ...state, user };
      }),
    resetUser: () =>
      set((state) => {
        Cookies.remove("userId");
        return { ...state, user: initialAuth };
      }),
  };
};

export default createUserSlice;
