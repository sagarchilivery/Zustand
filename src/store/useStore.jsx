import { create } from "zustand";
import createUserSlice from "./slices/createUserSlice";
import createPostSlice from "./slices/createPostSlice";

const useStore = create((set, get) => ({
  ...createUserSlice(set, get),
  ...createPostSlice(set, get),
}));

export default useStore;
