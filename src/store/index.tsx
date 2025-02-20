import { configureStore } from "@reduxjs/toolkit";
import UISlice from "./ui-slice";

const store = configureStore({
  reducer: {
    ui: UISlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
