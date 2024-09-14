"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { Toaster } from "sonner";

export default function GlobalProvider({ children }) {
  return (
    <Provider store={store}>
      <Toaster position="top-center" richColors />
      {children}
    </Provider>
  );
}
