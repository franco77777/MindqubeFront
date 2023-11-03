import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/currentUserSlice";
import utilsSlice from "./slices/utils";

export const store = configureStore({
    reducer: {
     user:userSlice,
     utils:utilsSlice
  },
  });
  
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

  