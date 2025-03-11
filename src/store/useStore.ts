import { create } from "zustand";
import createUserSlice, { UserSlice } from "./userSlice";

export const useStore = create<UserSlice>((...a) => ({
  ...createUserSlice(...a),
}));

export default useStore;
