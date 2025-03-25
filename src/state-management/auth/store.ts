import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface AuthStore {
  user: string;
  login: (username: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: "",
  login: (username) => set(() => ({ user: username })),
  logout: () => set(() => ({ user: "" })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Counter Store", useAuthStore);
  //process is a global object that provides information about the current Node.js process
  //NODE_ENV is a constant defined in the current environment, values are "development" or "production"
  //mountStoreDevtool takes the name of the store that we should be able to see in the react dev tools and the store itself
}

export default useAuthStore;
